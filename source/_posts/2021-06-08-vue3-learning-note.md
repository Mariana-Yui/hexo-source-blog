---
layout: post
title: vue3初体验
date: 2021-06-25
author: Mariana
banner_img: https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665050926840_5073.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1665050926840_5073.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - webpack
---

> 学啊..学不动也得学啊..
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ---- 导语

<br>

# Vue3 与 Typescript

**2021-06-08updated** 忘记啥时候写的笔记..之前存在本地, 现在 push 到博客上, 方便以后查阅~~黑历史~~ 不定期更新

## 是否还需要 babel?

答案是需要的, tsc 只负责了转义语法, 没有对 Map,Set 等新增数据结构和 react 的 jsx 语法做实现, 所以还是需要 babel(tmd 找了半天是否还需要 babel 全都答非所问)
可以参考: &emsp; [1. webpack5 搭建 Vue3+TS 项目](https://juejin.cn/post/6955430382485553166)
也可以看看该博主的&emsp; [2. webpack4 搭建 Vue 项目](https://juejin.cn/post/6844903663408775176)

## setup

`setup`中无法访问 this, `return`的属性必须都是 Ref 响应式的
`setup`函数接收两个参数`props`和`emits`, 表示外部传入的参数`props`和向外部发送的事件`emits`

## reactive

`reactive`方法构建 Proxy, 如果要对 data 中的属性做响应式要做`toRefs`或者`toRef`

```javascript
const data: Data<T> = reactive({
  count: 0,
  double: computed(() => data.count * 2),
  increase: () => {
    data.count++;
  },
});
const refData = toRefs(data);
return {
  ...refData,
};
```

## watch

参数可以是`ref`, `reactive`, `getter函数`和包含前面三个的数组
如果想要监听`reactive`中的属性需要使用`getter`的方式, 如`watch(() => data.count)`, 而不能直接使用`watch(data.count)`

## props

和 vue2 用法一样, 表示外部传入参数

## emits

`emits`用于声明需要向外部暴露的事件名, 可以是数组和对象, 对象 key 是事件名, 值可以是函数和 null, 函数必须有布尔类型返回值, **这里的函数不仅作为拦截器, 也作为 typescript 的类型定义** `setup`调用使用`context.emit`, 用法和 vue2 一样, vue3 会先执行`emits`中对应的回调再返回给父组件

```javascript
  emits: {
    'close-model': (params) => boolean | null
  },
  // emits: ['close-model'],
  setup(props, context) {
    context.emit('close-model', {
      signal: 'close'
    })
  }
```

## teleport

~~`TP是英雄联盟的一项召唤师技能`~~ 有的组件例如对话框放在`#app`内是不合适的, `teleport`可以将组件一键传送到 html 中的另外一个 DOM 结构下, 用法如下

```html
<!-- 组件内 -->
<teleport to="#model">
  <div>This is a dialog.</div>
</teleport>
<!-- teleport中内容会被渲染到id=model的DOM节点下 -->
<div id="#app"></div>
<div id="model"></div>
```

## Suspense

vue 从 react 借鉴来的异步组件, 在`<Suspense>`中包含两个`template`插槽, `default`插槽放置异步组件, 在异步组件数据未完全返回时先渲染`fallback`插槽内容, 数据完全返回后再渲染异步组件内容

```html
<Suspense>
  <template #default>
    <dog-show></dog-show>
  </template>
  <template #fallback> Loading... </template>
</Suspense>
```

## props

1. 用法和 vue2 一样
2. 在 vue2 基础上添加上对`typescript`的支持, 细化了类型声明, 如`Object as PropType<UserProps>`, `PropType<T>`为`props`的泛型, `T`即`type`
3. 记得在 vue 中引入`import { PropType } from 'vue'`

```javascript
props: {
  user: {
    type: Object as PropType<UserProps>
  }
}
```

## ref

vue2 中`ref`用于获取 DOM 节点或者组件实例, 在 vue3 中用法类似

```javascript
setup() {
  const dropdownRef = ref<null | HTMLElement>(null);
  return {
    dropdownRef
  }
}

<div ref="dropdownRef"></div>
```

## 禁用 Attribute 继承

1. 默认地, vue 会将传向一个组件的非 prop 的`attribute`自动添加到根节点的`attribute`中, 可以通过`inheritAttrs: false`来禁止这种行为
2. 如果要将上述`attribute`全部复制给组件中一个节点, 可以使用`v-bind="$attrs"`, 例如`<input v-bind="$attrs">`

## slot

```javascript
// 子组件
<slot name="default"></slot>
// 父组件
<template #default ></template>
```

# Vuex

## vue3 中的 vuex

vue3 中`vuex`通过`createStore`创建`store`, `useStore`使用`store`, 两个函数都是泛型, 都可以通过`xxStore<GlobalProps>`的方式指定`store中state`的结构

## getter

```javascript
getter: {
  // 返回值
  propertyName: (state) => {
    return state.propertyValue;
  },
  // 返回方法
  propertyName: (state) => (id) => {
    return state.propertyValue;
  }
}
```

# 项目中知识点

## 组件传参

```javascript
  <dropdown-item disabled></dropdown-item>
  // 相当于
  <dropdown-item :disabled="true" ></dropdown-item>
```

## 子元素高度 100%

高度%百分比计算是根据父元素的高度计算的, 所以如果只有父元素设置了`height: 100%`, 浏览器并不知道父元素具体 height 是多少, 但是给`html`设置`height: 100%`则是有效的, 浏览器会知道`html`的高度为浏览器可视区域的高度, 所以 css 代码应该对需要子元素的祖先元素都设置`height: 100%`

```css
/* 祖先元素 */
html,
body,
#app {
  height: 100%;
}
/* 子元素 */
.box {
  min-height: 100%;
}
```

# 遇到的问题

> Q: Already included file name ... ... only in casing.Vetur(1261)
> A: 添加`"forceConsistentCasingInFileNames": false`到`tsconfig.json`的`compilerOptions`

<br>

> Q: typescript 中全局变量声明如何配置?
> A: `tsconfig.json`的`compilerOptions`中`typeRoots`属性数组加入全局声明文件路径

<br>

> Q: vue-devtools 在 Vue3 中不显示
> A: Chrome 商店下载 beta 版 vue-devtools

<br>

> Q: F12 控制台 vue panel 不显示
> A: 更多工具 > 扩展程序 > vue-devtools 开启允许访问文件网址

<br>
