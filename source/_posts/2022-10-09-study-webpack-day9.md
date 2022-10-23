---
layout: post
title: webpack学习笔记(9)
date: 2022-10-09 20:52:33
update: 2022-10-23 20:07:18
author: Mariana
mermaid: true
banner_img: /imgs/banner/md/2022-10-09-study-webpack-day-9.jpeg
index_img: /imgs/banner/md/2022-10-09-study-webpack-day-9.jpeg
tags:
  - webpack
categories:
  - webpack
---

# 学习笔记

## prefetch & preload

预获取(prefetch)的含义是在当前路由下加载将来其他路由可能需要的资源, 在**vue-router**中就经常见到, 正常情况下我们并不需要加载所有的路由资源, 只需要加载当前路由需要的资源; 配置**prefetch**可以在加载完当前路由所需资源后, 由浏览器决定何时加载设置 prefetch 的资源, 从而实现路由懒加载.

webpack 中对动态 import 的资源添加 prefetch:

```js
import(
  /* webpackPrefetch: true */ /* webpackChunkName: 'foo' */ "./foo.js"
).then((v) => {
  console.log(v);
});
```

资源加载顺序:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665386744854_4322.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

通过通过浏览器 network 可以看到在加载完当前所需资源后才会去加载**foo.js**.

