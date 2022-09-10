---
layout: post
title: koa-static 源码分析
date: 2022-08-20
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1661154509365_1344.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1661154509365_1344.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - koa
---

# koa-static

`koa-static`是 koa 的静态文件服务中间件

# Example

```js
const koaStatic = require('koa-static');

app.use(koaStatic({
	path.resolve(__dirname, '../static');
}, {}));

app.listen(8888);
```

比如你的`static`文件目录结构为

```
├── html
│   └── upfile.html
└── uploads
│   └── aa.js
```

那就可以通过浏览器访问`http://localhost:8888/html/upfile.html`访问静态文件了

# options

截取自`koa-static`github readme 的常用 options

- `maxage` Browser cache max-age in milliseconds. defaults to 0
- `hidden` Allow transfer of hidden files. defaults to false
- `index` Default file name, defaults to 'index.html'
- `defer` If true, serves after `return next()`, allowing any downstream middleware to respond first.
- `gzip` Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to true.
- [setHeaders] Function to set custom headers on response.
- `extensions` Try to match extensions from passed array to search for file when no extension is sufficed in URL. First found is served. (defaults to `false`)

# 源码分析

`koa-static`依赖`koa-send`包, 大部分逻辑都是`koa-send`处理的, `koa-static`只对`options.defer`做了处理.

- defer 顾名思义, 如果为`true`, 则先执行`koa-send`, 找到文件直接返回, 否则`await next()`; `false`则相反, 先`await next()`, `ctx.body`如果还是`null`则执行`koa-send`

`koa-send`核心逻辑通过`path.resolvePath(ctx.path)`和初始化时的 root 路径拼接得到文件在服务端的真实文件路径, 最后以 readable stream 的形式返回

```js
ctx.body = fs.createReadStream(path);
```

koa 中同样对 stream 类型的数据做了处理, 通过`pipe`管道返回给浏览器数据

```js
// application.js
// responses
if (Buffer.isBuffer(body)) return res.end(body);
if ('string' === typeof body) return res.end(body);
if (body instanceof Stream) return body.pipe(res);
```

`koa-static`也通过`fs.stat`获取文件的具体信息设置响应头

```js
ctx.set('Content-Length', stats.size)

if (!ctx.response.get('Last-Modified')) ctx.set('Last-Modified', stats.mtime.toUTCString())
}

if (!ctx.type) ctx.type = type(path, encodingExt)

```

对 option.setHeader 的处理

```js
if (setHeaders) setHeaders(ctx.res, path, stats);
```

对 option.hidden 的处理, 这里 option.hidden 为 true 以及文件名以`.`开头都是会隐藏的, `isHidden`函数判断文件名是否为`.xxx`

```js
// hidden file support, ignore
if (!hidden && isHidden(root, path)) return;
```

对 option.extensions 的处理, 设置了 extensions 数组则允许浏览器 url 不带上后缀

```js
if (extensions && !/\./.exec(basename(path))) {
  const list = [].concat(extensions);

  for (let i = 0; i < list.length; i++) {
    let ext = list[i];

    if (typeof ext !== 'string') {
      throw new TypeError('option extensions must be array of strings or false');
    }

    if (!/^\./.exec(ext)) ext = `.${ext}`;

    if (await exists(`${path}${ext}`)) {
      path = `${path}${ext}`;

      break;
    }
  }
}
```
