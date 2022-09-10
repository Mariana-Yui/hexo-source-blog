---
layout: post
title: koa-router源码解析
date: 2021-11-16
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1637054476066_2643.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1637054476066_2643.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - canvas
---

# 背景

上班摸鱼事件研究 koa 及其周边中间件的第一弹 - `koa-router`, 个人理解都写在注释中了, koa 及 koa-xx 源码突出一个短小精悍, 很适合进阶阅读。

# 源码解读

````javascript
const debug = require('debug')('koa-router'); // logger
const compose = require('koa-compose'); // 执行中间件列表
const HttpError = require('http-errors'); // 封装的http错误库
const methods = require('methods'); // 返回http.METHODS
const Layer = require('./layer');
const { pathToRegexp } = require('path-to-regexp'); // 对路由path正则解析

module.exports = Router;

/**
 * Create a new router.
 *
 * @example
 *
 * Basic usage:
 *
 * ```javascript
 * const Koa = require('koa');
 * const Router = require('@koa/router');
 *
 * const app = new Koa();
 * const router = new Router();
 *
 * router.get('/', (ctx, next) => {
 *   // ctx.router available
 * });
 *
 * app
 *   .use(router.routes())
 *   .use(router.allowedMethods());
 * ```
 *
 * @alias module:koa-router
 * @param {Object=} opts
 * @param {String=} opts.prefix prefix router paths
 * @constructor
 */

function Router(opts) {
  // 如果没用new实例则返回new实例, 即创建路由时可以使用new Router()或Router()
  if (!(this instanceof Router)) return new Router(opts);

  this.opts = opts || {};
  this.methods = this.opts.methods || ['HEAD', 'OPTIONS', 'GET', 'PUT', 'PATCH', 'POST', 'DELETE'];
  // 存储router.param()指定的参数, 键为参数名称, 值为中间件
  this.params = {};
  // 每次router.verb()都会创建一个layer, 存储这些layer
  this.stack = [];
}

/**
 * Create `router.verb()` methods, where *verb* is one of the HTTP verbs such
 * as `router.get()` or `router.post()`.
 *
 * Match URL patterns to callback functions or controller actions using `router.verb()`,
 * where **verb** is one of the HTTP verbs such as `router.get()` or `router.post()`.
 *
 * Additionaly, `router.all()` can be used to match against all methods.
 *
 * ```javascript
 * router
 *   .get('/', (ctx, next) => {
 *     ctx.body = 'Hello World!';
 *   })
 *   .post('/users', (ctx, next) => {
 *     // ...
 *   })
 *   .put('/users/:id', (ctx, next) => {
 *     // ...
 *   })
 *   .del('/users/:id', (ctx, next) => {
 *     // ...
 *   })
 *   .all('/users/:id', (ctx, next) => {
 *     // ...
 *   });
 * ```
 *
 * When a route is matched, its path is available at `ctx._matchedRoute` and if named,
 * the name is available at `ctx._matchedRouteName`
 *
 * Route paths will be translated to regular expressions using
 * [path-to-regexp](https://github.com/pillarjs/path-to-regexp).
 *
 * Query strings will not be considered when matching requests.
 *
 * #### Named routes
 *
 * Routes can optionally have names. This allows generation of URLs and easy
 * renaming of URLs during development.
 *
 * ```javascript
 * router.get('user', '/users/:id', (ctx, next) => {
 *  // ...
 * });
 *
 * router.url('user', 3);
 * // => "/users/3"
 * ```
 *
 * #### Multiple middleware
 *
 * Multiple middleware may be given:
 *
 * ```javascript
 * router.get(
 *   '/users/:id',
 *   (ctx, next) => {
 *     return User.findOne(ctx.params.id).then(function(user) {
 *       ctx.user = user;
 *       next();
 *     });
 *   },
 *   ctx => {
 *     console.log(ctx.user);
 *     // => { id: 17, name: "Alex" }
 *   }
 * );
 * ```
 *
 * ### Nested routers
 *
 * Nesting routers is supported:
 *
 * ```javascript
 * const forums = new Router();
 * const posts = new Router();
 *
 * posts.get('/', (ctx, next) => {...});
 * posts.get('/:pid', (ctx, next) => {...});
 * forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());
 *
 * // responds to "/forums/123/posts" and "/forums/123/posts/123"
 * app.use(forums.routes());
 * ```
 *
 * #### Router prefixes
 *
 * Route paths can be prefixed at the router level:
 *
 * ```javascript
 * const router = new Router({
 *   prefix: '/users'
 * });
 *
 * router.get('/', ...); // responds to "/users"
 * router.get('/:id', ...); // responds to "/users/:id"
 * ```
 *
 * #### URL parameters
 *
 * Named route parameters are captured and added to `ctx.params`.
 *
 * ```javascript
 * router.get('/:category/:title', (ctx, next) => {
 *   console.log(ctx.params);
 *   // => { category: 'programming', title: 'how-to-node' }
 * });
 * ```
 *
 * The [path-to-regexp](https://github.com/pillarjs/path-to-regexp) module is
 * used to convert paths to regular expressions.
 *
 * @name get|put|post|patch|delete|del
 * @memberof module:koa-router.prototype
 * @param {String} path
 * @param {Function=} middleware route middleware(s)
 * @param {Function} callback route callback
 * @returns {Router}
 */

