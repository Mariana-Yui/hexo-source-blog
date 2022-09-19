---
layout: post
title: lerna使用记录
date: 2022-08-25
update: 2022-08-31 00:00:00
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1660140287748_6143.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1660140287748_6143.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - lerna
---

# 引言

记录一下工作中使用到的 lerna 常用命令(并不常用), 部分是对[基于 Lerna 管理 packages 的 Monorepo 项目最佳实践](https://juejin.cn/post/6844903911095025678#heading-2)的记录, 部分是工作中遇到的问题记录.

# 目录结构

可以通过`tree -L 2 --gitignore`生成

```
├── README.md
├── babel.config.js
├── commitlint.config.js
├── lerna.json
├── package.json
├── packages
│   ├── cli
│   └── cli-shared-utils
└── yarn.lock
```

# 常用命令

1. `lerna init`: 初始化一个 monorepo 项目, 生成 lerna.json, package.json 和 packages 文件夹
2. `lerna create`: 在 packages 文件夹下添加 package, npm 包目录结构
3. `lerna add`: packages/\*全部安装依赖
   3.1 `--scope packageName`: 指定 package 安装依赖, 也可以`lerna add anotherPackageName --scope packageName`将 packages/\*下一个包作为另一个包的依赖
   3.2 lerna 默认通过 npm 安装依赖, 可以添加以下使用 yarn 安装依赖

   ```json
   {
     "npmClient": "yarn"
   }
   ```

4. `lerna version`: 需要保证当前 branch clean

   1. `lerna version [major | minor | patch | premajor | preminor | prepatch | prerelease]`类似`npm version`一样, 将 packages 中变更的 package 改变版本号
   2. 打 tag, 并自动将 tag 同步 remote, 如果各种原因导致 tag 已存在需要删除 remote tag
   3. 生成 CHANGELOG.md, 建议使用配置参数`--conventional-commits`, 以[传统的提交规范](https://conventionalcommits.org/)生成 log, 如下图可以看到我们规范提交的 commit 信息都被写入了 CHANGELOG 中
      ![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1661445238686_7737.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)
      ![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1661445271386_3522.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)
      CHANGELOG.md 中可以看到根据提交的前缀进行了分类
      ![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1661931145247_8800.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

5. `lerna publish`: 通常不会单独使用`lerna version`, 因为`lerna publish`就包含`lerna version`, 以及会将涉及版本号变动的包`npm publish`, 需要注意的是如果包名带有`@xx/`前缀, 需要在[npm organization](https://www.npmjs.com/org/create)注册该前缀组织
   1. 这是个工作中遇到的奇怪问题: 如果 package.json scripts 中事先定义了类似配置如下, 只能使用`npm run patch/publish`来使用 lerna, 不能直接在 terminal 执行`lerna ...`, 否则会一直在 package.json 中添加 gitHead 导致提交失败
   ```json
   {
     "patch": "lerna version patch --conventional-commits --yes",
     "publish": "lerna publish from-package --yes"
   }
   ```
6. `lerna clean`: 清除 packages/\* 下各 package 依赖, 如果要删除项目中所有依赖可以通过`lerna cleanr` + `rm -r node_modules`
7. `lerna bootstrap`: 安装所有 packages 依赖, 默认情况下会有以下问题
   7.1 会将依赖都安装到 package 中, 没有做依赖提升
   7.2 `--hoist`会做到依赖提升, 但是和`"npmClient": "yarn"`冲突, **--hoist is not supported with --npm-client=yarn, use yarn workspaces instead**
   这时候就要使用 yarn workspace 配合 lerna 使用, 前者负责依赖安装管理, 后者负责版本管理发布, 启用 yarn workspace 后`lerna bootstrap`等同于`yarn install`, yarn 会对依赖提升
   相关配置:

```json
// lerna.json
{
	"npmClient": "yarn",
	"useWorkspaces": true
}

// package.json
{
	"workspaces": [
		"packages/*"
	]
}
```

# lerna.json

1. `version`: 固定模式(fixed)或独立模式(inpendent)
   默认是固定模式, 即 packages/\* 下所有 package 都是统一版本号, 和 lerna.json 中 version 配置一直, 每回发布都会更新 version 配置, 生成的 CHANGELOG.md 在项目根目录下, 如果要使用独立模式, 配置`"version": "inpendent"`, 各 pacage 单独管理版本号, CHANGELOG.md 分布在各自文件夹下

# reference

1. [基于 Lerna 管理 packages 的 Monorepo 项目最佳实践](https://juejin.cn/post/6844903911095025678)
2. [Lerna 的依赖管理及 hoisting 浅析](https://yrq110.me/post/tool/how-lerna-manage-package-dependencies/)
3. [新版本 husky 配置不生效](https://www.cnblogs.com/ly0612/p/15545803.html)
4. [Environment variable 'HUSKY_GIT_PARAMS' is not available globally #840](https://github.com/typicode/husky/issues/840)
5. [yarn 指令总览](http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/)
6. [Lerna 独立模式下如何优雅的发包](https://juejin.cn/post/7012622147726082055)
