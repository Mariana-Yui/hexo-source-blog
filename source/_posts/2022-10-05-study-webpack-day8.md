---
layout: post
title: webpack学习笔记(8)
date: 2022-10-05 21:52:00
update: 2022-10-07 21:21:08
author: Mariana
mermaid: true
banner_img: /imgs/banner/md/2022-10-05-study-webpack-day8.png
index_img: /imgs/banner/md/2022-10-05-study-webpack-day8.png
tags:
  - webpack
---

# 学习笔记

## 配置区分环境

针对开发环境和生产环境, 可以抽离不同环境特定的配置和公共配置, 针对传入的环境参数生成不同的配置.

首先在**config**目录下新建通用配置文件, 生产环境配置文件, 开发环境配置文件. 现将原先**webpack.config.js**的内容复制到**webpack.common.js**

```js
config
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

webpack 通过`--config`指定配置文件, 通过`--env`指定环境变量.

之前的`webpack.config.js` 是导出一个对象:

```js
module.exports = {
  //...
};
```

设置环境变量后导出值需要变为函数:

```js
module.exports = function (env) {
  //...
};
```

然后运行`webpack --config ./config/webpack.common.js --env production`, 可以看到终端打印`env`输出:

```js
{ WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, production: true }
```

然后将参数赋值给`process.env.NODE_ENV`, 通过这种方式区分当前环境, 这样**babel.config.js**, **postcss.config.js**等文件也能过读取环境变量.

需要注意的一点是, `process.env`设置的属性都会转换为字符串, `true`-> `'true'`, `undefined` -> `'undefined'`, 不能简单通过`!`关键字判断, 这是容易弄错的地方.

然后就是抽离通用配置, 开发环境使用的配置, 生产环境使用的配置, 这里以之前[[2022-09-30-study-webpack-day7#示例代码]]举例:

## Code splitting

代码拆分(code splitting)是 webpack 一个非常重要的特性.
主要目的是将代码分离到不同的 bundle 中, 之后我们可以按需加载, 或者并行加载这些文件; 比如默认情况下, 所有的 JavaScript 代码(业务代码, 第三方以来, 暂时没有用到的模块) 在首页全部加载就会影响首页加载速度;代码分离可以分出更小的 bundle, 以及控制资源加载优先级, 提供代码的加载性能

先看下没有做任何处理的打包结果, 随便引入几个第三方库:

```js
import moment from "moment";
import _ from "lodash";

console.log("hello world");
console.log("moment:", moment());
console.log(_.join(["mariana", "yui"]));
```

引入第三方库打包默认会生成 LICENSE.txt 文件, 可以先忽略.
可以看到打包结果, 第三方库源码也被打包进了入口文件中.

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665042596061_6532.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

此时我们就需要代码分离来进行优化,
Webpack 常见的代码分离有三种:

- 入口起点: 使用 entry 配置手动分离代码
- 防止重复: 使用 Entry Dependencies 或者 SplitChunksPlugin 去重和分离代码
- 动态导入: 通过模块内联函数调用来分离代码

### 入口起点

当单入口文件中存在没有耦合关系的代码时, 可以通过配置多个入口文件来减小单个文件的体积.

```js
// index.js
console.log("hello index");
console.log("hello main");
```

拆分为:

```js
// index.js
console.log("hello index");
// main.js
console.log("hello main");
```

配置 entry:

```js
module.exports = {
  entry: {
    index: "./index.js",
    main: "./main.js",
  },
};
```

当然一般情况下 React/Vue 框架的 SPA 页面都是单入口文件, 在多页面打包时才会使用这种方案.

### 防止重复

存在 Enty Dependencies 和 SplitChunksPlugin 两种方案来进行代码分离, 其中绝大部分情况都是使用 SplitChunksPlugin, Entry Dependencies 官方**并不推荐**.

#### Entry Dependuncies

对于引入的第三方库, entry 也可以将其作为入口文件, 值可以是 string 或 Array. 引用第三方库的入口文件配置和之前有所变化.

```diff
module.exports = {
  entry: {
-   index: './index.js',
+   'index': { import: './index.js', dependOn: 'shared' },
    main: './main.js',
+   shared: ['lodash', 'moment'],
  },
};
```

打包结果可以看到第三方库代码被单独打包了.

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665044132744_330.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

#### SplitChunksPlugin

webpack 官方推荐通过这个插件配置, 通过**optimization.splitChunks**配置, 官方的配置样例:

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```

下面介绍其中常用的配置字段, 其余的使用默认配置即可.

