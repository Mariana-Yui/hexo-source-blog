---
layout: post
title: webpack学习笔记(5)
date: 2022-09-15 01:46:28
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1663176015964_7082.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1663176015964_7082.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - webpack
---

# 学习笔记

## mode in webpack config

使用:

```js
module.exports = {
  mode: "development",
};
```

简单看下 webpack 官网对`mode`的描述:

| option        | description                                                                                                                                                                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `development` | Sets `process.env.NODE_ENV` on `DefinePlugin` to value `development`.<br> Enables useful names for modules and chunks.                                                                                                                                                        |
| `production`  | Sets `process.env.NODE_ENV` on `DefinePlugin` to value `production`.<br> Enables deterministic mangled names for modules and chunks,<br> `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`,<br> `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin` and `TerserPlugin`. |
| `none`        | Opts out of any default optimization options                                                                                                                                                                                                                                  |

可以看到`mode`可以设置为`development`, `production`, `none`, 并且`development`和`production` 存在 webpack 预设的一些默认配置. 后面例子为特殊说明`mode`都为`development`

## webpack 模块化原理

之前提到浏览器目前只能解析 ESM 模块(某些浏览器甚至无法解析模块), 需要添加`<script type="module">`, 但是通过 webpack 打包的代码, 允许 使用各种各样的模块化, AMD, CMD, CommonJS, ESModule 等, 它是如何帮助我们实现代码中支持模块化的呢? 这里以最常用的 CommonJS 和 ESModule 举例, 依次介绍 webpack 中:

- CommonJS 模块化实现原理
- ES Module 模块化实现原理
- CommonJS 加载 ES Module 原理
- ES Module 加载 CommonJS 原理

每种情况都会以简单案例讲解, 开始之前`webpack.config.js`需要配置`devtool: "source-map"`, 因为`development`模式下打包默认使用`eval`, 不方便阅读打包产物代码.

### IIFE 立即执行函数

产物中会出现大量立即执行函数, 存在多种写法, 可以先阅读[JavaScript 中的立即执行函数](https://segmentfault.com/a/1190000003902899)

### CommonJS 模块化实现原理

入口文件`index.js`:

```js
const { dateFormat, prizeFormat } = require("./util/format");

console.log(dateFormat(new Date()));
console.log(prizeFormat(100));
```

引入模块文件:

```js
function dateFormat(date) {
  return "2022-09-14";
}

function prizeFormat(prize) {
  return "100.00";
}

module.exports = {
  dateFormat,
  prizeFormat,
};
```

打包后的文件`bundle.js`:

```js
// 立即执行函数建立作用域, 避免变量污染
(() => {
  // 定义当前作用域下全局对象, 包含所有require引用的模块
  var __webpack_modules__ = {
    // key为模块路径, 值为包含模块内容的函数
    "./util/format.js": (module) => {
      function dateFormat(date) {
        return "2022-09-14";
      }

      function prizeFormat(prize) {
        return "100.00";
      }

      module.exports = {
        dateFormat,
        prizeFormat,
      };
    },
  };
  // 创建对象用于缓存
  var __webpack_module_cache__ = {};
  // commonjs中require函数的polyfill实现
  function __webpack_require__(moduleId) {
    // 根据模块路径获取缓存中的模块内容
    var cachedModule = __webpack_module_cache__[moduleId];
    // 如果存在直接返回
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // 缓存中不存在, 将module变量和在缓存中都初始化一个对象, 属性为exports
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    // 将模块内容赋值给module, 从而得到module.exports, 后续能够从缓存中获取
    // 实例中还没用到模块中引用其他模块的情况, 暂不讲解后两个参数
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    // 返回模块内容
    return module.exports;
  }

  var __webpack_exports__ = {};

  // 立即执行函数输出结果
  (() => {
    // 下面引用模块逻辑和打包前源码相同, 不做解释
    const { dateFormat, prizeFormat } = __webpack_require__("./util/format.js");

    console.log(dateFormat(new Date()));
    console.log(prizeFormat(100));
  })();
})();
```

打包后的所有逻辑都有对应的注释, 可以看到 webpack 通过`__webpack_modules__`对象存储模块路径和内容, `__webpack_module_cache__`对象缓存所有`module.exports`, `__webpack_require__`函数简单实现了 CommonJS 中`require`

### ESM 模块化实现原理

2 点了..好困, to be continued...

# reference

[JavaScript 中的立即执行函数](https://segmentfault.com/a/1190000003902899)
