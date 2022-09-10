---
layout: post
title: canvas实现刮刮卡
date: 2021-06-30
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1624894343976_5977.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1624894343976_5977.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - canvas
---

# 背景

看了一段时间 canvas, 重拾当初学前端的那种热情, 👱 就是喜欢整点花里胡哨的。正好在掘金上看到不少 canvas 好文章，结合理论进行实战， 记录一下过程中的知识点。

# 1 需求分析

设计可配置项, 这里分为产品同学看得懂的配置项和技术上的配置项
所有配置项包括:

```typescript
interface ScratchCardConfig {
  canvas: HTMLCanvasElement; // canvas元素
  showAllPercent?: number; // 直接全部刮开百分比
  coverImg?: string; // 图片图层
  coverColor?: string; // 纯色图层
  doneCallback?: () => void; // 全部刮开回调函数
  radius?: number; //擦除半径
  pixelRatio: number; // 屏幕倍率, 适应retina屏
  fadeOut?: number; // 全部刮开淡出效果时间(ms)
}
```

# 2 项目结构

因为 canvas 有很多方法和属性,js 无法正确进行代码提示, 所以使用 ts 进行开发

```
|- index.html
|- award.jpg  // 底部结果图片
|- index.js
|- index.ts // 实际编写的逻辑
|- scratch-2x.png // 上层遮罩的图片
```

# 3 具体实现

## 页面结构

前置知识: canva 设置 width/height 改变的是绘图区域的宽高, 设置 style.width/height 改变的是元素的宽高, 绘图区域没有发生改变, 绘图区域会根据元素宽高等比例缩放.
而对于 retina 屏幕(这里指定 2 倍物理像素, 实际项目可以使用 window.devicePixelRatio 判断), 一个逻辑像素 = 2 物理像素, 相当于图片放大了一倍, 所以这里指定 canvas 属性 width/height 为 750/280, style.width/height 为 350/140. 相当于图片缩小一倍. 这样图片就变清晰了.
**不要问为什么不直接把 canvas style width/height 直接设为 750/280, 这样图片就无法绘制完全**
award.jpg 也是一样, 缩小一倍进行显示

HTML 代码:

```html
<div class="card">
  <canvas id="canvas" width="750" height="280"></canvas>
</div>
```

CSS 代码:

```css
.card {
  width: 375px;
  height: 140px;
  background: url('./award.jpg');
  background-size: 375px 140px;
}
.card canvas {
  width: 375px;
  height: 140px;
}
```

## 初始化

### 构造函数

设置选填的配置默认值, 直接全部刮开的百分比, 刮开时绘制的圆半径, 纯色遮罩图层的颜色, 全部刮开的淡出时间

```ts
class ScratchCard {
  config: ScratchCardConfig;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  offsetX: number;
  offsetY: number;
  done: boolean;
  isDown: boolean;
  constructor(config: ScratchCardConfig) {
    this.config = {
      showAllPercent: 45,
      radius: 20,
      coverColor: '#999',
      fadeOut: 2000,
      ...config
    };
  }
}
```

### 遮罩图层

这里逻辑很简单, 没有图片图层时设置纯色图层, 需要介绍的是`globalCompositeOperation`属性, 用于设置两个绘图路径交叉时的渲染方式, `destination-out`指在源图像外显示目标图像, 源图像透明, 这里 coverImg 是目标图像, 刮开时绘制的圆是源图像, 这样源图像区域就会展示最底部的结果图片

```ts
  class ScratchCard {
    ...
    constructor(config: ScratchCardConfig) {
      ...
      this._init();
    }
    private _init() {
      this.canvas = this.config.canvas;
      this.ctx = this.canvas.getContext('2d');
      this.offsetX = this.canvas.offsetLeft;
      this.offsetY = this.canvas.offsetTop;
      this._addEvent();
      if (this.config.coverImg) {
        // 设置的是图片图层
        const coverImg = new Image();
        coverImg.src = this.config.coverImg;
        coverImg.onload = () => {
          this.ctx.drawImage(coverImg, 0, 0);
          this.ctx.globalCompositeOperation = 'destination-out';
        };
      } else {
        // 纯色图层
        this.ctx.fillStyle = this.config.coverColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalCompositeOperation = 'destination-out';
      }
  }
  }
```

## 绑定事件

刮奖效果其实就是通过绑定`touchstart`, `touchmove`, `touchend`事件来绘制源图像, 这里把 mouse 事件也加上
这里通过监听`touchmove`来绘制图像, `touchstart`和`touchend`来控制开始停止
虽然默认 addEventListener 第三个参数的属性 passive 用于控制是否禁用 preventDefault, 默认是 false, 但是还是要显式指定{passive: false}, 因为`touchstart`和`touchend`passive 默认值还是 true
isDown 表示是否触摸屏幕

