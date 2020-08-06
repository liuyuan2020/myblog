---
title: ES6新方法
date: 2019-08-21 14:29:30
tags:
---

## ES6新方法之Object.keys()遍历对象的方法

众所周知，js遍历对象有三种方法：

### for ... in
使用for..in..遍历，会将对象自身及其原型链上的所有可枚举属性全部遍历出来。
因为for..in..在执行的时候，还进行了原型链查找，当只需要遍历对象自身的时候，**性能上会收到一定影响**。
```js
let obj = {a: 1, b: 2, c: 3};
for (var i = 0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```
### Object.getOwnPropertyNames(obj)
Object.getOwnPropertyNames() 返回一个数组，该数组对元素是 obj自身拥有的枚举或不可枚举属性名称字符串。
```js
let mao = {
      a:123,
      b:456,
      c:789
  }
console.log(Object.getOwnPropertyNames(mao))// ["a","b","c"]
```
![avatar](../../public/images/innerPic/console4.jpg)

### Object.keys(obj) || Object.values(obj)
由于Object.keys仅遍历对象本身，并将所有可枚举的属性组合成一个数组返回，所以比较常用，
不仅代码量少，而且逻辑清晰。
```js
  let mao = {
      a:123,
      b:456,
      c:789
  }
  const maoName = Object.keys(mao)
  const maoValue = Object.values(mao)
  console.log(maoName,maoValue)// ["a","b","c"],["123","456","789"]
```
![avatar](../../public/images/innerPic/console3.jpg)

## ES6新方法之实现数组去重(Set和Array.from)

set是一种新的数据结构，它可以接收一个数组或者是类数组对象，自动去重其中的重复项目。

```js
const set = new Set([1,2,3,4,4])
console.log(set)  // {1,2,3,4}
```
![avatar](../../public/images/innerPic/console1.jpg)

但是这个方法返回的是一个对象，所以这回，就该轮到Array.from出场了，它的作用，就是可以把类数组对象、可迭代对象转化为数组。

```js
const set = new Set([1,2,3,4,4])
const newArr = Array.from(set)
console.log(newArr)  // [1,2,3,4]
```
![avatar](../../public/images/innerPic/console2.jpg)