/**
 * methods库就两行代码, 读取http.METHODS返回小写列表
 * 遍历所有http方法, 赋值实例方法例如router.get/router.post等
 * 并通过router.register方法将每个通过该实例方法创建的路由注册成Layer
 */
for (let i = 0; i < methods.length; i++) {
  function setMethodVerb(method) {
    Router.prototype[method] = function (name, path, middleware) {
      if (typeof path === 'string' || path instanceof RegExp) {
        middleware = Array.prototype.slice.call(arguments, 2);
      } else {
        middleware = Array.prototype.slice.call(arguments, 1);
        path = name;
        name = null;
      }

      this.register(path, [method], middleware, {
        name: name
      });

      return this;
    };
  }
  setMethodVerb(methods[i]);
}

// Alias for `router.delete()` because delete is a reserved word
// 设置router.delete的别名
Router.prototype.del = Router.prototype['delete'];

/**
 * Use given middleware.
 *
 * Middleware run in the order they are defined by `.use()`. They are invoked
 * sequentially, requests start at the first middleware and work their way
 * "down" the middleware stack.
 *
 * @example
 *
 * ```javascript
 * // session middleware will run before authorize
 * router
 *   .use(session())
 *   .use(authorize());
 *
 * // use middleware only with given path
 * router.use('/users', userAuth());
 *
 * // or with an array of paths
 * router.use(['/users', '/admin'], userAuth());
 *
 * app.use(router.routes());
 * ```
 *
 * @param {String=} path
 * @param {Function} middleware
 * @param {Function=} ...
 * @returns {Router}
 */

