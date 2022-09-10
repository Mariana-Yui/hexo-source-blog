---
layout: post
title: 浅析tsconfig.json中module, moduleResolution, target, lib的作用
date: 2022-05-15
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1652617339864_9109.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1652617339864_9109.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - typescript
---

# 背景

1. 业务部门这一年全面拥抱 typescript, 再也不直接使用 js 编写代码。但是我们知道 ts 实际上还是会被编译成 js 的，`tsconfig.json`则起到重要作用, 其中`module`, `moduleResolution`, `target`, `lib`这些 field 及其 value 长得好像都差不多, 所以一直没搞清楚这些 field 是做什么的

# module

定义**模块解决方案**, typescript 中都是通过`import/export`处理模块, 但编译成 js 存在`AMD`, `CMD`, `ES20XX`, `commonjs`等多重模块解决方案, 这里的建议是运行在浏览器的项目使用`ES20XX`, 因为现代浏览器大多已经原生支持`import/export`; 运行在 node.js 的项目使用`commonjs`, 高版本的 node 版本才开始支持`import/export`, `commonjs`会使用`module.export/require`引入模块, 其余值很少用到.

## 不同 module 编译出的代码

### **commonjs**

![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/20220524-exp4.png)

### **es20xx**

![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/20220524-exp3.png)

**如果明确项目是运行在高版本 node, 可以尝试使用`ES20XX`, 但是也需要注意引入的第三方 npm 包是否支持, 在 nestjs 中尝试使用`ES20XX`就会有报错, 于是老老实实的使用`commonjs`**
![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/20220524-exp1.png)

# moduleResolution

定义编译器如何**找到(处理)引入的包文件**, 共有两种可用的模块解析策略: `node`和`classic`, `node`是 typescript 现在默认的解析策略, `classic`更多是用于向下兼容, 很少回去配置改 field, 保持默认即可

# target

定义**编译为什么版本的代码**, 我们都知道,es2015~es20xx 每年都会新增新的 api 和新的语法, 例如 es2017 之后可以使用`async/await`, target 设置为`es2017`编译时`tsc`就不会对该语法做 polyfill, 设置为`es2015`就会进行 polyfill

## 不同 target 编译出的代码

可以看到当设置 es2015 时会对`async/await`做 polyfill

### **es2017**

![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/20220524-exp5.png)

### **es2015**

![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/20220524-exp6.png)

# lib

定义支持的**类型声明**, 大部分情况下都是和 target 一致, 除了一些特殊场景, 比如: 1. target 设置了 es5 但是存在对 Promise 的 polyfill 处理 2. 运行在浏览器中需要 BOM/DOM 对象类型声明, 可以设置数组

# ts or babel

另外 typescript 是可以直接代码编译为 es5 的, 但是目前业界前端打包方案还是愿意将 babel 和 typescript 结合使用, 反正是有好处=。=

> babel 和 ts 都会转换语法，两者是冲突的，一般不会同时出现。然后 Promise 是 api，Symbol 是内置类型，api 可以通过 polyfill 在不支持的环境上获得支持，但类型不支持就是不支持，没有 polyfill。而且现代浏览器基本都支持 promise 和 symbol，没什么好担忧的

# reference

1. [Typescript confusion: tsconfig.json module, moduleResolution, target & lib explained](https://medium.com/@tommedema/typescript-confusion-tsconfig-json-module-moduleresolution-target-lib-explained-65db2c44b491#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIxYTgyNTllYjA3NjYwZWYyMzc4MWM4NWI3ODQ5YmZhMGExYzgwNmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NTI2MTEyMzgsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMTAxMjUzOTgwMTUwNjQxNDg5MCIsImVtYWlsIjoiaGVhbG1zbGluQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoibGluIExpbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaVVuUWdGYkZTV1FLdUo3NG1LazNTeXpTUFVoa3h6Q0lPWUc1X3E9czk2LWMiLCJnaXZlbl9uYW1lIjoibGluIiwiZmFtaWx5X25hbWUiOiJMaW4iLCJpYXQiOjE2NTI2MTE1MzgsImV4cCI6MTY1MjYxNTEzOCwianRpIjoiZDcyM2IyNjU0M2QzZmI1YTk1NmRjOGNiOTNjYjQyM2RhNDQ1ZGYzNiJ9.bDAxv4MZqbrpvHVDjD0xu-738zVDWW7HF0GHndJg5LmCOA47NuXvsB7uLKsvtvwm6262qHwhMyDWzem4lGKjHjJfu_fDLMrr73zZP6Zn2yI-apfM_-PgIyaUCd5uUXZTsZ7JrdTDs-UvyGUM3MSzVCSrmSEgGBHX6HFPpyemEAVkSu0L5Fch5-0XEoH4NgNaapuVPDzpdbSDqH-RCkMh76Y1qW9kmajJKUNL6VL6OpJpGJfrK01L9kifeD4JjKgGXtpKJoW0K2ICfec_mFDp9GfRrFq-0b2-WnfoBVc8PeQ25zfYRBTQcQWcB6eeJLDO0I1Nrk83Clc89ixWzkX-vg)
2. [Typescript tsconfig.json 全解析](https://lq782655835.github.io/blogs/project/ts-tsconfig.html)
3. [Intro to the TSConfig Reference](https://www.typescriptlang.org/tsconfig#lib)
4. [用了 typescript 还需要 babel 或者 polyfill 吗？](https://www.zhihu.com/question/322722786)
5. [为什么说用 babel 编译 typescript 是更好的选择](https://juejin.cn/post/6968636129239105549)
