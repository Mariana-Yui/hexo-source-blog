---
layout: post
title: webpack学习笔记(10)
date: 2022-10-23 19:53:56
update: 2022-10-24 00:00:36
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

# 示例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day10](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day10)

# reference