```ts
class ScratchCard {
  ...
  private _addEvent() {
    this.canvas.addEventListener('touchstart', this._eventDown.bind(this), { passive: false });
    this.canvas.addEventListener('touchend', this._eventUp.bind(this), { passive: false });
    this.canvas.addEventListener('touchmove', this._scratch.bind(this), { passive: false });
    this.canvas.addEventListener('mousedown', this._eventDown.bind(this), { passive: false });
    this.canvas.addEventListener('mouseup', this._eventUp.bind(this), { passive: false });
    this.canvas.addEventListener('mousemove', this._scratch.bind(this), { passive: false });
  }
  private _eventDown(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    this.isDown = true;
  }
  private _eventUp(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    this.isDown = false;
  }
}
```

## 擦除效果

逻辑大致如下:

1. 判断刮刮卡还没挂完 this.done 为 false, 且处于按下状态 this.isDown 为 true
2. 如果存在多个触点, 则使用最后一个触点, 使用 e.changedTouches 获取最后一个触点
3. 获取当前点击的坐标 x, y, 这里 ev.clientX + document.body.scrollLeft 相当于 ev.pageX
4. 绘图

需要注意的是这里不能用解构赋值`const { beginPath, arc, fill } = this.ctx;`,会使绘图方法的上下文失效, 可以用 `with(this.ctx)`, 但不推荐

```typescript
  _scratch(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    let ev: MouseEvent | Touch = e as MouseEvent;
    if (!this.done && this.isDown) {
      if (e instanceof TouchEvent && e.changedTouches) {
        ev = e.changedTouches[e.changedTouches.length - 1];
      }
      // (ev.clientX + document.body.scrollLeft) || ev.pageX
      const x = (ev.clientX + document.body.scrollLeft || ev.pageX) - this.offsetX || 0;
      const y = (ev.clientY + document.body.scrollTop || ev.pageY) - this.offsetY || 0;
      // const { beginPath, arc, fill } = this.ctx;
      this.ctx.beginPath();
      this.ctx.arc(
        x * this.config.pixelRatio,
        y * this.config.pixelRatio,
        this.config.radius * this.config.pixelRatio,
        0,
        Math.PI * 2
      );
      this.ctx.fill();
    }
  }
```

## 全部刮开

这里就是判断刮开的区域百分比是否超过初始化时设置的阈值, 如果有淡出效果则设置 canvas 的 style.transition, 没有就直接清除画布.
这里判断刮开区域所占百分比的方法`_getFilledPercentage()`具体逻辑如下:

1. 首先要知道 imgData.data 获得的是一个 Uint8Array 点阵数组, 其中 4 个字节表示一个像素, 每个字节分别代表 rgba
2. 所以这里需要从 i=3 开始累加 4 计算 alpha=0(也可以不是 0,通过设置能够表示透明的阈值)的个数, 最后除以像素数就能够得到刮开区域的百分比

```typescript
_scratch(e: MouseEvent | TouchEvent) {
    ...
      // 判断刮百分比
      if (this._getFilledPercentage() > this.config.showAllPercent) {
        this._scratchAll();
      }
    }
  }
_scratchAll() {
    this.done = true;
    if (this.config.fadeOut > 0) {
      this.canvas.style.transition = `all ${this.config.fadeOut}ms linear`;
      this.canvas.style.opacity = '0';
      setTimeout(() => {
        this._clear();
      }, this.config.fadeOut);
    } else {
      this._clear();
    }
    // 执行回调
    this.config?.doneCallback();
  }
  _clear() {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // 计算刮开区域百分比, 即计算画布透明区域百分比
  _getFilledPercentage() {
    const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    // 点阵数组, 4个字节为一个像素, 每个字节分别代表rgba
    const pixels = imgData.data;
    let threshold = 0; // 这里可以设置阈值表示代表透明的分界线
    let transparentPixelCount = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] <= threshold) {
        transparentPixelCount++;
      }
    }
    return Number(((transparentPixelCount / (pixels.length / 4)) * 100).toFixed(2));
  }
```

由于 ImageData 的跨域问题, 不要在本地直接打开, 可以启动一个静态服务器以 http 形式打开
完整代码已上传到 github[查看源码](https://github.com/Mariana-Yui/scratchcard)

# 参考资料

- [一张刮刮卡竟包含这么多前端知识点](https://juejin.cn/post/6844903952157245447)
- [一张图搞定原型链](https://segmentfault.com/a/1190000021232132)
- [解决 canvas 在高清屏中绘制模糊的问题](https://cloud.tencent.com/developer/article/1501018)
- [js 中的 scrollleft、style.left、clientLeft、offsetLeft](https://www.itread01.com/content/1550405736.html)
- [计算 canvas 透明区域百分比](https://stackoverflow.com/questions/58820279/how-to-calculate-transparent-area-of-canvas-in-percentage)
- [鼠标点击位置坐标](https://segmentfault.com/a/1190000002405897)