Router.prototype.use = function () {
  const router = this;
  const middleware = Array.prototype.slice.call(arguments);
  let path;

  // support array of paths
  // 和router.register类似, use的path参数也支持数组, 如果是数组则做一层递归, [p].concat(middleware.slice(1))即path+middleware
  if (Array.isArray(middleware[0]) && typeof middleware[0][0] === 'string') {
    let arrPaths = middleware[0];
    for (let i = 0; i < arrPaths.length; i++) {
      const p = arrPaths[i];
      router.use.apply(router, [p].concat(middleware.slice(1)));
    }

    return this;
  }

  // use可以设置全局中间件, 可以不需要path
  const hasPath = typeof middleware[0] === 'string';
  // 取出path, 此时middleware参数就是中间件数组
  if (hasPath) path = middleware.shift();

  for (let i = 0; i < middleware.length; i++) {
    const m = middleware[i];
    // router还支持一种嵌套路由例如, router.use('/user', userRouter.routes())
    // 从routes()中已经知道了会对dispatch添加router属性指向自身this
    // 所以该分支用于处理嵌套路由, 此时第一个参数path如果存在则会作为prefix
    if (m.router) {
      // 克隆router
      const cloneRouter = Object.assign(Object.create(Router.prototype), m.router, {
        // stack即嵌套路由含有的layer
        stack: m.router.stack.slice(0)
      });

      // 克隆layer
      for (let j = 0; j < cloneRouter.stack.length; j++) {
        const nestedLayer = cloneRouter.stack[j];
        const cloneLayer = Object.assign(Object.create(Layer.prototype), nestedLayer);

        // 设置prefix
        if (path) cloneLayer.setPrefix(path);
        if (router.opts.prefix) cloneLayer.setPrefix(router.opts.prefix);
        // 将嵌套路由中克隆的中间件抽离出来, 赋值给自身路由
        router.stack.push(cloneLayer);
        cloneRouter.stack[j] = cloneLayer;
      }

      // 如果自身路由对param()做过设置, 这里也要对嵌套路由中提取的中间件赋值
      if (router.params) {
        function setRouterParams(paramArr) {
          const routerParams = paramArr;
          for (let j = 0; j < routerParams.length; j++) {
            const key = routerParams[j];
            cloneRouter.param(key, router.params[key]);
          }
        }
        setRouterParams(Object.keys(router.params));
      }
    } else {
      // 单纯中间件, 则和router.verb一样register中间件
      const keys = [];
      pathToRegexp(router.opts.prefix || '', keys);
      const routerPrefixHasParam = router.opts.prefix && keys.length;
      router.register(path || '([^/]*)', [], m, {
        end: false,
        ignoreCaptures: !hasPath && !routerPrefixHasParam
      });
    }
  }

  return this;
};

/**
 * Set the path prefix for a Router instance that was already initialized.
 *
 * @example
 *
 * ```javascript
 * router.prefix('/things/:thing_id')
 * ```
 *
 * @param {String} prefix
 * @returns {Router}
 */
// 给已创建Layer统一设置路由前缀
Router.prototype.prefix = function (prefix) {
  prefix = prefix.replace(/\/$/, '');

  this.opts.prefix = prefix;

  for (let i = 0; i < this.stack.length; i++) {
    const route = this.stack[i];
    route.setPrefix(prefix);
  }

  return this;
};

/**
 * Returns router middleware which dispatches a route matching the request.
 *
 * @returns {Function}
 */
// router.routes()定义dispatch函数用于执行中间件, 返回dispatch函数
Router.prototype.routes = Router.prototype.middleware = function () {
  const router = this;

  let dispatch = function dispatch(ctx, next) {
    debug('%s %s', ctx.method, ctx.path);
    // 解析请求上下文的path和method
    const path = router.opts.routerPath || ctx.routerPath || ctx.path;
    // 返回匹配的layer
    const matched = router.match(path, ctx.method);
    let layerChain;

    // 找了koa和koa-router的ctx.matched, 貌似不会进入if分支
    if (ctx.matched) {
      ctx.matched.push.apply(ctx.matched, matched.path);
    } else {
      // 将匹配到的layer赋值给上下文
      ctx.matched = matched.path;
    }

    // 将koa-router实例赋值上下文
    ctx.router = router;

    // 匹配到的methods列表为空的话直接next()
    if (!matched.route) return next();

    // 匹配path和method的layer列表
    const matchedLayers = matched.pathAndMethod;
    const mostSpecificLayer = matchedLayers[matchedLayers.length - 1];
    // 去最后一个元素作为ctx._matchedRoute
    ctx._matchedRoute = mostSpecificLayer.path;
    if (mostSpecificLayer.name) {
      ctx._matchedRouteName = mostSpecificLayer.name;
    }

    /**
     * 这里通过reduce做了两件事
     * 1. 将所有layer的中间件即layer.stack整合到一个列表中
     * 2. 在处理每个layer的中间件前push一个初始化当前ctx上下文的中间件, 避免不同layer之间相互影响
     * layer.captures(path)调用path.match(this.regexp)匹配ctx.path中的params
     * layer.params()会decode params的值并复制给ctx.params
     */
    layerChain = matchedLayers.reduce(function (memo, layer) {
      memo.push(function (ctx, next) {
        ctx.captures = layer.captures(path, ctx.captures);
        ctx.params = ctx.request.params = layer.params(path, ctx.captures, ctx.params);
        ctx.routerPath = layer.path;
        ctx.routerName = layer.name;
        ctx._matchedRoute = layer.path;
        if (layer.name) {
          ctx._matchedRouteName = layer.name;
        }
        return next();
      });
      return memo.concat(layer.stack);
    }, []);

    // koa-compose执行中间件
    return compose(layerChain)(ctx, next);
  };

  dispatch.router = this;

  return dispatch;
};

