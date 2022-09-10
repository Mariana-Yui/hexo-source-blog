---
layout: post
title: webpack学习笔记(2)
date: 2022-09-02
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662054146300_6978.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662054146300_6978.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - webpack
---

# 学习笔记

1. webpack 默认 config 文件名`webpack.config.js`, 可以通过`webpack --config webpack.config.js`指定配置文件, 默认导出到`./dist/main.js`, 一个最基础的配置文件如下:

```js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: './build'
  }
};
```

2. webpack 默认只支持 import js 文件, 对于 css, img 这类模块需要额外的 loader 进行解析

   1. loader 可以通过三种方式使用

      1. 内联方式: import "css-loader!./style.css"

      2. cli 方式: 已废弃

      3. 配置方式: `modules.rules`中允许配置多个 loader, rules 是一个[Rule]数组, Rule 是一个对象, 包含常用属性:

         1. test: 正则表达式, 对 resource 进行匹配

         2. loader: 只有一个 loader 时可以使用这个属性, 值为字符串

         3. use: [UseEntry]数组, useEntry 也是个对象包含常用属性:

            1. loader: 必须有 loader 属性, 值为字符串

            2. options: 可选属性, 字符串或对象, 值会传到 loader 中

      4. 直接使用`loader: 'xx-loader'`或者`use: ['xx-loader']`都是`use: [{loader: 'xx-loader'}`的简写

   2. 普通的 css 文件使用`css_loader`**解析**, 安装: `yarn add -D css-loader`. `css-loader`只是让 webpack 能够正确解析 css 模块, 还需要使用`style-loader`生成\<style\>插入到\<head\>中, 安装: `yarn add -D style-loader`, 对相同 resource 的 loader, webpack 处理顺序是从右往左的, 所以对于普通的 css 文件, 配置应该是`['style-loader', 'css-loader']`, 先解析 css 文件, 再插入 html 中.

      1. 对于 sass/less/stylus 这类预处理工具也是同样的, 以 sass 为例, 安装: `yarn add -D sass sass-loader@10`(最新版的 sass-loader 不适配 sass, 安装 version10) 配置: `use: ['style-loader', 'css-loader', 'sass-loader']`

      2. 小知识: 可以使用`npx sass foo.scss > bar.css` 将 scss 转换为 css

3. 针对不同浏览器兼容性, webpack 通过 browserslist 管理需要兼容的浏览器, 配置文件名`.browserslistrc`, babel, autoprefixer 等插件处理兼容性时都会先查询该浏览器配置,不会对不符合的浏览器做兼容 browserslist 编写规则如下:

   ```js
   default //默认的浏览器, 该行可以省略
   > 1% //占有率>1%, 可以在https://caniuse.com/usage-table查询个浏览器占有率
   last 2 version // 每个浏览器的最近两个版本
   not dead // 两年内官方有支持或更新的浏览器
   ```

   1. babel, autoprefixer 会通过`caniuse-lite`这个包去解析`.browserslistrc`里的内容, 也可以通过`npx browserslist "> 1%, last 2 version, not dead"`查看输出匹配的浏览器列表

   2. 指定兼容浏览器 可以使用上述创建`.browserslistrc`, 也可以在`package.json`中新增`browserslist`字段.

      ```json
      {
        "browserslist": ["> 1%", "last 2 version", "not dead"]
      }
      ```

   3. 如果什么配置都没有, 会使用默认的 browser 配置

   <img src="https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662051646312_1893.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0" width="300" />

   4. `or`/`,`取并集, `and`取交集, `not`取反, 一般默认都是取并集

# 配置示例

放上最终的`webpack.config.js`和`.browserslistrc`配置
webpack.config.js:

```js
const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
```

.browserslistrc:

```js
> 1%
last 2 version
not dead
```

# 示例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day2](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day2)
