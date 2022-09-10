---
layout: post
title: vue-cli开发plugin记录
date: 2022-07-11
author: Mariana
banner_img: https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662812364666_618.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662812364666_618.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - vue
  - vue-cli
---

# 背景

又双叒叕是因为看到 vue 项目里大佬将基建代码包装在了 vue-cli 中并通过`vue-cli-service command`亦或者`vue invoke command`的方式执行代码, 一直对 vue-cli 不太熟悉花了半天时间大概了解 vue-cli plugin 的开发流程, 至此记录.

# vue add

如果想要安装 vue 第三方插件可以通过`vue add eslint`来安装, vue-cli 会自动在 eslint 前加上 vue-cli-plugin 前缀, 即安装 vue-cli-plugin-eslint, 当然也可以直接输入全名.

> 如果一个插件已经被安装，你可以使用 vue invoke 命令跳过安装过程，只调用它的生成器。这个命令会接受和 vue add 相同的参数。

所以 vue add 做了两件事, 1.安装组件 2.执行`vue invoke`命令

# plugin 的目录结构

首先插件自身也是 npm 包, 一个标准的第三方插件目录结构如下:

```
├── README.md
├── generator.js  # generator（可选）
├── index.js      # service 插件
├── package.json
├── prompts.js    # prompt 文件（可选）
└── ui.js         # Vue UI 集成（可选）
```

# vue invoke

我理解`vue invoke plugin-name`会先初始化插件即执行插件中的生成器(`generator.js`或`generator/index.js`)和目录下的`index.js`

## generator with prompts.js

当目录中存在`prompts.js`时, `vue invoke`会以可交互形式输入参数. 内置的`inquirer`回去解析`prompts.js`, 参数配置参考[inquirer](https://github.com/SBoudrias/Inquirer.js)

```js
// prompts.js
module.exports = [
  {
    name: 'example',
    type: 'confirm',
    message: '是否添加示例组件到项目components目录？',
    default: false,
    filter: (value) => {},
    validate: (val, options) => {}
  }
];
```

交互结束后, 会执行 generator(`generator.js`或`generator/index.js`), 上述交互的输出会作为 generator 的第二个参数

```js
// generator.js
module.exports = function (api, options) {};
```

# vue-cli-service

使用@vue/cli 脚手架搭建 vue 项目时, `package.json`中就能够看到`vue-cli-service serve/build`这类命令, 其中的`serve`, `build`都是 vue-cli 注册的命令, 这类命令分为
第三方插件注册的命令和本地注册的命令

## 如何注册命令

在插件目录下的`index.js`文件通过一下方式注册命令, `api.registerCommand`的第一个参数即命令名, 第二个参数为运行`vue-cli-service 命令名`执行的回调. `api`的更多用法可以参考: [https://cli.vuejs.org/dev-guide/plugin-api.html](https://cli.vuejs.org/dev-guide/plugin-api.html)

```js
module.exports = (api) => {
  api.registerCommand(
    'greet',
    {
      description: 'Write a greeting to the console',
      usage: 'vue-cli-service greet'
    },
    () => {
      console.log(`👋  Hello`);
    }
  );
};
```

## 第三方插件

以 vue-cli-plugin-eslint 为例, 以下是源码中插件根目录下`index.js`的部分源码:
使用`vue add`在下载完插件后, 执行`vue invoke`运行`index.js`的代码, 从而注册 eslint 命令, 从而可以运行`vue-cli-service eslint`

```js
//...
api.registerCommand(
  'lint',
  {
    description: 'lint and fix source files',
    usage: 'vue-cli-service lint [options] [...files]',
    options: {
      '--format [formatter]': 'specify formatter (default: codeframe)',
      '--no-fix': 'do not fix errors or warnings',
      '--no-fix-warnings': 'fix errors, but do not fix warnings',
      '--max-errors [limit]': 'specify number of errors to make build failed (default: 0)',
      '--max-warnings [limit]':
        'specify number of warnings to make build failed (default: Infinity)'
    },
    details:
      'For more options, see https://eslint.org/docs/user-guide/command-line-interface#options'
  },
  (args) => {
    require('./lint')(args, api);
  }
);
//...
```

## 本地注册命令

有时候可能并不需要开发一个完整的插件, 也不想发布 npm 包, 只想注册一个 vue-cli 命令, 可以`package.json`中添加本地的 js 文件, 这样 vue-cli 回去遍历相应文件, 也能够成功运行`vue-cli-service test`

```js
// package.json
"vuePlugins": {
    "service": [
      "src/plugins/my-commands.js"
    ]
  }

// src/plugins/my-commands.js
module.exports = (api) => {
  api.registerCommand('test', {}, () => {
    console.log('test');
  });
};
```

# 本地的插件

本地开发的插件包不想发布到 npm 可以通过`package.json`dependency 中的`file:`引入, 可以`node_module`中看到.
**注意: file:的引入方式不是软链的方式, 如果本地插件有变更, 需要`yarn upgrade vue-cli-plugin-name`更新**

```js
"devDependencies": {
  "vue-cli-plugin-name": "file:./src/plugins/vue-cli-plugin-name"
}
```

# reference

1. [插件开发指南](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html)
2. [妈妈：我会写 Vue-CLI 插件了 😸](https://juejin.cn/post/6844903988781907975)
