---
layout: post
title: 开发nodejs cli过程记录
date: 2022-06-22
update: 2022-10-04 23:01:03
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662812529872_7464.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662812529872_7464.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - node
  - cli
---

# 背景

阅读组里常用的 node 编写的 cli 源码记录

# npm packages

介绍一些开发 cli 工具很实用的 npm 包

## command-exists

> node module to check if a command-line command exists

```javascript
var commandExists = require('command-exists');
// 异步用法
commandExits('ls', (err, commandExists) => {...});
// 同步用法
commandExists.sync('ls')
```

## fs-extra

> fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods. It also uses graceful-fs to prevent EMFILE errors. It should be a drop in replacement for fs.
> fs-extra 提供了很多 fs 的扩展操作例如复制, 清空等操作, 相当好用
> 整理一些比较使用的 api:

1. `emptyDir`: 字面意思，清空文件夹
2. `readJSON`: Reads a JSON file and then parses it into an object.
3. `writeJSON`: Write a JSON object stringified into file

## ora

> Elegant terminal spinner

用于优雅输出终端提示文案
以下是小 demo 及运行输出:

```js
const ora = require("ora");
const spinner = ora("default text").start("default text 2");
// spinner.text = 'Loading rainbows';
spinner.info("hello world");
spinner.succeed("hello world");
spinner.fail("hello world");
spinner.succeed();
```

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1661877086095_5819.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)
其中`ora`需要实例化为`spinner`使用, `ora()`, `start()`参数为`string`时都表示默认输出文本, `spinner.text`同理, 后设置的优先级更高, 在`spinner.xxx()`未传入参数时会输出默认文本

### tips

最新版本的`ora`只能使用 ESModule 引入, commonjs 方式引入请使用 v4 版本

# 实用操作

## 查看包的最新版本和所有版本

查看最新版本

```javascript
npm view package-name versions --json
// or
yarn info package-name versions --json
```

查看所有版本

```javascript
npm view package-name version --json
// "1.0.1205"
// or
yarn info package-name version --json
// {"type":"inspect","data":"1.0.1205"}
```

## process.cwd()和\_\_dirname

这两个命令行的输出在开发 cli 这种全局包中区别尤为明显

`process.cwd()`: 返回当前工作目录。可以通过`process.chdir()`更改.
`__dirname`返回源代码所在的目录。

## spawn

我们使用 spawn 执行 linux 命令后如何获得对应的输出呢? 看源码时使用了两种方式, 两种都可以
先看下如何使用 spawn

```js
const { spawn } = require("child_process");
const ls = spawn("ls", ["-la"], {});
```

1. spawn 第三个参数中`stdio`默认值为 `pipe`, 相当于`相当于 ['pipe', 'pipe', 'pipe']`, 对应`stdin`, `stdout`, `stderr`.
   `pipe`会在子进程和父进程之间创建管道。子进程的标准输入、标准输出和标准错误被重定向到 ChildProcess 对象上相应的 subprocess.stdin、subprocess.stdout 和 subprocess.stderr 流。默认情况下子进程的输出父进程是看不到的, 需要使用以下方式。这里`stdio: 'pipe'`很容易误解

```js
ls.stdout.setEncoding("utf8");
ls.stdout.pipe(process.stdout);
// or
ls.stdout.on("data", function (data) {
  process.stdout.write(data);
});
```

2. 设置`stdio: 'inherit'`, 通过相应的标准输入输出流传入/传出父进程, 子进程直接使用父进程的流。 在前三个位置，这分别相当于 process.stdin、process.stdout 和 process.stderr。对于说明性的内容可以直接使用`stdio: 'inherit'`, 对于需要处理的输出数据, 默认即可, 通过`stdout.on('data')`处理数据

```js
const ls = spawn("ls", ["-la"], { stdio: "inherit" });
// 会直接输出ls -la的内容, 无法通过ondata监听stdout, stderr还是可以监听
// 使用process.stdout无法ondata, 使用ls.stdout.ondata也是会报错的
```

## cwd

spawn 第三个参数中支持 cwd 表示子进程命令要运行的目录, 例如`yarn link`就需要指定目录才能正常

```js
const child = spawn("yarn", ["link"], { cwd: xx });
```

## require.resolve

一般用于获取 npm 包的绝对路径, 如果当前源码运行的目录`node_modules`不存在这个包, 会直接抛出异常, 用法如下:
博主只用到了模块路径的使用方法, `require.resolve`会在执行这个函数的目录开始逐级往外查找查找`node_modules`, 按照这样的搜索顺序`["/Users/enhanced-resolve/node_modules", "/Users/node_modules", "/node_modules"]`
具体可以参考[node 的路径解析 require.resolve](https://juejin.cn/post/6844904055806885895)
**`require.resolve和process.cwd()不同, process.chdir()无法更改查找路径`**

```js
// 获取包所在的目录绝对路径
path.join(require.resolve(${moduleName}/package.json), '..')
// 不加package.json 默认找index.js
```

# reference

1. [nodejs 官方文档 child_process](http://nodejs.cn/api/child_process.html#optionsstdio)
2. [node 的路径解析 require.resolve](https://juejin.cn/post/6844904055806885895)
