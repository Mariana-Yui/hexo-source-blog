---
layout: post
title: pm2线上问题处理记录
date: 2022-09-27 15:02:05
update: 2022-09-28 16:36:14
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664354033242_4294.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664354033242_4294.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - nodejs
  - pm2
---

# 背景

线上机器存在两个 pm2 部署的系统服务, 由于 pm2 默认输出到`pm2-out.log`文件中, 系统运行了一年多这个文件已经几十 G 了, 查询日志定位问题时 grep 速度极慢..所以想法是修改输出日志文件到新文件中, 并对其做日志切割.

# 具体实现

## 更换日志输出文件

pm2 默认通过`ecosystem.config.json`进行各种配置, 这里对输出的文件进行修改

```js
module.exports = {
  apps: [
    {
      // ...other configs
      error_file: "../logs/pm2-error-new.log",
      out_file: "../logs/pm2-out-new.log",
      log_file: "../logs/pm2-app-new.log",
    },
  ],
};
```

需要杀死当前服务的进程

`pm2 delete <id|name>`

不能只是`stop`, 更新的配置不会生效, 然后

`pm2 start ecosystem.config.js`

logs 下新文件成功生成了
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664263425495_9764.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

## 日志切割

这里使用 pm2 提供的日志切割插件`pm2-logrotate`, 可以设置默认的日志大小阈值, 日志文件日期格式, 进程轮询日志大小时间间隔, cron 定时任务等.

安装: `pm2 install pm2-logrotate`

修改配置: `pm2 set pm2-logrotate:<paramName> <value>`

查看插件配置: `pm2 conf pm2-logrotate`

以下为我设置的`pm2-logrotate`配置:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664263834486_4617.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

## 线上处理

在开发机 devServer 上验证时畅通无阻, 但在线上机器测试时又是一番波折.

- Q: 线上机器执行`pm2 list`时没有输出

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664264213113_3713.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

- A: 最开始部署服务以及发版本重启服务时都是以 root 权限执行的`pm2 start`, 这导致申请普通权限的我并没有查看 root 用户进程的权限; 在申请 root 权限并执行`sudo su`后可以正常输出

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664264308893_9536.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

- Q: 线上机器 pm2 部署了两个服务, 但是`pm2 list`只输出一个
- A: 查看两个服务的重启脚本文件后, 发现`PM2_HOME`环境变量, 用于在同一台机器上生成多个 pm2 实例, 类似于命名空间,不同实例之间相互隔离, 默认使用相同的`PM2_HOME`

设置`PM2_HOME`启动:

`pm2 start PM2_HOME=$(pwd)/_pm2`

或先暴露环境变量, 然后再启动:

```sh
export PM2_HOME=$(pwd)/_pm2
pm2 start
export PM2_HOME='' # 清除变量
```

在不同`PM2_HOME`下都能够看到 pm2 对应的服务了
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1664264837766_3422.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

**参考资料 no.4 深入介绍了 copytruncate 机制的 pm2-logrotate 和 sign 机制的 egg-logrotator, 有兴趣的可以看看~**

# reference

1. [Multiple PM2 on the save server](https://pm2.keymetrics.io/docs/usage/specifics/)
2. [pm2 日志管理 pm2-logrotate 介绍](https://www.cnblogs.com/daner1257/p/10763888.html)
3. [pm2-logrotate](https://github.com/keymetrics/pm2-logrotate)
4. [Node.js 应用日志切割原理与踩坑实践](https://juejin.cn/post/6844904151588012039)