预加载(preload)会在当前路由下加载**当前路由**可能需要的资源, 这点可能不好理解, 可以参考[这篇文章](http://www.alloyteam.com/2016/05/preload-what-is-it-good-for-part1/)中举出的案例, 主要用于性能优化, 将当前路由要加载的资源设置**preload**提前加载.

webpack 也是通过 magic comment 的方式配置 preload:

```js
import(
  /* webpackPreload: true */ /* webpackChunkName: 'foo' */ "./foo.js"
).then((v) => {
  console.log(v);
});
```

preload 和 prefetch 长得很像, 含义却完全不一样, webpack 对两者做出以下总结:

- preload chunk 会在父 chunk 架子啊时, 以并行方式开始加载; prefetch chunk 会在父 chunk 加载结束后开始加载.
- preload chunk 具有中等优先级, 并立即下载; prefetch chunk 在浏览器闲置时下载.
- preload chunk 用于当下时刻; prefetch chunk 用于未来某个时刻.
- 浏览器支持程度不同.

## runtimeChunk

type: `boolean | string | object`
默认情况下 webpack 会将 runtime 相关的代码打包到主模块中, 可以通过配置`optimization.runtimeChunk`将 runtime 相关代码抽离到单独的 chunk 中.

什么是 runtime 代码?
runtime 相关的代码值的是在运行环境中对模块进行解析, 加载模块信息相关的代码; 不如`import()`函数异步加载模块代码就是通过 runtime 代码完成的.

webpack 配置:

```js
module.exports = {
  optimization: {
    runtimeChunk: true,
  },
};
```

webpack 中配置 runtimeChunk 为`true`和`'multiple'`是一样的, 都会根据入口文件生成对应个数的 runtime 文件.

```js
build
├── foo.07cb3e.bundle.js
├── index.07cb3e.bundle.js
├── index.html
├── main.07cb3e.bundle.js
├── runtime~index.07cb3e.bundle.js
└── runtime~main.07cb3e.bundle.js
```

可以看到生成两个 runtime 文件.
如果只想生成一个文件, 配置 runtimeChunk 为`'single'`即可.
runtimeChunk 的值还能够配置为对象, 具体参考官网.

## externals

真实开发中, 会引用非常多的第三方库, 在打包时这些库代码也会打包成产物, 最后将打包产物上传到服务器中; 为了优化性能, 我们可以通过在 webpack 中配置`externals`指定某些 npm 包不参与打包, 而是通过 cdn 链接的方式引入, 从而加快打包效率以及访问页面速率.

随便引入两个第三方库:

```js
import _ from "lodash";
import moment from "moment";

console.log("lodash:", _.join(["hello", "world"], " "));
console.log("moment:", moment().format());
```

先看下没有配置没有配置 externals, 配置`optimization.splitChunks`的默认情况下打包结果:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665390968154_8441.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

可以看到库源码打包成 bundle, 总用时**webpack 5.74.0 compiled with 3 warnings in 4301 ms**

配置 externals:

```js
module.exports = {
  externals: {
    lodash: "_",
    moment: "moment",
  },
};
```

需要注意的是这里的 key 为包名不难理解, **值需要是 CDN 链接中暴露给 window 的变量名**, 这意味着项目项目代码中不能随意定义 import 的变量名.

入口文件, 这里解构引入也是可以的, 打包之后的代码实际上和是否解构引入关系不大:

```js
import _ from "lodash";
import moment from "moment";

console.log("lodash:", _.join(["hello", "world"], " "));
console.log("moment:", moment().format());
```

配置 externals 的打包结果:

```js
build
├── index.html
└── main.af547e.bundle.js
```

可以看到库源码没有再进行打包了, 总用时**webpack 5.74.0 compiled successfully in 334 ms**.

由于库代码没有被打包, 此时页面肯定是不能正常运行的, 需要在 html 文件中插入对应的 cdn 链接, 可以在[jsdelivr](https://www.jsdelivr.com/)sh 上搜索, 关于暴露给 window 的变量, 通过对应官网查询或查询未压缩的源码.

配置 cdn 链接:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Webpack App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <script defer="defer" src="main.af547e.bundle.js"></script>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>
  </body>
</html>
```

页面可以正常访问:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665401524177_2227.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

## shimming

垫片, 比如现在依赖一个库, 可以不通过 import 或 require 引入, 直接通过`ProvidePlugin`配置 shimming 来直接使用, 具体参考[官网](https://www.webpackjs.com/plugins/provide-plugin/)
当然 webpack 并不推荐随意使用 shimming, webpack 理念是使前端更加模块化, 也就是编写具有封闭性的, 不存在隐含依赖(比如全局变量的)的彼此隔离的模块.

webpack 内置**ProvidePlugin**插件, 无需额外安装. 使用**ProvidePlugin**就不需要到处`import`相同模块.

配置, 还可以直接单独配置函数:

```js
module.exports = {
  //...
  plugins: [
    //...
    new ProvidePlugin({
      _: "lodash",
      moment: "moment",
      _map: ["lodash", "map"],
    }),
  ],
};
```

入口文件, 没有`import`:

```js
console.log("lodash:", _.join(["hello", "world"], " "));
console.log("moment:", moment().format());
_map([1, 2, 3], (v) => {
  console.log(v);
});
```

打包产物会包含**ProvidePlugin**中配置的库文件, 查看控制台打印正常:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665420147423_5358.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

## MiniCssExtractPlugin

将 css 单独打包文件.
之前我们解析 css 文件最后都是使用 **style-loader** 通过`<style>`标签插入 header, 生产环境下更趋向于单独打包 css 资源; 需要依赖**MiniCssExtractPlugin**插件

安装:

`yarn add -D mini-css-extract-plugin`

在 webpack 中配置:

```js
module.exports = (env) => {
  return {
    //...
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      //...
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:6].css",
      }),
    ],
  };
};
```

更多的我们希望在开发环境使用**style-loader**, 生产环境使用**MiniCssExtractPlugin.loader**, 可以通过 env 区分:

```diff
module.exports = (env) => {
+ const isDevelopment = !env.production;
  return {
    //...
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
-           MiniCssExtractPlugin.loader,
+           isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        }
      ]
    },
    plugins: [
	  //...
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:6].css'
      }),
    ],
  };
};
```

## hash

设置 filename 时, webpack 提供了**hash**, **chunkhash**, **contenthash**三种哈希值, 具体含义参考[webpack 中，hash、chunkhash、contenthash 的区别是什么？](https://www.cnblogs.com/skychx/p/webpack-hash-chunkhash-contenthash.html) 这篇文章已经写的很详细了, 总结来说: 入口文件名用**chunkhash**, 模块文件名用**contenthash**.

## DLL

Dynamic Link Library, 动态链接库, 这是 wiki 上的含义. 在 webpack 中指将不常用的代码打包成库文件, 可共享用于别的项目代码中. **webpack4 之后 React/Vue 都不再使用 DLL, 因为 webpack 的性能足够优秀, 不需要再使用 DLL 文件**, 这里做了解即可. 如果实际开发中真的要用到也建议使用`autodll-webpack-plugin`.

实际上 webpack4 中存在`hard-source-webpack-plugin`库做缓存, 第一次运行构建时间慢, 后续构建就很快了.
webpack5 内置了**cache**配置做缓存优化构建时间, 同样也是第一次构建时间较慢, 后续快.

配置:

```js
module.exports = {
  //...
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
};
```

## Terser

webpack4 使用`uglify-js`(**uglifyjs-webpack-plugin**)来压缩, 丑化代码, 目前该库已不再维护.
webpack5 使用`terser`(**terser-webpack-plugin**)来对代码进行压缩丑化; `terser`本就是由`uglify-js`fork 而来, 所以保留了`uglify-js`大部分的 API 用法.

`terser`可以在终端单独使用, 首先安装:

`yarn add -D terser`

执行

`npx terser input.js -o output.js -c -m`

默认`terser`的输出文件只会将多余空格即换行去除, 如果需要进行压缩, 丑化, 保留函数名, 保留类名, 去除僵尸代码等, 可以参考[官网](https://github.com/terser/terser)对应配置

接下来看下 webpack 中是如何使用`terser`的:
webpack 内置了**terser-webpack-plugin**插件进行上述操作.
事实上, 在真实开发中个, 在 production 下, 默认会开启 terser 插件处理代码;
如果对默认的配置不满意, 可以在`optimization.minimizer`中配置, 这里列出 webpack 官网的配置示例, 其中**deprecate**的挪到 compress 对象中配置:

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
  },
};
```