/**
 * Returns separate middleware for responding to `OPTIONS` requests with
 * an `Allow` header containing the allowed methods, as well as responding
 * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
 *
 * @example
 *
 * ```javascript
 * const Koa = require('koa');
 * const Router = require('@koa/router');
 *
 * const app = new Koa();
 * const router = new Router();
 *
 * app.use(router.routes());
 * app.use(router.allowedMethods());
 * ```
 *
 * **Example with [Boom](https://github.com/hapijs/boom)**
 *
 * ```javascript
 * const Koa = require('koa');
 * const Router = require('@koa/router');
 * const Boom = require('boom');
 *
 * const app = new Koa();
 * const router = new Router();
 *
 * app.use(router.routes());
 * app.use(router.allowedMethods({
 *   throw: true,
 *   notImplemented: () => new Boom.notImplemented(),
 *   methodNotAllowed: () => new Boom.methodNotAllowed()
 * }));
 * ```
 *
 * @param {Object=} options
 * @param {Boolean=} options.throw throw error instead of setting status and header
 * @param {Function=} options.notImplemented throw the returned value in place of the default NotImplemented error
 * @param {Function=} options.methodNotAllowed throw the returned value in place of the default MethodNotAllowed error
 * @returns {Function}
 */

Router.prototype.allowedMethods = function (options) {
  options = options || {};
  const implemented = this.methods;

  // koa-compose对next()的返回是Promise的形式, allowedMethods则是用于对返回的数据进行处理
  return function allowedMethods(ctx, next) {
    return next().then(function () {
      const allowed = {};

      // 这里可以看出该方法只针对status为空或404的情况
      if (!ctx.status || ctx.status === 404) {
        // 遍历匹配的所有layer, 读取所有method
        for (let i = 0; i < ctx.matched.length; i++) {
          const route = ctx.matched[i];
          for (let j = 0; j < route.methods.length; j++) {
            const method = route.methods[j];
            allowed[method] = method;
          }
        }
        // 所有允许的请求method
        const allowedArr = Object.keys(allowed);

        // 如果请求方法不被允许, this.methods为初始化Router时设置的允许方法列表
        if (!~implemented.indexOf(ctx.method)) {
          // 是否需要抛出错误, 以及是否自定义错误
          if (options.throw) {
            let notImplementedThrowable =
              typeof options.notImplemented === 'function'
                ? options.notImplemented() // set whatever the user returns from their function
                : new HttpError.NotImplemented();

            throw notImplementedThrowable;
          } else {
            // 设置501 not implemented 状态码和响应头
            ctx.status = 501;
            ctx.set('Allow', allowedArr.join(', '));
          }
        } else if (allowedArr.length) {
          // 走到这一步表示请求方法是被允许的, 但是可能是OPTIONS预请求, 往往不会对预请求做处理
          // 这里直接正常返回
          if (ctx.method === 'OPTIONS') {
            ctx.status = 200;
            ctx.body = '';
            ctx.set('Allow', allowedArr.join(', '));
          } else if (!allowed[ctx.method]) {
            // 走到这里表示, 请求是被允许的但是没有相应的layer处理这个路由, 类似的
            // 如果有自定义错误则抛出异常
            if (options.throw) {
              let notAllowedThrowable =
                typeof options.methodNotAllowed === 'function'
                  ? options.methodNotAllowed() // set whatever the user returns from their function
                  : new HttpError.MethodNotAllowed();

              throw notAllowedThrowable;
            } else {
              // 否则抛出405 method not allow状态码并设置响应头
              ctx.status = 405;
              ctx.set('Allow', allowedArr.join(', '));
            }
          }
        }
      }
    });
  };
};

