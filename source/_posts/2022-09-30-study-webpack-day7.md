---
layout: post
title: webpack学习笔记(7)
date: 2022-09-30 16:36:19
update: 2022-10-06 17:26:01
author: Mariana
mermaid: true
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664356151986_983.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664356151986_983.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - webpack
---

# 学习笔记

## watch

本节之前如果要运行打包产物, 博主都需要执行两步:

1. `webpack` 打包代码
2. 使用 VSCode 插件 [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 打开 5500 端口查看网页

webpack 提供了`watch`参数监听文件变化自动执行打包命令, 可以通过:

`webpack --watch`

或者在 webpack.config.js 中配置

`watch: true`

即使这样做依旧存在几个问题:

1. 每次变更时都是全部文件打包, 没有变更的文件也会重新打包
2. 打包结果会写入文件系统即本地磁盘, 读取文件系统速率相对较慢
3. live-server 插件只能在 vscode 中使用
4. 每次都会刷新整个页面, 无法保留页面当前状态

那存在上述这些问题, 有没有工具能够解决呢? 有的.

## webpack-dev-server

webpack 提供了`webpack-dev-server`工具来解决上述问题, 我们一个一个阐述.

安装:

`yarn add -D webpack-dev-server`

安装完`webpack-dev-server`后就不需要安装`live-server`插件, 也不需要执行上述两步了, 直接运行:

`webpack serve`

`web-pack-dev-server`内置了 express 服务监听文件变更, 并且只会打包变更文件, 并通过 websocket 通知浏览器刷新页面, 这样就解决上述**问题 1** 和 **问题 3**.

并且, `webpack-dev-server`使用[memfs](https://www.npmjs.com/package/memfs)将打包产物赋值给变量直接写入内存中, 提升了读取效率, 解决**问题 2**.

### customize webpack-dev-server

`webpack-dev-server`默认使用 express 本地启动一个服务, ~~如果你想的话, ~~也可以自定义一个服务. **当然在项目中不建议这么做, 因为默认的服务中还存在 HMR 等重要特性, 使用默认服务即可.** 这里举个自定义的简单例子.

安装必要包:

`yarn add -D express webpack-dev-middleware`

然后添加以下逻辑, 将**webpack**生成的**compiler**交由**webpackDevMiddleware**处理:

```js
// server,js
const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const config = require("./webpack.config");

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
```

最后执行`node server.js`, 访问 8080 端口即可看到页面.

事实上, `webpack-dev-server`内置了`webpack-dev-middleware`, 也是通过上述的方式将**compiler**交由中间件托管, 只不过实现上更复杂.

## HMR

全程**Hot Module Replacement**, `webpack-dev-server`同样内置了该特性旨在解决**问题 4**.

`webpack-dev-server`默认没有启动 HMR, 需要手动配置:

```js
module.exports = {
  // ...
  devServer: {
    hot: true,
  },
};
```

配置完需要在入口文件底部插入 HMR 逻辑, 通知`webpack-dev-server`哪些文件变更需要触发热更新, 不要用 optional chain

```js
if (module.hot) {
  module.hot.accept(["./math.js"], () => {
    console.log("hmr executed.");
  });
}
```

HMR 的实现原理还是很有意思的, 这里推荐阅读[HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007), 深刻描述了 HMR 在`webpack-dev-server`中的实现原理.~~比我叭叭叭讲强多了~~

## 在框架中使用 HMR

在实践过程中发现的问题, 这里强调一下.
jsx 文件或者是 vue 文件, 需要在文件内模块导出, 然后在入口文件导入模块并使用`import Cmp from 'cmp.xxx'`; 而不是直接在模块中执行完所有逻辑, 在入口文件简单`import 'cmp.xxx';`, 这样做**HMR**不会生效, 只会直接 location.reload().

### HMR in React

安装 HMR 需要的包:

`yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh`

React 热更新的这些插件只能在开发环境(development)使用, 生产环境(production)打包时需要会报错, 所以这里通过`process.env.NODE_ENV`判断环境动态添加插件:

```js
//...
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "./index.html",
    title: "Day7 p2",
  }),
];
isDevelopment && plugins.push(new ReactRefreshWebpackPlugin());

const babelPlugins = [];
isDevelopment && babelPlugins.push("react-refresh/babel");

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: babelPlugins,
            },
          },
        ],
      },
      //...
    ],
  },
};
```

### HMR in Vue

安装 HMR 依赖的包:

`yarn add -D vue-loader`

Vue 热更新依赖的插件没有环境的问题, 直接在配置中添加即可:

```diff
//...
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
+ const { VueLoaderPlugin } = require('vue-loader');

const isDevelopment = process.env.NODE_ENV !== 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './index.html',
    title: 'Day7 p2',
    filename: 'page/index.html',
  }),
+ new VueLoaderPlugin(),
];
isDevelopment && plugins.push(new ReactRefreshWebpackPlugin());

const babelPlugins = [];
isDevelopment && babelPlugins.push('react-refresh/babel');

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: babelPlugins,
            },
          },
+         {
+	        test: /\.vue$/i,
+	        use: 'vue-loader',
+	      },
        ],
      },
      //...
    ]
  }
};
```

具体 React/Vue 组件逻辑及入口文件引用逻辑查看示例代码.

## publicPath, path, contentBase in webpack5

webpack5 之前对这些配置的介绍可以参考: [[2021-06-25-path-publicPath-contentBase]]

### publicPath

publicPath 在 output 和 devServer 中配置的含义完全不同.

#### in output

在 output 中, publicPath 表示 html 中引入文件路径的前缀, 并以`${publicPath}${文件名}`的字符串写入 html 中, publicPath 默认值为`''`.

在开发环境中, 通过`webpack-dev-server`启动的服务使得能够在浏览器中通过 http 访问 html 文件.
此时可以配置绝对路径(事实上也更推荐配置绝对路径), 例如:

```js
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/page',
}
```

devServer 无相应配置, devServer 中的 publicPath 默认会使用 output 的 publicPath.

此时运行`webpack server`, 可以在浏览器看到拼接的文件路径, html 正常展示

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664697147057_929.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

使用相对路径, 真正打包到文件系统时才建议使用相对路径, 因为打包到文件系统后浏览器打开是`file://`协议, 如果使用的是绝对路径拼接后就变成`file:///bundle.js`, 找不到对应文件.
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664422677000_2677.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

实际上, 生产环境下更多的也也是使用 CDN 域名前缀, 而不是相对路径.

开发环境下要用相对路径也可以用, 只是会徒增心智负担.
output 中 publicPath 使用相对路径时, **devServer 中必须配置绝对路径**, 原因后续解释, 先看下不这样做的后果, 先将 devServer 注释掉:

```js
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: './',
},
devServer: {
    hot: true,
    devMiddleware: {
      // publicPath: '/'
    }
},
```

重新执行`webpack serve`, 浏览器显示:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664697803627_9616.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

将 devServer 的 publicPath 放开:

```diff
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: './',
},
devServer: {
    hot: true,
    devMiddleware: {
-      // publicPath: '/'
+      publicPath: '/'
    }
},
```

执行`webpack serve`, 此时浏览器显示正常:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664697915112_1455.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

#### in devServer

webpack5 中在 devServe 配置 publicPath 和 webpack4 的区别:

```diff
devServer: {
  hot: true,
- publicPath: '/',
+ // webpack5
+ devMiddleware: {
+   publicPath: '/'
+ }
}
```

前面说过, devServer 通过`memfs`在内存中创建了类似静态文件服务, 使内存中的文件能够正常通过 http 访问, 所以 devServer 中的 publicPath 相当于 http 请求获取静态文件所需的前缀, 这就解释了以下几个问题:

- devServer 的 publicPath 为什么最好和 output 的 publicPath 保持一致? 如果静态文件服务中文件路径为`/asset/bundle.js`, 而 html 中请求的文件路径为`/bundle.js`, 自然请求不到对应文件
- devServer 的 publicPath 为什么不能为相对路径? http 请求链接的前缀又怎么能是相对路径呢?
- 为什么 devServer 的 publicPath 开头结尾都需要带上`/`, 我理解是为了相对路径服务的(如果有错请忽略), 如果 devServer 的 publicPath 配置的是`/asset`, output 的 publicPath 配置`./`, 请求会变为`/bundle.js`, 只有配置为`/asset/`时, 请求才是`/asset/bundle.js`正常返回.

当然, 对于`HtmlWebpackPlugin`插件, `filename`选项也可以配置路径+文件, 配合 publicPath 的相对路径理解起来就更繁琐了.

#### 总结一下 publicPath

使用 publicPath 遵循以下几点:

1. devServer 的 publicPath 和 output 的 publicPath 推荐保持一致, 或者不配置 devServer 的 publicPath
2. 开发环境配置 publicPath 最好开头结尾都带上`/`, 并且浏览器访问时也要结尾也要带上
3. 开发环境下最好不要使用相对路径
4. 如果打包产物根据文件类型需要不提供文件夹区分, 可以直接配置对应的 filename
5. ~~配置 webpack.config.js 的时候你最好知道你在干什么~~

### ContentBase

照例介绍下 webpack5 对 ContentBase 的 breaking change:

```diff
devServer: {
-  contentBase: path.resolve(__dirname, '.yui'),
+  static: {
+    directory: path.resolve(__dirname, './yui'),
+  }
},
```

contentBase 比较好理解, 不是直接通过入口文件引入的文件, 或者是入口文件关联文件中又关联的文件, devServer 就会到 ContentBase 配置的文件目录下寻找. 举个例子:

在 html 文件中引入 js 文件,该文件和入口文件没有直接关系, 这里要使用绝对路径, 否则会通过 publicPath 查找:

```diff
<body>
  <div id="root"></div>
  <div id="app"></div>

+ <script src="/test.js"></script>
</body>
```

并且新建`yui/test.js`文件, 添加输出:

```js
console.log("这是个Test文件");
```

首先注释掉 contentBase, **contentBase 不能配置为""**, 运行`webpack serve`:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664701555781_1130.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

可以看到默认 contentBase 搜索的文件夹是 public, 浏览器显示:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664701719247_6132.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

然后将 contentBase 放开, 运行`webpack serve`:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664701782697_3793.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

可以看到显示正常了.

## devServer 其他的常用配置

### hotOnly

热更新时模块代码报错, 修复后默认会刷新页面; hotOnly 保证报错修复仍然是热更新.

**Breaking change** webpack4 -> webpack5:

```diff
-  hotOnly: true,
+  hot: 'only', // hot: true
```

### compress

请求的文件以 gzip 形式压缩后返回

### host

默认值为`localhost(127.0.0.1)`, 如果希望其他地方也可以访问, 可以设置为`0.0.0.0`

### open

可以配置指定浏览器打开指定页面.

```js
open: {
  target: ['/asset/page/'], // open multiple pages
  app: {
	name: 'google-chrome',
  }
},
// or
open: true,
```

### historyApiFallback

这个比较重要, 在 React/Vue 这类生成 SPA 页面的框架中非常常见, 主要作用是解决 SPA 页面在路由跳转之后, 进行页面刷新时, 返回 404 错误的问题.
**生产环境下通过 nginx 配置, historyApiFallback 相当于干了开发时 nginx 的活**

和 open 一样有两种方式配置, `boolean|object`.
boolean 值默认为`false`, `true`页面刷新 404 时跳转`/index.html`,
object 值可以配置 rewrites, 根据 404 匹配的路由跳转不同路径

举个例子, 具体源码查看[[#实例代码]].

先不配`historyApiFallback`, 查看 react 路由的跳转:

当前路径: `127.0.0.1/me`

展示内容:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664726548640_9042.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

刷新后 404, 因为并没有对应的路径或文件匹配`/me`

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664726704031_2224.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

配置`historyApiFallback`:

```js
historyApiFallback: {
  rewrites: [{ from: /about|me/, to: '/asset/page/' }],
},
```

重新运行`webpack serve`, 再次刷新当前路由, 刷新也能够正常显示:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664726866345_7520.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

### proxy

这里不做过多解释了, 具体配置可以查阅[官网](https://webpack.js.org/configuration/dev-server/#devserverproxy). 作用主要还是用于解决跨域问题, 不考虑服务端已经对 resHeader 做了跨域处理. 这里列出常用的配置, 使用可以参考[[#示例代码]]:

```js
devServer: {
  //...
  proxy: {
    "/api": {
      target: "http://localhost:8888",
      pathRewrite: {
        "^/api": "", // 正则替换, replace(/^api/, '');
      },
      secure: false, // 忽略https验证
      changeOrigin: true, //修改Origin为localhost:8888
    }
  }
}
```

未配置 proxy 前, 浏览器在`http://localhost:8080/asset/page/`发起跨域请求:

```js
axios.get("http://localhost:8888/name");
```

毫无意外浏览器会拦截:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664977295429_8174.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

配置 proxy 后, 修改请求为:

```js
axios.get("/api/name");
```

浏览器可以正常返回数据:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664977379895_4155.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

如果对 nginx 有所了解就会发现, devServer 的 proxy 和 historyApiFallback 其实就是充当了生产环境下的 nginx 配置.

## resolve

resolve 主要是对 import from 的路径做处理, 介绍下 resolve 对象中常用的几个属性.

### modules

默认值: `node_modules`
引入模块的路径分为绝对路径, 相对路径, 模块路径; 绝对路径和相对路径容易理解, 就是根据文件系统或上下文目录查找; 模块路径则是只指定了包名, webpack 会通过`resolve.modules`指定的目录去查找文件, webpack 是通过**enhanced-resolve**库来进行模块路径查找.

### extensions

默认值: `['.js', '.json', '.wasm']`
当 webpack 发现当前路径是文件并且没有后缀名时, 会使用`resolve.extensions`匹配, 所以对于 React/Vue 这类文件后缀为.jsx/.vue 的路径, 如果不带上后缀默认是会解析失败的, 需要配置:

```js
resolve: {
  extensions: [".js", ".json", ".wasm", ".jsx", ".vue"];
}
```

### mainFiles

默认值: `index`
当 webpack 发现当前路径是文件夹时, 会将**resolve.mainFiles**补充在路径后面, 然后通过**resolve.extensions**匹配文件.

### alias

type: `object`
当路径使用频率高并且长时, 可以配置`resolve.alias`简化输入, Vue 脚手架就将`@`作为`path.resolve(__dirname, './src')`的别名.

# 实例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day7](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day7)

# reference

1. [Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)
2. [How should we set up apps for HMR now that Fast Refresh replaces react-hot-loader?](https://github.com/facebook/react/issues/16604)
3. [React 热更新依赖](https://github.com/pmmmwh/react-refresh-webpack-plugin)
4. [Webpack5 中 devServer 配置 contentBase 报错的问题](https://blog.csdn.net/qq_43048301/article/details/121554459)
