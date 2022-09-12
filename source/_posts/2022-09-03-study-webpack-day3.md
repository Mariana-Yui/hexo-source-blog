---
layout: post
title: webpack学习笔记(3)
date: 2022-09-03
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662999054267_4523.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662999054267_4523.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - webpack
---

# 学习笔记

## postcss

postcss 是通过 JavaScript 转换样式的工具, 可以帮助我们进行 css 的转换和适配, 比如添加浏览器前缀, reset css, 但是要实现这些功能需要 postcss 对应的插件, 单独使用 postcss 一般什么都干不了
所以如果要使用 postcss, 需要两步:

1. 查找对应插件, 比如 webpack 中的`post-loader`
2. 安装对应的 npm 包

这里以通过命令行终端使用 postcss 对 css 自动加浏览器前缀举例 🌰

1. `yarn add postcss postcss-cli autoprefixer -D`
   `postcss`为工具, `postcss-cli`在终端可以使用, `autoprefixer`为自动加浏览器前缀的插件(必须安装)
2. `npx postcss --use autoprefixer -o output.css ./entry.css`
   可以看到输出的`output.css`已经加上了浏览器前缀, 这里`autoprefixer`需要兼容的浏览器也是读取`browserslistrc`

```css
:-webkit-full-screen {
}
:fullscreen {
}
.content {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
```

