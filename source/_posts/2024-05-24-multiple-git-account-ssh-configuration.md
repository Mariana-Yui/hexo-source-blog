---
layout: post
title: 多git账号配置管理及ssh远程连接
date: 2024-05-24 10:59:33
update: 2024-06-01 18:55:35
author: Mariana
banner_img: /imgs/banner/md/2024-05-24-multiple-git-account-ssh-configuration.jpeg
index_img: /imgs/banner/md/2024-05-24-multiple-git-account-ssh-configuration.jpeg
tags:
  - git
categories:
  - git
---

# H1 背景

日常开发中用到 ssh 的场景包括公司内部使用私有化部署的 git 工蜂, github 以及连接 devnet 开发机进行远程开发, 导致 ssh 相关配置混乱. 很久之前就是这一套开发流程了, 一直没记录, 简单记下.

# 多 git 账号配置

## 生成 ssh 秘钥

```
ssh-keygen -t rsa -C "邮箱"
```

按照默认配置操作的话, 最后在`~/.ssh`下会生成对应的 **公钥** 和 **私钥**
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1716521738423_7278.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

# reference
