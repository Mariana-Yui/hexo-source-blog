---
layout: post
title: obsidian插件记录
date: 2022-08-08
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662998852483_4171.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662998852483_4171.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - obsidian
---

# 背景

发现了个好用的 note app: `obsidian`, 内置插件以及第三方插件都能大幅度提升写笔记体验, 于是把之前用 jekyll 搭建的博客文件夹挪到里面, 代码虽然是同步 git 的, 但是插件被我 gitignore 掉了, 都存在本地, 避免极端情况要重新装一遍记录下用到第三方的插件.

# 第三方插件

1. calendar
   展示日历用于记录每周的日记情况, 点击日期即可生成当天的 md 文件
   <img src="https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/202208082337559.png" width="300" />
   可以配合内置插件`日记`和`模板`食用
   ![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/202208082344111.png)
2. emoji toolbar
   提供 emoji 表情方便写笔记时搜索
3. style settings
   自定义外观主题的样式, 外观主题在这里下载 ↓
   ![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/202208082353487.png)
4. sliding panes
   ![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/202208082352300.png)
5. image auto upload plugin
   🐮🍺 需要配合`picGo`食用, 直接把图片复制进来就可以通过 picGo 上传到图床, 再也不用手动上传了
   其中`picGo server`配置默认为`http://127.0.0.1:36677/upload`, 具体端口号可以再 picGo app 配置中找到 ↓
   ![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/202208082357506.png)
6. obsidian git
   每隔 X 分钟自动同步 git, 对我的场景没啥用, blog 有些未写完的文件本来就不想 commit, 以后别的场景可能会遇到
7. day planner
   设置每天的时间轴

# DIY

1. calendar
   通过查找源码可以发现

```js
const noteDate = window.moment(file.basename, format, true);
```

`calendar`会对文件全名通过 moment.js 处理, 这就导致你如果文件名是`2022-08-10-obsidian-plugins`这样它就识别不出来, 就无法在日历上通过 dot 标识当天的日记, 啃爹呐这是 😅. 看了看 issue 也有人发出了相同一问, 半年过去了作者也没解决, 那我们就自己搞个 polyfill, 既然你全名不能生成日期那我就截断能生成日期的那部分不就好了-.-, 博主的笔记文件名都是`yyyy-mm-dd-笔记标题`这种格式, 通过以下正则即可让旧笔记显示在 📅 上了~

```js
const noteDate = window.moment(
  file.basename.match(/\d{4}-\d{2}-\d{2}/g),
  format,
  true
);
```

效果图:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1660139613361_5344.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

# 多提一嘴

在 obsidian 中写 markdown 无法使用 prettier 对源码进行格式化, 所以需要使用设置 pre-commit 钩子在 commit 前格式化 md 文件, 具体操作如下:

```bash
npx husky-init # add --yarn2 for Yarn 2
yarn add --dev pretty-quick
yarn husky set .husky/pre-commit "npx pretty-quick --staged"
```

# reference

1. [Obsidian 新手系列之你不可不知的插件](https://sspai.com/post/67619)
2. [add prettier format before commit](https://prettier.io/docs/en/precommit.html)
3. [Obsidian 中使用 Calendar 插件快捷建立日记、周记](https://zhuanlan.zhihu.com/p/428499423)
