---
layout: post
title: AntDesign, ProComponent使用踩坑
date: 2022-06-09
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1654759679150_8443.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1654759679150_8443.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - ant-design
  - react
  - ProComponent
---

[ant-design 官网](https://ant.design/)
[ProComponent 官网](https://procomponents.ant.design/)

# 背景

最近有个需求迭代要修改中台系统, 该系统是使用 react + ant-design + ProComponent 搭建#的, 记录下遇到的问题

# 遇到的问题

## 1. ant-design 设置表单的`validator`一直显示`xxx is not a valid undefined`

ant-design 中表单校验默认`type`都是`string`, 报错本来想显示的是`xxx is not a valid number`之类, 如果要检验别的类型检查是否没有配置`type`, 如下所示:

```js
{
  min: 1,
  max: 10,
  transform: (value) => +value,
  message: '请输入xx',
  // type: 'number',  // 需要配置哦
}
```

## 2. ProComponent 中 form 表单项设置初始值失败

这个问题, 官方文档已经做了解释, 是我不会看文档(别骂了别骂了):

> 你不能用控件的 value 或 defaultValue 等属性来设置表单域的值，默认值可以用 Form 里的 initialValues 来设置。注意 initialValues 不能被 setState 动态更新，你需要用 setFieldsValue 来更新。 你不应该用 setState，可以使用 form.setFieldsValue 来动态改变表单值。

`initialValue`如果一开始就在`columns`中定义好是会生效的, 但是我的需求场景是通过请求动态获取`initialValue`, form 中内部托管了数据处理, 所以下面这样写是不会生效的:

```js
useEffect(() => {
    const options = your code;
    const columns$: any[] = [...columns];
    columns$.splice(2, 1, {
      title: 'xxx',
      dataIndex: 'xxx',
      valueType: 'select',
      valueEnum: your code,
      initialValue: options,
    });
    setColumns(columns$);
  }, [xxx]);
```

需要这样:

```js
// ts
useEffect(() => {
    const options = your code;
    const columns$: any[] = [...columns];
    columns$.splice(2, 1, {
      title: 'xxx',
      dataIndex: 'xxx',
      valueType: 'select',
      valueEnum: your code,
    });
    form.setFieldsValue({ templateTitle: options });
    setColumns(columns$);
  }, [xxx]);

// tsx
const [form] = useForm();
return (<ProTable form={{ form }} />)
```

## 3. ProTable params 变化不触发 request

这个问题我定位了半天, 一直以为是 params 变更比较出了问题, 事实上查阅 issue[🐛[BUG] params 更新无法触发 request](https://github.com/ant-design/pro-table/issues/174)证明 params 确实也是浅比较, 但是问题并不出在这..
查阅 issue[🐛[BUG]pro-table 中如果 request 中有 await，当 params 变更后不会再次触发 request](https://github.com/ant-design/pro-components/issues/2750)发现, **ProTable 的 request 中如果上一个请求还没返回数据, 下一个请求时会被拦截的并不会触发**, 然后来看下代码中的逻辑:

```tsx
<ProTable<TableListItem>
  {...your other config}
  params={{ templateList, systemId, status }}
  request={(params, sorter, filter) => {
    // if (templateList?.length) {
      return queryDocuments({...params});
    // }
    return {
      data: [],
      success: true,
      total: 0,
    };
  }}
  form={{ form }}
/>
```

其中 `systemId`和`templateList`变化都会触发`request`, 并且更新时间差不多,这就导致`systemId`触发的 request 还没返回数据, `templateList`触发的 request 被截断了, 甚至不是阻塞..issue 中大家都觉得这是不合理的, 是个 bug, 但是作者觉得没啥问题..(行 ⑧)

所以 这里需要加个`if`判断只触发`templateList`更新时的请求

## 在 typeorm 中使用 in

需求场景还需要支持多选搜索, 所以原先 sql 中的`=`需要变更为`in`, 顺便记录下 typeorm 下的 sql 要怎么写

### =

```ts
query.andWhere('xxx.templateId = :templateId', { templateId });
// 或
query.andWhere(`xxx.templateId = ${templateId}`);
```

### in

```ts
query.andWhere('xxx.templateTitle in (:templateTitle)', { templateTitle }); // templateTitle是数组
```

# reference

1. [🐛[BUG]pro-table 中如果 request 中有 await，当 params 变更后不会再次触发 request](https://github.com/ant-design/pro-components/issues/2750)
2. [🐛[BUG] params 更新无法触发 request](https://github.com/ant-design/pro-table/issues/174)
3. [ProComponent](https://procomponents.ant.design/components/table?current=1&pageSize=5#protable)