- `chunks`: `async | initial | all`, 默认为**async**, 只针对异步(**import()** 或 **require.ensure** )导入的模块进行代码分离; **initial**只针对同步导入模块代码分离; **all**对同步和异步导入的模块都会进行代码分离, 一般都设置为**all**.
- `minSize`: 文件大小(包括引入的包)达到**minSize**才会拆分
- `maxSize`: 将大于**maxSize**的文件拆分为不小于**minSize**大小的文件, 一般用于二次拆分保证每个包文件不会过大, 一般情况下**minSize**和**maxSize**使用默认值即可, 即使手动设置也最好保持两者一直. BTW, **minSize**优先级大于**maxSize**, 即使配置**maxSize**小于**minSize**, 当然这样配置是绝对错误的.
- `minChunks`: 默认为**1**, 模块被**minChunks**个入口文件引用时才会拆分, 一般都是单入口文件, 用默认值即可
- `cacheGroups`: 针对不同的文件夹下的包文件进行更细致的打包配置, **chunks**, **minChunks**也可在**cacheGroup**中使用
  - `test`: 正则匹配文件夹
  - `filename`: 打包的文件名, 配置和`output.filename`一致
  - `priority`: 优先级, 当多个 cacheGroup 匹配上时, 使用优先级最高的
  - `reuseExistingChunk`: 如果当前包文件已经被打包, 直接使用打包文件
- `chunkIds`: `natural | named | deterministic`, 默认为**deterministic**, webpack 生成的唯一 id 作为 filename 或 chunkFilename 的`[name]`, 如果文件内容不变, 生成的 id 也不会改变; `natural` 使用正整数作为`[name]`, 不利于浏览器缓存, 不推荐; `named`, 使用文件的路径+文件名作为`[name]`, 开发环境下推荐使用, 见名知意.
  可以看到使用不同**chunkIds**值打包后的输出:

```js
// natural
build
├── 2.vendor.js
├── 3.098650.vendor.js
├── 4.098650.vendor.js
├── index.bundle.js
├── index.html
└── main.bundle.js
// named
build
├── bar1_js.b89f72.vendor.js
├── bar2_js.b89f72.vendor.js
├── index.bundle.js
├── index.html
├── main.bundle.js
└── vendor-node_modules_lodash_lodash_js-node_modules_moment_locale_af_js-node_modules_moment_loc-65a2e8.vendor.js
// deterministic
build
├── 351.18c68f.vendor.js
├── 482.vendor.js
├── 611.18c68f.vendor.js
├── index.bundle.js
├── index.html
└── main.bundle.js
```

其中, 异步导入的文件打包是特殊的. 无论`chunks`配置什么, 异步导入的包都会进行打包, 并且`cacheGroups`无法进行配置, 需要在`output.chunkFilename`配置.
webpack 官网对`output.chunkFilename`的定义即:

> This option determines the name of non-initial chunk files.

~~怎么样, 你 kun 哥弔不弔, 你干嘛哎哟~~~
上述输出是对**chunkFilename**配置`[name].[hash:6].vendor.js`的结果.

##### Magic Comment

除了**chunkIds**配置`[name]`外, webpack 提供了魔法注释(Magic Comment)设置额异步导入文件打包后的`[name]`, 并且魔法注释的优先级是**最高的**.

修改入口文件内容, 添加魔法注释:

```js
import(/* webpackChunkName: "foo1" */ "./bar1").then((v) => {
  console.log(v);
});

import(/* webpackChunkName: "foo2" */ "./bar2").then((v) => {
  console.log(v);
});
```

查看打包结果:

```js
build
├── 482.vendor.js
├── foo1.b1a757.vendor.js
├── foo2.b1a757.vendor.js
├── index.bundle.js
├── index.html
└── main.bundle.js
```

最后想说, 关于 code splitting, 大部分情况下使用官方默认配置即可, 即使是 React/Vue 框架椰汁对小部分进行了修改:
**Vue**:

```js
optimization: {
  splitChunks: {
    vendors: {
      name: 'chunk-vendors',
      test: /[\\/]node_modules[\\/]/,
      priority: -10,
      chunks: 'initial',
    },
    common: {
      name: 'chunk-common',
      minChunks: 2,
      priority: -20,
      chunks: 'initial',
      reuseExistingChunk: true,
    }
  }
}
```

**React**更随便:

```js
optimization: {
  splitChunks: {
    chunks: 'all',
  }
}
```

# 示例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day8](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day8)

# reference

1. [webpack 官网对 chunkFilenam 解释](https://webpack.js.org/configuration/output/#outputchunkfilename)
2. [webpack 的 MagicComments（魔法注释）](https://juejin.cn/post/7074895794406424583)
