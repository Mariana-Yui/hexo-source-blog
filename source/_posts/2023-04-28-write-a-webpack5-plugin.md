---
layout: post
title: webpack5+rollup 开发 plugin
date: 2022-12-06 10:55:58
update: 2023-04-28 11:43:12
author: Mariana
banner_img: /imgs/banner/md/2023-04-28-write-a-webpack5-plugin.jpeg
index_img: /imgs/banner/md/2023-04-28-write-a-webpack5-plugin.jpeg
tags:
  - webpack5
  - rollup
categories:
  - webpack
hide: true
---

# 背景

工作中某个 vue 项目开发中存在以下笨比操作, `npm run build`后将生成的 dist 文件夹下的**index.html**复制一份改名为**apre_index.html**, 并把其中一段 js 逻辑删掉, 然后把 dist 文件夹压缩成 zip 用于上传.
这里不想讨论这个操作的合理性, 只是每次开发都需要重复以上操作实属无奈, 于是决定**写个 webpack 插件**自动化以上操作.

# 方案设计

1. 使用 ts 开发 plugin, rollup 打包成 cjs 文件便于**vue.config.js**引入
2. plugin 业务逻辑:
   1. 读取 index.html 内容, 将匹配的字符串删掉
   2. 生成**apre_index.html**并将删除后的内容写入
   3. 删除原有的 dist.zip 并重新生成
3. 发布为 npm 包
4. 项目中**vue.config.js**引入, 生产环境下使用该 plugin

_tip: 2.3 正常情况下会直接覆盖, 博主的 mac 上有点问题..所以选择先删除_

# reference

1. [手把手带你开发 webpack5.x - plugin（保姆教程）](https://juejin.cn/post/7013995927874568206)
2. [Writing a Plugin](https://webpack.js.org/contribute/writing-a-plugin/)
3. [rollup + typescript 构建 ts 包](https://cloud.tencent.com/developer/article/1729333)
4. [你是怎样的 rollup-- rollup 打包 typescript 编写的类库](https://juejin.cn/post/7049354102509142029)
