---
layout: post
title: webpack学习笔记(1)
date: 2022-09-01
author: Mariana
banner_img: /imgs/banner/md/2022-09-01-study-webpack-day1.png
index_img: /imgs/banner/md/2022-09-01-study-webpack-day1.png
tags:
  - webpack
categories:
  - webpack
---

# 引言

系统学习 webpack5 的第一天...立志成为前端 dalao(大概

# 学习笔记

1. webpack 安装通常需要安装`webpack`和`webpack-cli`但后者不是必须的, 在主流框架 vue, react 中都没有使用而且使用自己的 cli

   1. `webpack-cli`的作用是在使用`webpack --config=webpack.config.js`指定 webpack 配置文件或者默认配置文件是通过`webpack-cli`执行的, 当然也可以像 vue,react 一样自己编写 cli

2. 没有安装`webpack-cli`直接执行`webpack`也会提示需要安装

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1661880098783_9947.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

3. 直接运行`webpack`没指定文件路径 webpack 默认会寻找 src 目录, 没有会报错

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1661952204310_1520.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

4. 以以往开发的经验, 建议都局部安装 webpack

5. webpack 默认只支持处理导入导出语法编译,不会改变除此之外的部分, esmodule 语法可以直接使用`<script type="module">`调用, 但是如果要使用 cjs 语法或者不使用`type="module"`的普通 script 标签引入, 都需要使用 webpack 进行编译

# 示例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day1](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day1)
