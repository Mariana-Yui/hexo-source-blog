---
layout: post
title: webpack学习笔记(4)
date: 2022-09-09
author: Mariana
banner_img: /imgs/banner/md/2022-09-09-study-webpack-day4.png
index_img: /imgs/banner/md/2022-09-09-study-webpack-day4.png
tags:
  - webpack
categories:
  - webpack
---

# 学习笔记

## Plugin

- Loader 是用于特定的模块类型进行转换
- Plugin 则可以用于执行更加广泛的任务, 比如打包优化, 资源管理, 环境变量注入等功能, 你能想到的功能 plugin 应该都可以实现.

所有 plugin 都会暴露出类, 通过实例化使用 plugin, 配置如下:

```js
module.exports = {
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
```

先介绍下常用的 plugin:

### `CleanWebpackPlugin`

每次打包前将 output 的文件夹删除, webpack 打包产物会在产物目录下直接写入, 并不会自动删除

安装: `yarn add -D clean-webpack-plugin`

使用: `const { CleanWebpackPlugin } = require('clean-webpack-plugin');`

### `HtmlWebpackPlugin`

之前打包产物并不包含 html 文件, 需要自己创建 html 文件并将打包产物 js,css 文件引入, 费时费力; 该插件用于在最终打包产物目录下生成 html 文件并进行资源的关联

安装: `yarn add -D html-webpack-plugin`

使用: `const HtmlWebpackPlugin = require('html-webpack-plugin');`

这里是否需要解构根据不同插件开发者习惯而定, 不必纠结.
`HtmlWebpackPlugin`插件内部内置了一个 ejs 模板, 打包时插件就会通过传入的变量对 ejs render 得到最后的 html 文件并写入构建产物目录中, 可以简单看下这个 ejs 文件:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body></body>
</html>
```

同样的, 也可以自定义模板文件, vue, react 这类框架的脚手架就是这么干的; 通过 vue-cli 生成的项目的 html 模板文件在`public/index.html`下, 修改自定义模板文件配置:

```js
new HtmlWebpackPlugin({
  title: "Mariana Blog",
  template: "./public/template.html",
  filename: "output.html", // 打包产物中html的文件名
});
```

### `DefinePlugin`

允许在编译时创建配置的全局常量, webpack 内置插件(不需要单独安装)

使用: `const { DefinePlugin } = require('webpack');`

```js
new DefinePlugin({
  BASE_URL: '"./"',
});
```

需要注意的一点是如果定义字符串**不能省略引号**, 可能是因为源码又进行 eval 等处理, 没具体看过源码, 只是猜测.

### `CopyWebpackPlugin`

将文件夹中指定目录 copy 带打包产物中

安装: `yarn add -D copy-webpack-plugin`

使用: `const CopyWebpackPlugin = require('webpack')`

简单配置如下, 更多配置可以查阅官网

```js
new CopyWebpackPlugin({
  patterns: [
    {
      from: "public",
      globOptions: {
        ignore: ["**/template.html", "**/.DS_Store"],
      },
    },
  ],
});
```

其中 globOption 通过`glob`库进行文件匹配, 需要添加`**`, 更多语法参考[https://www.npmjs.com/package/glob](https://www.npmjs.com/package/glob)

可以看到打包产物 public/下 include 的文件都复制到 build 中了
<img src="https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662993074608_764.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0" width="400" />

# 示例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day4](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day4)
