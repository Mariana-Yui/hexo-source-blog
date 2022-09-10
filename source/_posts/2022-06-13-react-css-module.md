---
layout: post
title: react脚手架中使用sass/less modules
date: 2022-06-13
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1655109871335_3549.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1655109871335_3549.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - react
  - css
---

# 背景

还是在看 react 项目代码时发现引入 css 时并不是直接`import 'xx.less'`, 而是通过`import style from 'xx.less'`的方式引入, 前者引入实际上是全局的 css 配置, 可能会全局污染别的组件, 而后者则通过 css module 的方式使 css 只作用于当前组件

# 配置 css module

配置中的`importLoaders`必须是 3

## sass

`create-react-app`react 的脚手架默认支持了 sass, 所以不需要额外安装 sass 及 sass-loader, 同时也支持了 sass in css module, 通过`npm run eject`可以看到 webpack 中对应的配置.

```js
// Adds support for CSS Modules, but using SASS
// using the extension .module.scss or .module.sass
{
  test: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
      modules: {
        mode: 'local',
        getLocalIdent: getCSSModuleLocalIdent,
      },
    },
    'sass-loader',
  ),
}
```

### importLoader

这里`importLoader`作用于`css-loader`, 必须是 3 的原因是, `sass-loader`前面还有`postcss-loader`和`css-loader`正好三个 loader

## less

脚手架默认不支持 less, 先安装 less 和 less-loader

```shell
yarn add less less-loader
```

然后配置 webpack, 如果要支持`import .. from`需要设置`module: true`, 需要注意的是,直接 import 和 import..from 是**互斥**的

```js
{
  test: /\.less$/,
  use: getStyleLoaders(
    {
      modules: true,
      importLoaders: 3,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader',
  ),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
},
```

# 使用 css modules

## sass

1. 新建`[name].module.scss`, 文件名必须带有*module*, 否则不会被识别为 css modules
2. 在 tsx 中使用

```scss
// style.scss
.hd {
  color: red;
}
```

```jsx
import style from './style.module.scss';

<h2 className={style.hd}></h2>;
```

## less

1. 随便新建`[name].less`
2. (optional)如果使用的是 typescript, 默认 typescript 无法识别`import xx from 'xx.less`, 会报错**TS2307: Cannot find module './style.less' or its corresponding type declarations.**, 需要在`src/`下新建`react-app-env.d.ts`, 把下面声明加到文件中, 错误消失

```ts
// react-app-env.d.ts
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}
```

3. 使用方法同 sass

# reference

1. [Using .less files with React](https://stackoverflow.com/questions/57749719/using-less-files-with-react)
2. [react 中 css modules-基本使用](https://juejin.cn/post/7031528538209681444)
3. [css-loader 中 importLoaders 的理解](https://zhuanlan.zhihu.com/p/94706976)
