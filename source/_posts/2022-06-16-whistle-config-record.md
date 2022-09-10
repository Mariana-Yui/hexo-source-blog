---
layout: post
title: whistle实用操作记录
date: 2022-06-16
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1621390677935_7120.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1621390677935_7120.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - whistle
---

# 背景

背景其实也是和同事闲聊, 然后聊到这个, 就尝试了下, 总结了三种方法

# whistle 部分请求不走代理

试想一个场景要把域名`www.abc.com`代理到某台机器 ip, 但是`www.abc.com/api`不走代理, 可以

1. 第一种最简单的, 写对应匹配的正则表达式, 但是需要比较熟练的正则使用经历

```
/www\.abc\.com\/?!(api)/ 127.0.0.1
```

2. 使用`ignore://host`, 这里还支持 ignore file, sock 之类的, 还需要看代理的映射

```
www.abc.com 127.0.0.1
www.abc.com/api ignore://host
```

3. `excludeFilter`(我还没试过, 不过同事说可以诶嘿)

```
www.abc.com excludeFilter:///(api)/
```

更多的例如请求头过滤, `includeFilter`, 可以参考[https://cloud.tencent.com/edu/learning/course-2605-50298](https://cloud.tencent.com/edu/learning/course-2605-50298)

# reference

1. [ignore](https://cloud.tencent.com/edu/learning/course-2605-50298)
2. [filter](https://wproxy.org/whistle/rules/filter.html)
3. [pipe-过滤规则](https://cloud.tencent.com/edu/learning/course-2605-50298)
