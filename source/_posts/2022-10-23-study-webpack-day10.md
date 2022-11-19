---
layout: post
title: webpack学习笔记(10)
date: 2022-10-23 19:53:56
update: 2022-11-19 23:53:13
author: Mariana
mermaid: true
banner_img: /imgs/banner/md/2022-10-23-study-webpack-day10.jpeg
index_img: /imgs/banner/md/2022-10-23-study-webpack-day10.jpeg
tags:
  - webpack
categories:
  - webpack
---

# 学习笔记

## Tree shaking

tree shaking 在计算机中表示消除死代码(dead code).
JavaScript 的 Tree shaking 源自于 rollup, 依赖 ES Module 的静态语法分析.
webpack4 正式扩展了这个能力, 分为`usedExports`和`sideEffects`两种:

### usedExports

`optimization.usedExports`, **production**模式下默认为 true. 该配置会配合**TerserPlugin**使用, 方便演示, 以下默认`mode`为**development**.

示例入口文件:

```js
import { sum } from "./math";
console.log(sum);
```

模块文件:

```js
export function sum(num1, num2) {
  return num1 + num2;
}

export function mul(num1, num2) {
  return num1 * num2;
}
```

先开启`optimization.usedExports`, 关闭**TerserPlugin**插件, 查看打包产物:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665914627139_3858.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

可以看到对于没有引用的函数, `usedExports`会在上方标明注释, 提供给**TerserPlugin**进行加工删除.

现在开启**TerserPlugin**插件, 查看打包产物:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665914691599_6111.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

会发现打包产物中**mul**函数没有被打包进去.

此时如果再将作用域提升**webpack.optimize.ModuleConcatenationPlugin**插件打开, 打包产物就会只显示 sum 函数, 连引入标识, IIFE 等信息一并删除, 就想上一篇末尾提到的那样.

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665914791948_4934.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

### sideEffects

`sideEffects`主要用于第三方库文件, 在 npm 包的**package.json**中配置**sideEffects**, 用于告知 webpack compiler 哪些模块是有副作用的.

什么是**副作用**? 即模块内可能存在影响到全局环境的逻辑; 比如说某个模块并不是只含有纯函数, 而是存在

```js
window.app = true;
```

这样的逻辑, 这就表示该模块是有副作用的, 随意删除模块代码可能会影响运行.
所以`sideEffects`默认为 true. 也就是默认情况下, 直接使用

```js
import "./math";
```

webpack 是不会将 math 模块的代码删除的.
可以配置数组, 指定模块中那些文件是含有副作用的; 当然推荐编写不含有副作用的模块, 但是对于 css 文件而言, 一定是有副作用的, 所以如果项目中引入了模块中的 css 文件, 有以下两种解决方式:

1. `sideEffects`中添加 css 文件, 如`"sideEffects": ["**/*.css"]`
2. 在`module.rules`对处理 css 文件时配置`sideEffects`

```js
{
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
  sideEffects: true,
}
```

下面也举个简单例子, 本地创建个 npm 包, 包含两个文件:

**index.js**:

```js
window.app = "abc";
```

**style.css**:

```css
body {
  color: red;
}
```

通过`yarn link`在 demo 中引入, demo 入口文件添加以下代码:

```js
import "webpack-npm/lib/style.css";
import "webpack-npm/lib/index.js";

const element = document.createElement("div");
element.innerHTML = window.app;
document.body.append(element);
```

现将 npm 包中`sideEffects`置为 false, 打包页面浏览器打开:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1666540416154_2096.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

可以看到**color**样式没有生效, **window.app**也没有赋值.

然后将`sideEffects`配置为**["\*\*/\*.css"]**或者配置`rules.sideEffects` 都可以; 打包页面打开浏览器:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1666540559057_9057.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

说明 css 文件参与打包, js 文件被删除了.
最后将`sideEffects`置为 true, 可以看到有副作用的文件都参与打包.

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1666540638739_5879.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

**总结一下**
如何在生产环境对 JavaScript 代码进行 tree shaking 呢?

1. 设置`optimization.usedExports`为 true, 帮助**TerserPlugin**进行优化
2. **package.json**中配置`sideEffects`, 直接对模块进行优化.

### Tree-shaking in Css

早期 webpack 使用**purifyCss**插件对 css 文件进行 tree shaking, 但是该库已不再维护, 最新的提交也是 4 年前, 目前使用**purgeCss**来完成 css 的 tree shaking.

安装: `yarn add -D purgecss-webpack-plugin`

如果想要正常使用**purgeCss**还需要安装**mini-css-extract-plugin**生成单独 css 文件插件, 如果之前没安装过也需要安装.

使用示例, **purgeCss**版本更新后需要解构引入:

```js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // mode: 'production',
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync("./**/*", { nodir: true }),
    }),
  ],
};
```

**purgeCss**会识别 html 和 js 中用到的 class 或 className 等, 经测试:

1. 即使 js 中注释 className 逻辑, 打包产物仍然会存在对应类名
2. 不会去除对 body, html 标签设置的 css
3. 有可能会额外删除 代码中实际会用到的 css, 导致样式错乱(在博主 Vue 项目中有出现过)