/**
 * Register route with all methods.
 *
 * @param {String} name Optional.
 * @param {String} path
 * @param {Function=} middleware You may also pass multiple middleware.
 * @param {Function} callback
 * @returns {Router}
 * @private
 */
// 和router.verb一样, 只不过第二个参数不再是单个verb,而是所有http.METHODS
Router.prototype.all = function (name, path, middleware) {
  if (typeof path === 'string') {
    middleware = Array.prototype.slice.call(arguments, 2);
  } else {
    middleware = Array.prototype.slice.call(arguments, 1);
    path = name;
    name = null;
  }

  this.register(path, methods, middleware, { name });

  return this;
};

/**
 * Redirect `source` to `destination` URL with optional 30x status `code`.
 *
 * Both `source` and `destination` can be route names.
 *
 * ```javascript
 * router.redirect('/login', 'sign-in');
 * ```
 *
 * This is equivalent to:
 *
 * ```javascript
 * router.all('/login', ctx => {
 *   ctx.redirect('/sign-in');
 *   ctx.status = 301;
 * });
 * ```
 *
 * @param {String} source URL or route name.
 * @param {String} destination URL or route name.
 * @param {Number=} code HTTP status code (default: 301).
 * @returns {Router}
 */

Router.prototype.redirect = function (source, destination, code) {
  // lookup source route by name
  if (source[0] !== '/') source = this.url(source);

  // lookup destination route by name
  if (destination[0] !== '/' && !destination.includes('://')) destination = this.url(destination);

  return this.all(source, (ctx) => {
    ctx.redirect(destination);
    ctx.status = code || 301;
  });
};

/**
 * Create and register a route.
 *
 * @param {String} path Path string.
 * @param {Array.<String>} methods Array of HTTP verbs.
 * @param {Function} middleware Multiple middleware also accepted.
 * @returns {Layer}
 * @private
 */
// 这里的methods和middleware都是数组
Router.prototype.register = function (path, methods, middleware, opts) {
  opts = opts || {};

  const router = this;
  const stack = this.stack;

  // support array of paths
  // 因为register的path也支持数组, 所以这里做一个递归
  if (Array.isArray(path)) {
    for (let i = 0; i < path.length; i++) {
      const curPath = path[i];
      router.register.call(router, curPath, methods, middleware, opts);
    }

    return this;
  }

  // create route
  // 创建路由, 最后一个参数用作path-to-regexp库的解析配置
  const route = new Layer(path, methods, middleware, {
    end: opts.end === false ? opts.end : true,
    name: opts.name,
    sensitive: opts.sensitive || this.opts.sensitive || false,
    strict: opts.strict || this.opts.strict || false,
    prefix: opts.prefix || this.opts.prefix || '',
    ignoreCaptures: opts.ignoreCaptures
  });

  // 设置前缀
  if (this.opts.prefix) {
    route.setPrefix(this.opts.prefix);
  }

  // add parameter middleware
  /**
   * 这段代码耐人寻味, 首先router.param()的机制是为参数设置的中间件会在所有相关中间件之前执行
   * 所以会在每创建一个layer都会遍历存储router.params如果有匹配的中间件, 则把中间件加到layer的中间件列表的最前面
   */
  for (let i = 0; i < Object.keys(this.params).length; i++) {
    const param = Object.keys(this.params)[i];
    route.param(param, this.params[param]);
  }

  // 存储layer
  stack.push(route);

  debug('defined route %s %s', route.methods, route.path);

  return route;
};

/**
 * Lookup route with given `name`.
 *
 * @param {String} name
 * @returns {Layer|false}
 */
// 返回layer.name和参数匹配的第一个layer
Router.prototype.route = function (name) {
  const routes = this.stack;

  for (let len = routes.length, i = 0; i < len; i++) {
    if (routes[i].name && routes[i].name === name) return routes[i];
  }

  return false;
};

