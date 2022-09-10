---
layout: post
title: 客户端请求经过nginx获取请求头Host
date: 2022-05-15
author: Mariana
banner_img: //w.wallhaven.cc/full/l3/wallhaven-l3x1ky.jpg
index_img: //w.wallhaven.cc/full/l3/wallhaven-l3x1ky.jpg
tags:
  - nginx
---

# 背景

目前项目部署正式环境前端请求会走 nginx, 反向代理到真正的后台服务机器. 最近刚弄完 node 的鉴权中间件, 其中遇到获取请求头`host`信息是`127.0.0.1:xxxx`无法获取真实请求 ip 或域名的情况, 解决后做个记录.

# 解决方法

先说解决方法, 因为 nginx 默认是不会透传客户端的请求头信息的, 所以需要自己在 nginx 的配置文件中添加下, 找到对应匹配的 location, 以下是实例:

```nginx
location /api/ {
    proxy_set_header Host $host;
    proxy_pass http://127.0.0.1:10200/;
}
```

# 衍生操作

## 如果用户请求直达服务想获取用户的 ip 该怎么做呢?

明天试一试, to be continued;

## 如果通过 nginx 转发的服务想获取用户的 ip 该怎么做呢?

目前 nginx 代理服务器都支持转发请求头`X-Real-IP`和`X-Forwarded-For`,

# 小技巧

我不知道有没有人和我一样死活记不住 nginx.conf 的路径 🤦🏻‍♀️mac 和 linux 上的路径还不一样 🤦🏻‍♀️ 可以通过`nginx -V`查看 nginx 相关的文件路径, 其中最常用的`--conf-path`就是 nginx 的配置文件, `--http-log-path`是 nginx 所有的日志, `--error-log`是 nginx 的错误日志

```bash
// 省略部分信息
➜  ~ nginx -V
nginx version: nginx/1.21.6
built by clang 13.0.0 (clang-1300.0.29.3)
built with OpenSSL 1.1.1m  14 Dec 2021
TLS SNI support enabled
configure arguments: --prefix=/usr/local/Cellar/nginx/1.21.6 --sbin-path=/usr/local/Cellar/nginx/1.21.6/bin/nginx --conf-path=/usr/local/etc/nginx/nginx.conf --http-log-path=/usr/local/var/log/nginx/access.log --error-log-path=/usr/local/var/log/nginx/error.log
```

# reference

1. [HTTP 请求头中的 X-Forwarded-For](https://imququ.com/post/x-forwarded-for-header-in-http.html)
2. [nginx 代理获取 ip 为 127.0.0.1 解决方法](https://blog.csdn.net/xixingzhe2/article/details/118582055)