抛开上述问题, **purgeCss**打包效果是非常优秀的. 第三点可以通过配置**safeList**解决

```js
function collectSafelist() {
  return {
    standard: ["safelisted", /^safelisted-/],
    deep: [/^safelisted-deep-/],
    greedy: [/^safelisted-greedy/],
  };
}

// In the webpack configuration
new PurgeCSSPlugin({
  safelist: collectSafelist,
});
```

### Compress

这个属于了解知识. 一般性能优化也不会到这种地步(笑)

#### Http 压缩

如今绝大部分浏览器都已经支持 Http 压缩, 支持的浏览器在向服务器发送请求时, 会告知服务器自己支持哪些压缩格式, 例如`Accept: Encoding: gzip, deflate`, 服务器中如果存在浏览器支持压缩格式的压缩文件就会, 就会直接返回对应的压缩后文件, 并在响应头重告知浏览器, 例如`Content-Encoding: gzip`, 浏览器会完成解压操作, 无需我们关注.

webpack 中依赖`compression-webpack-plugin`插件来指定打包产物生成对应的压缩文件.

webpack 配置:

```js
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  //...
  plugins: [
    //...
    new CompressionPlugin({
      test: /\.(css|js)$/i, // 指定需要压缩的文件类型
      threshold: 0, // 需要压缩的文件大小阈值
      algorithm: "gzip", // 压缩算法, 和Conten-Encoding对应
    }),
  ],
};
```

需要注意的是, threshold 即使设置的很小或 0, **CompressionPlugin**也不是会对所有匹配到的文件都进行压缩的, 插件内部设置了最小的阈值.
所以这里实例代码中引入了**lodash**包, 可以看到打包产物存在 js 和压缩后的 gz 文件

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1668618792046_8806.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

#### Html 压缩

**html-webpack-plugin**除了设置 html 模板同时默认也压缩了 html 代码, `minify: 'auto'`表示默认配置, 也可以自己配置.

```js
new HtmlWebpackPlugin({
  template: "./index.html",
  inject: "head", // 默认为head, 可设置boolean, head, body, true和head含义相同
  cache: true,
  minify: isProduction
    ? {
        removeComments: false, // 移除注释
        resolveRedundantAttributes: false, // 移除多余属性
        removeEmptyAttributes: true, // 移除空属性
        collapseWhitespace: false, // 移除换行和空格
        minifyCss: true, // 压缩内联样式表css
        minifyJS: {
          // 压缩内联js
          mangle: true,
        },
      }
    : "auto",
});
```

### InlineChunkHtmlPlugin

这是**react-dev-utils**提供的一个插件用于关联**HtmlWebpackPlugin**, 将匹配到的文件插入 html 文件内联 js 形式执行, 减少打包产物的文件数量.达到**文件体积**和**Http 请求数**的平衡.

安装: `yarn add -D react-dev-utils`

配置, 这里以动态导入生成的 runtime 文件举例子, 将 runtime 逻辑 inline 到 html 中:

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    publicPath: "./",
    path: path.resolve(__dirname, "./build"),
    filename: "[name].[hash:6].bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.*\.js/]),
  ],
  optimization: {
    runtimeChunk: true,
  },
};
```

可以看到 runtime 文件的代码被 inline 到 html 中了, 截取了部分代码, 完整例子可以查看示例代码 p4.

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1668701277710_2858.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

这里可能会有一个问题:

1. **InlineChunkHtmlPlugin**不会删除 inline 后的文件, 需要手动删除

### npm package using webpack

webpack 同样可以用于打包代码作为第三方库文件, 只需要对添加少量配置. ~~虽然一般都是使用 rollup 打包~~

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
    library: "math",
    globalObject: "this",
  },
};
```

可以看到只是对**output**增加了三个属性:

- **libraryTarget**: 打包产物遵守哪种模块导入规则, 一般都是`umd`, 即**universal module defination**支持`esm | amd | cmd | commonjs`所有规则导入.
- **library**: 挂载在全局对象的对象名, 这里举例 math, 浏览器中就可通过`window.math`访问.
- `globalObject`: 一般都用`this`, this 默认根据不同环境表示不同的全局变量 window 或 global, 也可以设置成 document.

这里简单将两个函数打包为 npm 包:

```js
export function add(num1, num2) {
  return num1 + num2;
}

export function minus(num1, num2) {
  return num1 - num2;
}
```

打包为 umd 文件后, 各种环境下不同规则引用的允许情况:

浏览器:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1668872875364_7197.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

commonjs:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1668872961970_6136.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

esm:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1668873018807_3447.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

可以看到都能够正常执行.

最后看下 umd 形式打包产物是如何适配不同模块导入规则的; 文件开头就能看到会通过判断不同模块规则中特有的标量如`module`, `define`等来判断是哪种导入规则, 从而将入口文件挂载到对应的对象上.

```js
(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.math = t())
    : (e.math = t());
});
```

# 示例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day10](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day10)

# reference

1. [purgecss in webpack](https://purgecss.com/plugins/webpack.html)
