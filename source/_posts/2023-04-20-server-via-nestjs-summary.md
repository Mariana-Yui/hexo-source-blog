---
layout: post
title: nestjs开发及流水线相关问题记录
date: 2023-04-20 17:12:02
update: 2023-04-28 14:33:45
author: Mariana
banner_img: /imgs/banner/md/2023-04-20-server-via-nestjs-summary.jpeg
index_img: /imgs/banner/md/2023-04-20-server-via-nestjs-summary.jpeg
tags:
  - nestjs
  - nodejs
---

# 背景

前段时间负责将组内项目接入自动化流水线, 磕磕绊绊最后也算把全流程走通并且在线上稳定运行了, 把过程中遇到到的问题和知识点作用做个记录总结.

# nestjs

这里不会介绍 controller, provider 是啥, 应该怎么使用, 这些直接看官方文档就能理解了, 只会记录使用 nestjs 中的问题的解决过程, 官方文档模棱两可的描述以及底层原理的思考.

## 1. eslint wrong error "is defined but never used"

初始化项目时遇到 import 所有装饰器例如`@Injectable()`, `@Get()`, 并且在对应文件中使用了, eslint 还是会提示**"is defined but never used"**.
需要把`@typescript-eslint/*`包升级到 5.35.1 以上

## 2. 及时更新@nestjs/cli 脚手架

使用脚手架初始化项目时, 当引入第三方 Module 时出现了各种各样的问题, 最后发现脚手架`@nestjs/cli`之前安装的版本是 v7, 而现在最新大版本已经迭代到 v9 了, 很多第三方库版本都已经不兼容旧的脚手架新建的项目, 升级到 v9 后重新初始化项目第三方 Module 引入问题消失.

## 3. CacheModule

这里项目中使用的是 redis, 以此为例:
在不同模块中引入 CacheModule 的方式:

1. app.module.ts 中设置`isGlobal: true`

```ts
CacheModule.register<RedisClientOptions>({
  isGlobal: true,
  store: redisStore,
  ...config.redis,
});
```

2. 在每个 module 中单独引入, 参数都要带上, 否则会使用默认的内存缓存.

## 4. forRoutes

指定中间件作用路由时, 不需要加上设置的 prefixPath, 如果想作用路由下所有接口使用`/*`

# linux

流水线中难免会有频繁的 linux 操作, 记录用到的命令

## rsync

同步文件, 和`cp`类似, 但是可以通过参数过滤不复制的文件.
常用的参数:

`-a, --archive`: 归档模式，表示以递归方式传输文件，并保持所有文件属性
`--exclude-from`: 这是选择`rsync`而不是`cp`的最大原因, 该配置能够在复制文件时指定过滤的文件.
`--exclude`: 指定排除不需要传输的文件模式, 例如`--exclude=exclude.list`, 就可以在目录下创建 exclude.list, 内容为过滤的文件模式, 例如:

```
log/
Dockerfile
.eslintrc.js
.gitignore
.prettierrc
*.log
```

# redis

常用命令:

1. `flushdb`: 删除 db 中所有数据
2. `ttl key`: 剩余过期时间
3. `get key`: 查询 key 值
4. redis 的值如果是 number, 会显示类似"1234"; 如果是 string, 会显示"\\"1234\\""
5. redis connect refuse 解决方法:
   redis.conf 中将 protect mode yes 改为 no
   bind 127.0.0.1 注释#

# docker

常用命令:

1. `docker run -dit --rm imageId bash`: 创建容器并在容器启动 bash 交互, 退出后自动删除容器
2. `docker run -dit imageId`: 创建容器
3. `docker exec -it id bash`: 在运行的容器中启动 bash 与其交互
4. `docker history imageId`: 通过镜像 id 查看上层 layer 的 Dockerfile
5. `docker logs containerId`: 输出容器日志
6. `docker run -d -p 127.0.0.1:80:80 nginx:alpine` 运行时指定端口映射, 需要注意的是 Dockerfile 中的**EXPOSE**关键字只是描述端口号, 没有实际作用
7. `docker build -t v0.0.1 --ulimit nofile=100002:100002 packages/wework-bot`: 可以指定上下文, 如果在 Dockerfile 中配置**COPY . .** 会将 packages/wework-bot 内容全部复制到容器的**WORKSPACE**下

# git

1. `git rev-parse HEAD`: 最近的一次 commit id
2. `git merge --no-edit`: 不触发交互修改信息, 用于代码中调用
3. `git revert commitId`: 回退指定 commit, 新增一条 commit 记录, 比如想回退 HEAD 最新提交, 则`git revert HEAD`, 操作是可逆的.
4. `git reset commitId`: 回退指定 commit, 清除 commit 之后所有记录, 比如想回退 HEAD 最新提交, 则`git reset --hard HEAD^`, 操作不可逆.
5. `git pull --rebase`: pull 默认会生成一条 merge 记录, --rebase 指定不生成 merge 记录

# 其他

## pm2

由于服务部署在线上环境的 docker 中, `pm2 start`不支持容器中启动, 这就导致 Dockerfile 中逻辑执行完容器直接 Exit. 官方提供`pm2-runtime`用于 docker 场景, 运行服务命令`pm2-runtime start ecosystem.config.js`, 和 pm2 不同, pm2-runtime 不支持 restart.

## 多环境 git

由于日常都是在内网的 linux 开发机上办公(通过 vscode ssh-remote), ssh 的内容就涉及到了多环境, 包括本地与开发机连接, 内网 git 操作, github 操作, 参考这篇文章: [多环境 git 配置](https://www.zhihu.com/question/21402411)

## xml 请求体

body-parser 只支持处理 Content-Type 为 `application/x-www-form-urlencoded`, `multiple/form-data`, `application/json`的请求体; 微信客服号这种请求体是 xml 格式的 body-parser 处理不了, req.body 输出也是{}.
需要结合**body-parser-xml**库对 body-parser 做封装:

```typescript
import * as bodyParser from "body-parser";
import * as bodyParserXml from "body-parser-xml";

bodyParserXml(bodyParser);

export const XmlMiddleware = bodyParser.xml({
  xmlParseOptions: {
    explicitArray: false,
  },
});
```

## formData

在 node 中 formData 的使用和浏览器中一致, 当 formData append 的值是文件可读流时, 文件的基本属性就会丢失, MIME 变成**oct-stream**, filename 变成一串 MD5 码, 可以通过 options 中配置指定文件基础信息

```typescript
formData.append('file', <可读流>, { filename: 'dist.zip' });
```

## centos7

1. [centos7 安装最新版本的 git(不用手动编译)](https://ximouzhao.com/index.php/2022/06/17/centos7%e5%ae%89%e8%a3%85%e6%9c%80%e6%96%b0%e7%89%88%e6%9c%acgit/)
2. yum 源的目录: /etc/yum.repos.d/
3. Transaction check error: 安装包冲突 `rpm -e 冲突包名 --nodeps`

# reference

1. [Eslint error `is defined but never used` warning in NestJs for all decorators](https://stackoverflow.com/questions/73591752/eslint-error-is-defined-but-never-used-warning-in-nestjs-for-all-decorators)
2. [how to merge into branch without commit](https://stackoverflow.com/questions/53862615/how-to-merge-into-branch-without-commit)
3. [https://stackoverflow.com/questions/53962776/whats-the-difference-between-pm2-and-pm2-runtime](https://stackoverflow.com/questions/53962776/whats-the-difference-between-pm2-and-pm2-runtime)
4. [https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/](https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/)
5. [多环境 git 配置](https://www.zhihu.com/question/21402411)