具体字段含义和`terser`参数一致, 参考[官网](https://github.com/terser/terser).
这里只介绍一个对博主实际工作中很有用的配置**dead_code**, 该配置含义是 remove unreachable code, 即删除永远不会执行的逻辑, 默认值为`true`, 不用手动设置.
举个实际案例, 如果有段逻辑, 需要在正式环境执行, 不想在开发环境执行, 并且不想生成 dead_code, 可以怎么做呢?

在入口文件中引入该逻辑:

```js
if (process.env.NODE_ENV === "production") {
  console.log("can reach here!");
}
```

webpack 中配置**DefinePlugin**和**TerserPlugin**:

```js
module.exports = {
  mode: "production",
  //...
  plugins: [
    //...
    new DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        //...
      }),
    ],
  },
};
```

打包结果可以看到对应代码有参与打包:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665717927158_90.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

把环境改为开发环境:

```diff
module.exports = {
-  mode: 'production',
+  mode: 'development',
  //...
  plugins: [
    //...
    new DefinePlugin({
-      'process.env.NODE_ENV': '"production"',
+      'process.env.NODE_ENV': '"development"',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        //...
      })
    ]
  }
}
```

可以看到没有对应代码.

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665718100334_3984.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

## Css Compress

除了 js 压缩外, 另外一种最常见的代码压缩是 css; css 压缩通常是去除无用的空格, 无法做丑化, 因为很难修改选择器, 属性名称等.
css 压缩使用`css-minimizer-webpack-plugin`插件, 和`mini-css-extract-plguin`单独生成 css 文件一起使用.

## Scope Hoisting

作用域提升. 最普遍的例子就是导入的模块生成打包产物会生成大量 IIFE 函数如[[2022-09-15-study-webpack-day5#CommonJS 模块化实现原理]]中的`__webpack_exports__`, 作用域提升用于删除无用的 IIFE 函数包裹, 进一步减少代码量, 提升运行速度. 生产环境下默认开启, 开发环境开启需要手动配置.

webpack 配置:

```js
plugins: [webpack.optimization.ModuleConcatenationPlugin()];
```

该插件内部依赖 ESM 静态分析, 所以导入模块时最好都使用 ESM import.

开启前:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1666526652002_3241.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

开启后:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1666526769317_1254.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

可以看到开启作用域前后的产物大小提升还是非常大的

# 示例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day9](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day9)

# reference

1. [webpack 中，hash、chunkhash、contenthash 的区别是什么？](https://www.cnblogs.com/skychx/p/webpack-hash-chunkhash-contenthash.html)
2. [辛辛苦苦学会的 webpack dll 配置，可能已经过时了](https://juejin.cn/post/6844903952140468232)
3. [webpack5 中的 cache 配置替代 hard-source-webpack-plugin](https://webpack.js.org/configuration/cache/#cache)
4. [terser 参数配置](https://github.com/terser/terser)
