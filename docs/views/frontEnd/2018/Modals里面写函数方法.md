---
layout: 'n'
title: Modals里面写函数方法
date: 2019-08-22 14:38:20
tags:
---

## 问题描述

最近开发过程中遇到了一个小bug，涉及到筛选条件和表格内容，初始化页面的时候需要展示表头列，
所以要请求筛选条件和表头的接口，根据筛选条件查询到结果之后会把表格内容
存到Modals里面，所以会造成点击菜单的另一个页面的时候，新页面的表格里表头一样的部分是有内容的。

## 解决办法

需要在Modals的reducers里面写一个方法来清空表格内容:
```js
 // 清空跳转页面带的表格内容
cleanTableData(state)
{
  return {
     ...state,
     traceData: {
       total: 0,
       tableData: [],
     },
  };
}
```
之后在页面初始化的时候调用这个方法就行:
```js
// 清空由上个页面带的table内容的值
dispatch({
   type: 'ipTrace/cleanTableData',
});
```
## 总结

以后如果想对state值进行操作的话可以在Modals里写操作方法和函数，之后像这样用dispatch调用即可。