也可以在线查看`autoprefixer`处理的结果: [https://autoprefixer.github.io/](https://autoprefixer.github.io/)

### use in webpack

在终端使用 postcss 需要安装`postcss-cli`, 同样的, 如果要在 webpack 中使用 postcss, 需要安装`postcss-loader`, `webpack.config.js`加上如下配置: 这时候就需要指定 options 了不能直接指定 loader

```js
// module.rules
{
    "test": /\.s?css$/i,
    "use": [
        "style-loader",
        "css-loader",
        {
            "loader": "postcss-loader",
            "options": {
                "postcssOptions": {
                    "plugins": [
                        "autoprefixer"
                    ]
                }
            }
        },
        "sass-loader"
    ]
}
```

可以看到重新打包后页面加上了浏览器前缀:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662195688318_7948.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

### postcss-preset-env

> [PostCSS Preset Env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) lets you convert modern CSS into something most browsers can understand

对于一些 css 写法, 比如`#12345678`,有的浏览器能够解析为 rgba, 有些浏览器无法解析导致不生效, 只用于添加浏览器前缀的`autoprefixer`就无法处理这种情况, 所以需要`postcss-preset-env`插件将其解析为大多数浏览器能够看懂的`rgba()`格式. 值得注意的是`postcss-preset-env`插件内置了`autoprefixer`, 所以使用`postcss-loader`时只需要引入`postcss-preset-env`即可.

### postcss.config.js

对于 css, sass, less, stylus 而言, rules 中 resources 匹配如果编写重复的 postcss 逻辑看起来是头大的, 这里可以创建`postcss.config.js`统一配置 options. `webpack.config.js`中`postcss-loader`就可以使用 string 了.
这里 plugins 中配置`postcss-preset-env`或`require('postcss-preset-env')`都是可以的, 除了部分插件用法`require('plugin-name')(...args)`不能传入 string 的形式

postcss.config.js:

```js
module.exports = {
  plugins: [require("postcss-preset-env")],
};
```

webpack.config.js:

```js
{
    "test": /.s?css$/i,
    "use": [
        "style-loader",
        "css-loader",
        "postcss-loader",
        "sass-loader"
    ]
}
```

可以看到浏览器前缀和 css 特殊写法都能够被正常解析了:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662198290436_5913.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

### importLoaders

如果 css 文件中`@import url(another.css)`, import 的 css 文件默认是不会被`css-loader`前执行的, 之前的 loader 只处理当前文件中的 css 样式, 所以这种情况需要在`css-loader`解析完后再返回让之前 loader 进行处理, 配置如下:

```js
{
	loader: 'css-loader',
	options: {
		importLoaders: 1,
	},
}
```

### file-loader

处理 import/require()方式引入的文件资源, 打包时放到输出的文件夹中
首先安装 loader:
`yarn add -D file-loader`
以图片资源举例, 默认没有使用`file-loader`时使用 import/require()引入资源会报错(backgrgound-image 形式是可以正常引入资源的)

```js
ERROR in ./img/girl.png 1:0
Module parse failed: Unexpected character '�' (1:0)
```

安装完后添加配置即可正常打包, webpack4 和 webpack5 下配置略有区别, 官方已经不建议在 webpack5 下使用`file_loader`,`url-loader`, 参考[解决 webpack5 打包 css 背景图片问题](https://blog.csdn.net/qq_45770253/article/details/123862085)

```js
// 带+的为webpack5下需要新增的配置
{
    "test": /.(gif|jpe?g|png)$/i,
    "use": [
        {
            "loader": "file-loader",
+            "options": {
+                "esModule": false
+            }
        }
    ],
+    "type": "javascript/auto"
}
```

默认输出文件名为 md4 的 hash 值, 可以指定输出文件名格式, 常用 placeholder:

- `[ext]`: 原文件扩展名
- `[name]`: 源文件名
- `[hash]`: 文件内容, 使用 md4 散列函数处理, 生成 128 位 hash 值(32 个 16 进制)
- `[contentHash]`: 在`file-loader`中和`[hash]`一致
- `[hash:<Length>]`: 截取 hash 长度
- `[path]`: 文件相对于 webpack 配置文件的路径

也可以在输出文件名前直接带上文件夹路径:

```js
options: {
	name: 'img/[name].[hash:6].[ext]',
	esModule: false,
}
```

可以看到打包结果符合预期:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662218739257_7112.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

### url-loader

require()/import 引入的资源不再生成单独文件, 直接打包进 bundle 中,使用`url-loader`后就不需要配置`file-loader`了(loader 还是要安装哦)
首先安装`url-loader`:
`yarn add -D url-loader`
配置和`file-loader`一直, 将 loader 改为`url-loader`, 先看下更改为`url-loader`后的打包输出内容:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662219838044_7269.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

可以看到图片资源都被打包进 bundle.js 里了, 但实际项目中这很明显是不合理的, 全部打包进 bundle 会增大 js 文件体积, 但全部使用`file-loader`生成单独文件又会徒增多个 http 请求, 所以就需要一个阈值来指定`< 阈值`打包进 bundle, `> 阈值`的单独生成文件, 配置如下, 这里以两张图片(girl.png|7.8M, grassland.png|2.5M)举例, 设置`limit`为 3M:

```js
{
    "loader": "url-loader",
    "options": {
        "name": "img/[name].[hash:6].[ext]",
        "limit": 3 * 1024 * 1024,
        "esModule": false
    }
}
```

打包结果:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662220100265_9387.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

## migrate to webpack5

webpack5 内置了资源模块类型(asset module type), 已经不再推荐使用`file-loader`, `url-loader`, 可以通过添加新的模块类型来替换这些 loader, 不需要再安装这些 loader

- `asset/resource`: 替换`file-loader`
- `asset/inline`: 替换`url-loader`
- `asset/source`: 替换`raw-loader`, 不常用
- `asset`: 根据配置的 maxSize 判断使用 resource 还是 inline

以下是上述 webpack4 配置的 webpack5 版本:

```js
{
    "test": "/.(gif|jpe?g|png)$/i",
    // asset == asset/resource + asset/inline
    "type": "asset",
    "generator": {
        "filename": "img/[name].[hash:6][ext]"
    },
    "parser": {
        "dataUrlCondition": {
            "maxSize": 3 * 1024 * 1024
        }
    }
}
```

webpack5 也提供了指定全局资源打包路径的方式, 当然, 这种方式我**不推荐**.

```diff
{
    "output": {
        "filename": "bundle.js",
        "path": path.resolve(__dirname, './build'),
+       "assetModuleFilename": "img/[name].[hash:6][ext]"
    }
}
```

这里使用**generator**和**parser**代替了原来的**options**, 需要注意的是这里的 placeholder `[ext]`为`.extname`, 而 webpack5 之前`[ext]`为`extname`, 所以这里不需要加`.`

打包结果与 webpack4 输出一致:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1662220100265_9387.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

### 别的 resource

对于字体, 音频, 视频等资源处理也和图片资源大致一样, 这里以字体举例:

```js
{
	test: /\.(ttf|eot|woff2?)$/i,
	type: 'asset/resource',
	generator: {
		filename: 'font/[name].[hash:6][ext]',
	}
}
```

# 示例代码

[https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day3](https://github.com/Mariana-Yui/fe-learn-code/tree/main/learn-webpack/day3)