/**
 * Generate URL for route. Takes a route name and map of named `params`.
 *
 * @example
 *
 * ```javascript
 * router.get('user', '/users/:id', (ctx, next) => {
 *   // ...
 * });
 *
 * router.url('user', 3);
 * // => "/users/3"
 *
 * router.url('user', { id: 3 });
 * // => "/users/3"
 *
 * router.use((ctx, next) => {
 *   // redirect to named route
 *   ctx.redirect(ctx.router.url('sign-in'));
 * })
 *
 * router.url('user', { id: 3 }, { query: { limit: 1 } });
 * // => "/users/3?limit=1"
 *
 * router.url('user', { id: 3 }, { query: "limit=1" });
 * // => "/users/3?limit=1"
 * ```
 *
 * @param {String} name route name
 * @param {Object} params url parameters
 * @param {Object} [options] options parameter
 * @param {Object|String} [options.query] query options
 * @returns {String|Error}
 */

Router.prototype.url = function (name, params) {
  const route = this.route(name);

  if (route) {
    const args = Array.prototype.slice.call(arguments, 1);
    return route.url.apply(route, args);
  }

  return new Error(`No route found for name: ${name}`);
};

/**
 * Match given `path` and return corresponding routes.
 *
 * @param {String} path
 * @param {String} method
 * @returns {Object.<path, pathAndMethod>} returns layers that matched path and
 * path and method.
 * @private
 */
// matched.path 为匹配到path的layer
// matched.pathAndMethod为匹配到path和method的layer
// matched.route为是否匹配上的method
Router.prototype.match = function (path, method) {
  const layers = this.stack;
  let layer;
  const matched = {
    path: [],
    pathAndMethod: [],
    route: false
  };

  // 遍历layer返回和当前请求路由匹配的layer
  for (let len = layers.length, i = 0; i < len; i++) {
    layer = layers[i];

    debug('test %s %s', layer.path, layer.regexp);

    // layer.match调用layer.regexp.test(path), 匹配路径
    if (layer.match(path)) {
      matched.path.push(layer);
      // 匹配方法, 如果methods长度为0或有匹配到的方法, ~操作符是按位非
      if (layer.methods.length === 0 || ~layer.methods.indexOf(method)) {
        matched.pathAndMethod.push(layer);
        if (layer.methods.length) matched.route = true;
      }
    }
  }

  return matched;
};

/**
 * Run middleware for named route parameters. Useful for auto-loading or
 * validation.
 *
 * @example
 *
 * ```javascript
 * router
 *   .param('user', (id, ctx, next) => {
 *     ctx.user = users[id];
 *     if (!ctx.user) return ctx.status = 404;
 *     return next();
 *   })
 *   .get('/users/:user', ctx => {
 *     ctx.body = ctx.user;
 *   })
 *   .get('/users/:user/friends', ctx => {
 *     return ctx.user.getFriends().then(function(friends) {
 *       ctx.body = friends;
 *     });
 *   })
 *   // /users/3 => {"id": 3, "name": "Alex"}
 *   // /users/3/friends => [{"id": 4, "name": "TJ"}]
 * ```
 *
 * @param {String} param
 * @param {Function} middleware
 * @returns {Router}
 */
// 和register新建layer的逻辑类似, register是新建layer, 遍历router.params, 把params匹配到的中间件插到layer.stack最前面
// param则是遍历layer, 然后把param设置的中间件插到layer.stack最前面(path多个参数情况下可能不是最前面, 这里先这样形容)
Router.prototype.param = function (param, middleware) {
  this.params[param] = middleware;
  for (let i = 0; i < this.stack.length; i++) {
    const route = this.stack[i];
    route.param(param, middleware);
  }

  return this;
};

/**
 * Generate URL from url pattern and given `params`.
 *
 * @example
 *
 * ```javascript
 * const url = Router.url('/users/:id', {id: 1});
 * // => "/users/1"
 * ```
 *
 * @param {String} path url pattern
 * @param {Object} params url parameters
 * @returns {String}
 */
// 调用layer的实例方法, 填充参数, 注意到一点, 这里调用的是layer的实例方法, 内部会引用this.path, 所以新建了一个对象{path}来创建上下文
// 内部调用了path-to-regexp的compile/toPath方法来实现
Router.url = function (path) {
  const args = Array.prototype.slice.call(arguments, 1);
  return Layer.prototype.url.apply({ path }, args);
};
````
