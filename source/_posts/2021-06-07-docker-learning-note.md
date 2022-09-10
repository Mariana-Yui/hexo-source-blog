---
layout: post
title: docker学习记录
date: 2021-06-07
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1621590426989_7568.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1621590426989_7568.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - docker
---

> 如果不是真的菜 🐔, 谁又愿意当韭菜呢

## docker 的基本概念

### docker 和 k8

### 什么是镜像 image?

> 操作系统分为内核和用户空间。对于 Linux 而言，内核启动后，会挂载 root 文件系统为其提供用户空间支持。而 Docker 镜像（Image），就相当于是一个 root 文件系统。
> Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。 镜像不包含任何动态数据，其内容在构建之后也不会被改变。

### 什么是容器 container?

> 镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的 类 和 实例 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等 。

### 容器和虚拟机的区别

- 容器是 APP 层面的隔离
- 虚拟化是物理资源层面的隔离

看两张图帮助理解

<details>
<summary>点我!点我!</summary>
<p>
<b>容器</b>

![容器架构](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1623078548626_3123.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

<b>虚拟化</b>

![虚拟化架构](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1623078579393_5295.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

</p>
</details>

### vagrant

vagrant 是用于构建及配置虚拟开发环境的软件, 需要借助 virtualbox/vm 才能使用, 否则使用 vagrant 报错
virtualbox 需要事先安装, vagrant 的安装可以通过官网下载 pkg 文件进行安装

#### vagrant 常用命令

- `vagrant init 系统版本`: 初始化需要安装的系统的配置文件, 会生成一个文件名为 vagrantfile. 可以通过在[官网](https://app.vagrantup.com/boxes/search)上直接查询 vagrantfile 配置
- `vagrant up`: 下载 vagrantfile 中配置的系统, 结束后启动系统, 如果已经下载过了系统则直接启动
- `vagrant ssh`: 本地连接登录虚拟机
- `vagrant halt`: 关闭系统
- `vagrant status`: 查看当前虚拟机状态

## 安装 docker

博主是通过 vagrant 安装 centos 的方式在 linux 上安装 docker, 为了和本机系统隔离. 参考[centos 安装 docker](https://docs.docker.com/engine/install/centos/)
window 和 mac 都可以在官网搜索相应安装包下载

**tips** centos 下 docker 命令都需要 sudo 执行, 可以通过以下方式避免输入 sudo, **记得重新登入 shell**

```
sudo groupadd docker
sudo gpasswd -a vagrant docker
sudo systemctl restart docker
```

### docker 镜像

docker 官方自带的镜像非常慢, 可以使用阿里云或者中科大等提供的镜像, mac 可以直接通过图像化管理工具设置镜像源, `perforence -> Docker Engine`, 把下面的配置添加到 json 中

```json
"registry-mirrors": [
  "https://n3znd2n8.mirror.aliyuncs.com"
],
```

#### centos7 更换镜像源

1. 写入镜像源`sudo vi /etc/docker/daemon.json`

```json
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

2. 重新启动 docker

```sh
sudo systemctl daemon-reload
sudo systemctl restart docker
sudo systemctl enable docker
```

<details>
<summary>mac配置镜像</summary>
<p>

![配置镜像](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1623151731192_4260.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

</p>
</details>

## docker-machine

`docker-machine`也可以像`vagrant`一样创建并管理多台虚机

### 安装

#### MacOS 安装

```sh
$ base=https://github.com/docker/machine/releases/download/v0.16.0 &&
  curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/usr/local/bin/docker-machine &&
  chmod +x /usr/local/bin/docker-machine
```

#### 检查安装成功

```
$ docker-machine version
docker-machine version 0.16.0, build 702c267f
```

### 常用命令

- `docker-machine create [name]`: 创建一台安装好 docker 的 linux 虚机, `[name]`为自定义虚机名称
- `docker-machine ls`: 查看创建的虚机列表
- `docker-machine stop [name]`: 关闭\[name\]虚机
- `docker-machine start [name]`: 开启\[name\]虚机
- `docker-machine ssh [name]`: 登录\[name\]虚机
- `docker-machine rm [name]`: 删除\[name\]虚机

**以下内容未额外说明都是在 vagrant 创建的 centos 虚机上进行演示**

## image & container

上面说过了 image 是一个独立的文件系统, container 是不同 image 在这个文件系统上的叠加生成的实例

### Hub

docker 也提供了像 github 一样的托管平台, 存放常用的一系列软件的 image 镜像. [点击访问](https://hub.docker.com/)
可以通过`docker pull [IMAGE NAME]`的方式下载 image

### 亲手写一个 image demo

1. 写一个简单的 C 语言文件`hello.c`

```c
#include <stdio.h>
int main() {
  printf("hello world");
}
```

2. 编译成二进制文件`hello`

```sh
# 如果安装了跳过这一步
$ yum install gcc
$ gcc -static hello.c -o hello
```

3. 编写`Dockerfile`文件

```Dockerfile
# 表示没有基于任何镜像
FROM scratch
# 将宿主机(这里是虚机)当前路径的hello文件添加到image文件系统的根路径
ADD hello /
# 运行image中的hello文件(必须是double quote)
CMD ["/hello"]
```

4. 生成 image

```sh
# denis/hello为image名称, .为在当前路径查找hello
$ docker build -t denis/hello .
# 查看当前所有的image
$ docker image ls
REPOSITORY          TAG       IMAGE ID       CREATED         SIZE
denis/hello-world   latest    70714e52769a   9 seconds ago   861kB
```

5. 运行 image

```sh
$ docker run denis/hello
hello world
# 查看image中包含的操作
$ docker history [IMAGE ID]
IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
70714e52769a   49 seconds ago   /bin/sh -c #(nop)  CMD ["/hello"]               0B
00ae1da5637b   3 minutes ago    /bin/sh -c #(nop) ADD file:f0bbccfa3092098e8…   861kB
```

对于`docker run`的 container 运行后会直接退出, 如果想进行交互可以加上标识符`-it`, 例如`docker run -it ubuntu:14.04`, 可以通过`docker container ls`查看正在运行中的 container, `docker container ls -a`查看运行结束已经退出的 container

### 常见命令

所有命令可以通过`docker --help`查看

- `docker container ls`: 查看正在运行中的 container, 简写`docker ps`
- `docker container ls -a`: 查看已退出的 container, 简写`docker ps -a`
- `docker image ls`: 查看所有镜像, 简写`docker images`
- `docker rm [CONTAINER ID]`: 删除 container
- `docker rmi [IMAGE ID]`: 删除 image, 需要先把 image 对应的 container 都删除
- `docker rm $(docker container ls -f "status=exited" -q)`: 删除符合过滤条件的 container, `-f --filter`filter output based on conditions provided, `-q --quiet`only display container IDs

## Dockerfile

生成 image 的描述文件

### 常见指令

#### FROM

基于的镜像, `FROM scratch`没有基于的镜像, `FROM centos`基于最新发行版的 centos 镜像

#### RUN

在 docker build 构建镜像的过程中执行, 每多一个`RUN`,image 就会多一层 layer

```dockerfile
FROM centos
RUN yum install -y vim
```

#### WORKDIR

类似 linux 中的 cd, 对于不存在的目录会自动创建, 不同于 image 的 layer 都是新建的一层, workdir 创建的目录会一直存在. **使用 WORKDIR, 不要使用 RUN cd** **使用绝对路径**

```dockerfile
WORKDIR /test
WORKDIR /foo
RUN pwd
# 此时会输出 /test/foo
```

#### ADD or COPY

将上下文目录资源复制到容器中的指定位置, ADD 和 COPY 的功能差不多, 官方推荐使用 COPY. 因为 ADD 复制压缩文件时会同时将文件解压缩.
对于远程资源还是要使用 curl 或者 wget

#### ENV

定义常量, 推荐经常使用

```dockerfile
ENV NODE_VERSION 7.2.0

RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
  && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc"
```

#### CMD

和 RUN 指令类似, RUN 在 docker build 时运行, CMD 在 docker run 时运行. **为启动的容器指定默认要运行的程序**, CMD 指令会被 docker run 命令行参数中指定的指令所替换, 如果 dockerfile 中存在多条 CMD 指令时, 只有最后一条会被执行

#### ENTRYPOINT

和 CMD 类似, 但是不会被 docker run 命令行指定的指令所替换, 而且这些命令行参数会被当成参数传给 ENTRYPOINT, 如果运行 docker run 时使用了`--entrypoint`, 将覆盖 CMD 指令, 如果 dockerfile 中存在多条 ENTRYPOINT 指令, 只有最后一条会被执行

更多的指令参考[官网 dockerfile](https://docs.docker.com/engine/reference/builder/)

## 发布 image

1. 首先要在 docker hub 上注册账号, 注册成功后记住自己的用户名
2. `docker login`命令行中登录
3. `docker tag [IMAGE NAME] 你的用户名/image名称`: 给当前需要上传的镜像打上标签, 这里必须用自己的用户名否则会提示 permission denied
4. `docker images`就可以看到名为`你的用户名/image名称`的镜像了
5. `docker push 你的用户名/image名称`上传到 docker hub

## 参考资料

[可能是把 docker 奖的最清楚的一篇文章了](https://www.jianshu.com/p/7636ab2a29d6)
[30 分钟快速入门 Docker 教程](https://juejin.cn/post/6844903815729119245#comment)
[通俗理解 Docker 是什么](https://www.zhihu.com/question/28300645)
[Day6：把 Docker Image Push 到 Docker Hub](https://ithelp.ithome.com.tw/articles/10191139)
