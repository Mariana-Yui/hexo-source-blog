---
layout: post
title: webpack中path/publicPath/contentBase傻傻分不清楚
date: 2021-06-25
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1624588218393_9494.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1624588218393_9494.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - webpack
---

# path vs. publicPath vs. contentBase

## output.path

绝对路径, 代表打包在本地磁盘上的物理位置.
比如:

```js
output: {
  filename: '[name].js',
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/dev/'
}
```

这个配置项在生产环境下是必须的, 因为你总要指定打包生成的最终路径. 但是在开发模式下不是必须的, 因为`webpackDevServer`打包出来的文件都在内存中而没有打包到磁盘中.
`path`属性容易理解, 经常容易弄混的是`publicPath`和`contentBase`属性

## output.publicPath

打包出来的资源的 URL 前缀(这里打包在生产模式和开发模式都很重要, 区别在于前者打包在硬盘, 后者打包在内存), 即在浏览器中访问的路径前缀,可以填写为相对路径和绝对路径:

- 相对路径会被解析为相对 HTML 的路径
- 绝对路径, 比如 CDN 路径

事实上在实际开发中会通过当前的环境设置`publicPath`为 CDN 路径还是普通绝对路径, 这个配置项会被加入每一个 runtime 或者 loader 产生的 URL 中, 所以这个配置项最好是以 `/` 结尾
![示例图](https://camo.githubusercontent.com/2c9930b2b20dd0576ffd37c83f893f751833feefdffceb00c8f446c2ac306084/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a614f4d355a4638616c574c723442433043665a6530772e706e67)

## devServer.publicPath

开启`webpackDevServer`时浏览器可以通过`devServer.publicPath`中设置的路径来访问**bundled 被打包**的文件, 通过访问`http://localhost:8080/webpack-dev-server`可以得到 devServer 启动后的打包资源访问路径, 点击资源可以看到打包资源的访问路径为`http://localhost:8080${publicPath}main.js`, 如图所示:
![](https://user-gold-cdn.xitu.io/2018/5/2/16320c647d8b1594?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
没有设置`devServer.publicPath`时, 默认值为`output.publicPath`, 和`output.publicPath`非常相似, 都是为浏览器指定访问路径的前缀, 一般来说开发环境下`devServer.publicPath`都需要和`output.publicPath`保持一致.举个反 🌰

1.  output.publicPath 设置了`/mb/v5/`
2.  devServer.publicPath 设置了`/mb/v4`
3.  打包出来 js 文件为`/mb/v5/js/vendor~12345678.js`
4.  实际上通过`http://localhost:8080/webpack-dev-server`查询访问的路径实际是`/mb/v4/js/vendor~12345678.js`
5.  404 报错

总结来说, output.publicPath 指定路径(仅仅是对打包路径字符串进行修改), devServer.publicPath 则是对该路径设置了一个类似 express.static 的文件系统服务器, 服务器路径和设置路径对不上自然就无法访问了

## devServer.contentBase

决定了 `webpackDevServer` 启动是服务器**静态资源**的根目录, 默认是项目根目录
这里的静态资源指图片, 字体等资源, 而不是指 bundled 被打包的资源, 在有静态资源的时候必填, `contentBase`不会影响`path`和`publicPath`, 他唯一作用是指定服务器静态资源根目录来引用静态文件.
`devServer.contentBase`和`devServer.publicPath`的关系: `contentBase`是服务于静态资源文件的路径, `publicPath`是服务于打包出来的文件访问的路径, 两者互不影响。

## htmlWebpackPlugin

`htmlWebpackPlugin`用于向 html 中插入打包好的 js 文件, 而这个路径是根据`output.publicPath`决定的.官网文档中有这么一句话:

> If you've set a publicPath in your webpack config this will be reflected correctly in this assets hash.
> It is recommended that `devServer.publicPath` is the same as `output.publicPath`.

所以就像他说的, 把`output.publicPath`和`devServer.publicPath`设置成一样吧。

# 参考资料

- [Webpack 中 path/publicPath/contenBase 的关系](https://github.com/fi3ework/blog/issues/39)
- [Webpack 中 publicPath 详解](https://juejin.cn/post/6844903601060446221)
