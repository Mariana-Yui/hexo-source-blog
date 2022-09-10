---
layout: post
title: 《HTML5 Canvas核心技术图形、动画与游戏开发》笔记
date: 2021-06-01
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1621590426989_7568.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1621590426989_7568.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - canvas
---

- Chapter1

1. 默认情况下, canvas 元素的背景色与其父元素的背景色一致.
2. 默认 canvas 大小是 300\*150, 坐标左上角(0,0), 向 x 轴正方向, y 轴负方向衍生(坐标是正的), canvas 存在两套尺寸, 一个是元素本身的大小, 一个是元素绘图区域的大小, 如果是修改 canvas 的属性 width/heigth, 则两者都发生改变,; 如果是修改 canvas 的 css 属性 width/height, 则只有元素本身大小发生改变, 绘图区域仍然为 300\*150, 而为了适应元素本身大小, 绘图区域会进行等比例的放大/缩放.
3. 可以通过`document.getElementById`获取 canvas 引用, canvas 的属性 width, height(不能加 px), 方法: `getContext`获得 canvas 的绘图环境变量, `toDataUrl(type, quatity)`和`toBlob(type, quatity)`用于生成 base64 的 dataurl 和 canvas 图像文件的 bloburl, `type`默认为`image/png`, `quatity`表示生成图片的质量, 区间为`0.0~1.0`
4. `CanvasRnderingContext2D.save()` 和 `CanvasRenderingContext2D.restore()`
5. canvas 绑定鼠标事件, `canvas.addEventListener('mousedown', callback)`, 事件返回的坐标是相对浏览器窗口, 需要转换成 canvas 内部坐标. `canvas.width/bbox.width`用于处理 canvas 尺寸和绘图尺寸不一致时的计算.

```js
function windowToCanvas(canvas, x, y) {
  const bbox = canvas.getBoundingClientRect();
  return {
    x: x - canvas.width / bbox.width,
    y: y - canvas.height / canvas.height
  };
}
```

6. canvas 是一个**不可获取焦点**的标签, 所以如果要绑定键盘事件, 绑定在 document 或 window 上
7. canvas 对象都是位图, 像`context.getImageData(canvas, 0,0)`获得的也都是位图的点阵数组数据, 不能直接给 img 使用, 需要使用`canvas.toDataURL()`或`canvas.toBlob()`
8. canvas 角度, 以及 Math 的三角函数参数都是弧度单位

- Chapter2

