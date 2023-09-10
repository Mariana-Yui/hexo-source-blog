---
layout: post
title: 《JavaScript设计模式与开发实践》读书笔记
date: 2023-09-10 18:16:19
update: 2023-09-11 02:06:48
author: Mariana
banner_img: /imgs/banner/md/2023-09-10-javascript-design-mode-and-practice-record.jpeg
index_img: /imgs/banner/md/2023-09-10-javascript-design-mode-and-practice-record.jpeg
tags:
  - javascript
  - 设计模式
categories:
  - javascript
---

> 之前一直对设计模式方面的知识没有系统的学习, 私以为对常见设计模式和编程范型的掌握对提升架构思维和代码重构能力是很有帮助的. 本文为阅读《JavaScript 设计模式与开发实践》过程中的随笔, 包括 JavaScript 遗漏的基础知识的完善以及常见设计模式记录.

# 第一部分

**JavaScript 部分基础知识难点**

### 工厂函数

```javascript
const objectFactory = function () {
  const obj = new Object();
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  const ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
};
```

### 原型链

底层对象层层向上查找委托给当前对象的**构造器**的原型下的对应属性/方法.
例如 C -> B -> A, 查找顺序为:

![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1694348789862_8851.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

### bind 函数

```javascript
Function.prototype.bind = function (context) {
  const self = this;
  context = [].shift.call(arguments);
  const args = [].slice.call(arguments);
  return function () {
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  };
};
```

### 引用原文

> 如果在一个大函数中有一些代码块能够独立出来，我们常常把这些代码块封装在独立的小函数里面。独立出来的小函数有助于代码复用，如果这些小函数有一个良好的命名，它们本身也起到了注释的作用。如果这些小函数不需要在程序的其他地方使用，最好是把它们用闭包封闭起来。

笔者完全认同后半句: **如果这些小函数不需要在程序的其他地方使用, 最好是把它们用闭包封闭起来** ; 前半句在大多数业务场景中其实所谓的复用更多的只是对于自身来说, 对于其他同事多半是无关痛痒的, 需要避免 **过渡封装**.

### AOP

AOP (面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来, 这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等.

```javascript
Function.prototype.before = function (beforefn) {
  const _self = this;
  return function () {
    beforefn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterfn) {
  const _self = this;
  return function () {
    const ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};

let func = function () {
  console.log(2);
};

func = func
  .before(function () {
    console.log(1);
  })
  .after(function () {
    console.log(3);
  });

func();
```

### Currying 柯里化

`currying` 又称为部分求值, 一个`currying`的函数首先会接受一些参数, 接受了这些参数之后, 该函数并不会立即求值, 而是继续返回另外一个函数, 刚才传入的参数在函数形成的闭包中被保存起来. 待到函数被真正需要求值的时候, 之前传入的所有参数都会被一次性用于求值.

```JavaScript
// 抽象的柯里化函数
var currying = function(fn) {
	var args = [];

	return function() {
		if (arguments.length === 0) {
			return fn.apply(this, args);
		} else {
			[].push.apply(args, arguments);
			return arguments.callee;
		}
	}
}

var cost = (function() {
	var money = 0;

	return function() {
		for (var i=0, l=arguments.length; i<l; i++) {
			money +=arguments[i];
		}
		return money;
	}
})();

var cost = currying(cost);

cost(100);
cost(200);
cost(300);

console.log(cost()); // 计算
```

**arguments.callee**

> The **`arguments.callee`** data property contains the currently executing function that the arguments belong to.

对于上面的例子, `arguments.callee`即柯里化后的函数 **cost()** , 所以闭包部分亦可以写成:

```javascript
cost(100)(200)(300);
```

### 鸭子类型

鸭子类型思想即只要一只动物长得像鸭子, 声音像鸭子, 那它就是 🦆. 类比到 JavaScript 中, 当我们调用对象的某个方法时, 不用关心该对象原本是否被设计成拥有这个方法, 这是动态语言的特性.
JavaScript 中的 **call()**、 **apply()** 都可以满足这样的需求.

### uncurrying

以 Array 方法为例, 通过`uncurrying`的方式, `Array.prototype.push`变成通用的**push**函数.
`uncurrying`的两种实现:

```JavaScript
// 1.
Function.prototype.uncurrying = function() {
	var self = this;
	return function() {
		var obj = Array.prototype.shift.call(arguments);
		return self.apply(obj, arguments);
	}
}

// 2.
Function.prototype.uncurrying = function() {
	var self = thisl
	return function() {
		return Function.prototype.call.apply(self, arguments);
	}
}
```

第二种不太好理解一点, 以 **push(obj, 1)** 函数为例, 2.最后可以理解成:

```JavaScript
Function.prototype.call.apply(push, [obj, 1]);
// 即
push.call(obj, 1);
```

### 惰性加载函数

用图表画出来更直观一点..
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1694368984825_2012.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

# 第二部分

**设计模式**
