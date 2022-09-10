---
layout: post
title: webpack学习笔记(4)
date: 2022-09-09
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662812638863_2436.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662812638863_2436.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - webpack
---

# 学习笔记

## Plugin

- Loader 是用于特定的模块类型进行转换
- Plugin 则可以用于执行更加广泛的任务, 比如打包优化, 资源管理, 环境变量注入等功能, 你能想到的功能 plugin 应该都可以实现.

所有 plugin 都会暴露出类, 通过实例化使用 plugin, 配置如下:

```js
module.exports = {
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()]
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
`HtmlWebpackPlugin`插件内部内置了一个ejs模板, 打包时插件就会通过传入的变量对ejs render得到最后的html文件并写入构建产物目录中, 可以简单看下这个ejs文件:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
  </body>
</html>
```