1. 绘制简单矩形 [在线查看](https://codepen.io/healms/pen/poeweor) `clearRect`清除指定区域内绘图内容, `strokeRect`对矩形描边, 搭配`lineWidth`边距宽度, `lineJoin`圆角等属性绘制, `strokeStyle`秒变颜色, `fillRect`填充矩形, `fillStyle`填充颜色, 三个方法参数都是`(横坐标, 纵坐标, 宽, 高)`
2. 上述方法也可以通过`rect()`+`stroke()/fill()`实现
3. 通过`context.createRadiaGradient()`,`context.createLineGradient()`创建渐变色, 可以作为颜色赋值给`fillStyle`等
4. canvas 也可以通过图案进行 stroke 描边, 这里团可以是以下三种: image 元素, canvas 元素, video 元素. 使用`context.createPattern(image, repeat)`, 绘制图片背景[在线查看](https://codepen.io/healms/pen/GRWEGmM)
5. 阴影 `shadowColor`颜色(默认#000000), `shadowOffsetX`x 轴偏移量(默认 0), `shadowOffsetY`y 轴偏移量(默认 0), `shadowBlur`高斯模糊(默认 0.0, double 值)
6. canvas 绘制的路径无论是开放还是闭合的都是可以进行 fill 填充的, 开放的路径浏览器会默认将起始和终点相连进行填充, stroke 则只会描边路径
7. `beginPath()`和`closePath`, 两者并没有什么关系, `beginPath()`用于重启一条路径, 否则一直都是最开始的一条路径, `closePath()`是闭合路径, 并不是结束路径! 参考[beginPath 的重要性](https://blog.csdn.net/jearbilove/article/details/38340141)
8. `arc`为在**当前路径**中增加一段表示圆弧或者圆形的子路径, 与`rect`总是逆时针绘制不同, `arc`可以选择绘制的方向(最后一个参数 true 顺时针, false 逆时针), 如果绘制时存在其他的子路径, 会将其他子路径的结束和`arc`的开头连接
9. `fill(fillRule)`可以选择填充规则, `nonzero(非零环绕原则)`和`evenodd(奇偶环绕原则)`, 默认填充遵循**非零环绕原则**. [fill&stroke](https://codesandbox.io/s/dreamy-faraday-tbd32) [在线查看 fill 规则](https://codesandbox.io/s/cool-lake-n3nvo)
10. 如果需要逆时针的矩形可以使用`lineTo`
11. 1px lineWidth 绘制成 2px lineWidth 问题
12. [橡皮筋案例在线演示](https://codesandbox.io/s/quizzical-liskov-iklz5) [画圆案例在线演示](https://codesandbox.io/s/vigorous-banzai-5vjwm) 鼠标拖动过程中一直做三件事 1. 恢复 mousedown 绘制表面 2. 更新 rubberband 3. 绘制起点到当前鼠标的线
13. 虚线, `setLineDash([])`设置虚线, `lineDashOffset`属性设置虚线偏移量, 蚂蚁线
14. `lineCap`线段端点如何绘制,(butt, round, squre), 默认 butt; `lineJoin`线段连接点如何绘制,(round, bevel, miter), 默认 bevel, `miterLimit`, 斜接线长度与 1/2 线宽的比值, 如果斜接线长度超过这个值, 就会以 bevel 绘制线段连接点
15. [仪表盘案例在线演示](https://codesandbox.io/s/peaceful-dawn-45rnp)
16. 贝塞尔曲线, `quadraticCurveTo(x1, y1, x2, y2)`二次贝塞尔曲线存在三个点, 起始点 D0, 终点 D2, 以及控制点 D1, 参数为 D1, D2, D0 即使当前子路径的终点, 常常是`moveTo`的那个点, `bezierCurveTo(x1, y1, x2, y2, x3, y3)`三次贝塞尔曲线, 前两个是控制点, 最后一个是终点
17. [多边形案例在线演示](https://codesandbox.io/s/sharp-cherry-do3tr)
18. [多边形可拖拽案例在线演示](https://codesandbox.io/s/unruffled-darkness-8lpb9)
    拖拽实现是通过记录当前画布所有多边形数据, 并且计算拖拽的多边形数据, 清空画布重新绘制实现, 判断当前拖拽的多边形通过遍历所有多边形并重新`beginPath`然后绘制路径, 再通过`isPointInPath()`判断当前鼠标坐标是否在路径中
19. [贝塞尔曲线可拖拽案例在线演示](https://codesandbox.io/s/zealous-chebyshev-iz0ro)
20. 将坐标系平移到给定 X,Y 坐标处`translate(x, y)`, 按照给定角度旋转坐标系`rotate(angleInRadians)`, 在 X 与 Y 方向上分别按照给定的数值缩放坐标系`scale(x, y)`, 需要注意的是这里都是对坐标系进行处理, `transform(sx, rx, ry, sx, tx, ty)`, 参数及默认值为: 水平缩放(1), 水平倾斜(0), 垂直倾斜(0), 垂直缩放(1), 水平移动(0), 垂直移动(0). 可以通过改变这些参数实现上述三个函数, 对于二维操作, 线性代数中都可以通过`x' = ax+cy+e; y' = bx+dy+f;`表示变化后的坐标 [具体参考张大神博客](https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%e7%9f%a9%e9%98%b5/)
21. `scale(-1)` 参数如果是负数则是中心对称后进行缩放
22. `transform`, `setTransform`可以实现旋转平移缩放不能实现的效果例如错切, 缺点是不太直观.
