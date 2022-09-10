---
layout: post
title: lottie 替换文字
date: 2022-05-02
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1651491825515_2203.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1651491825515_2203.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - lottie
---

# 背景

背景是有个需求要在一个任务页面在用户任务完成后展示一个 lottie 动画弹窗, 产品来配置弹窗的文案。那就需要动态修改 lottie json 文件中的文案了。

# 方案

1. 先加载 json 文件, 替换 json 中的文案, 然后再使用`loadAnimation`加载
2. 使用原始的 json 文件`loadAnimation`加载到 DOM 中后, 找到需要替换的文案所在的节点进行修改
3. 使用 lottie 官方提供的`lottie-api`库修改 lottie 的属性

这里不对哪种方案更好做评价, 只是前两种有手就行, 这里只介绍第三种

# 来, 试试看

其实`lottie`官方有提及如何更新文本数据[戳这里](https://github.com/airbnb/lottie-web/wiki/TextLayer.updateDocumentData)

```javascript
anim.renderer.elements[0].updateDocumentData({ t: 'new text', s: 20 }, 0);
```

但是笔者使用`anim.renderer.elements[0]`始终无法找到对应的那段文本, 好在官方提供了(lottie-api)[https://github.com/bodymovin/lottie-api]库省去了人工查找文本的过程

```javascript
anim.addEventListener('DOMLoaded', () => {
  const api = lottie_api.createAnimationApi(anim);
  const elements = api.getKeyPath('任务完成弹窗样式,动效,卡片,卡片,积分奖励'); // 查找对象
  elements.getElements()[0].setText('你不拿枪指着他拿枪指着我?');
});
```

这里最关键的就是`getKeyPath`这个 api, 通过图层来定位包含文本的元素, 参数就是每个图层名拼成的字符串, 这里我们定位到这个文本图层, 进行`setText`修改文案即可。
![](https://raw.githubusercontent.com/Mariana-Yui/images/master/blog-imgs/20220503-blog.png)

# 需要注意

如果涉及修改文案, 设计师在 AE 中导出 lottie 时, **不要勾选**这个选项, 这个选项会将文本转为路径即很多线条, 路径是无法正常替换文案的, 这个事先需要和设计师沟通好

![](https://img-blog.csdnimg.cn/img_convert/13d8db436966923fbcc2e98da754947c.png)

# reference

1. [Aha Lottie\|动态修改 Lottie 中的文本](https://zhuanlan.zhihu.com/p/102334701)
2. [lottie 插件\_Lottie 动效落地踩坑（第一弹）](https://blog.csdn.net/weixin_39984201/article/details/111268504)
