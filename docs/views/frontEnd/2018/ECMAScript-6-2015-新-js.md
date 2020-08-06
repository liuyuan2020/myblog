---
title: ECMAScript 6|2015|新 js
date: 2018-12-05 09:33:01
categories:
  - 前端学习记录
tags:
  - js
---

## 变量的声明方式

1.**const**：声明常量的时候使用

    注意：
    ①使用 const 生命的变量不可修改。
    ②const 声明变量时把大括号当做作用域，不能重复声明，没有声明提升。

2.**let**：声明变量。

    注意：
    let声明变量时也把大括号当做作用域，不能重复声明，也没有声明提升。

## 解构赋值

### 数组

```js
const arr = [1, 2, 3];
const [num1, num2, num3] = arr;
console.log(num1, num2, num3);
```

### 字符串

```js
const str = 'hello';
const first = str.charAt(0);
console.log(first);
const [first, second] = str;
console.log(first, second);
```

### 对象

```js
const userInfo = {
  username: 'erha',
  userage: 2,
  color: 'grey'
};
// 变量名要和对象的属性名相同，顺序无所谓
const { userage, username } = userInfo;
console.log(userage, username);
// 对象解构赋值的另一个用法“函数参数的解构赋值”
function fun({ username }) {
  console.log(username);
}
fun(userInfo);
```

## 箭头函数

**写法**

    (参数) => {语句}
    例如：
    const add = (a,b) => {
      const res = a + b
      return res
    }
    const result = add(1,2)
    console.log(result)

1.**当参数为一个的时候可以省略小括号，当函数内部只有返回值的时候，可以省略大括号和 return 例如：**

2.**箭头函数没有大括号的时候，箭头后面就是返回值。**

3.**普通函数内的 this 指向，在调用函数的时候去找；而箭头函数内的 this 指向，声明函数的时候就定义好了。**

4.**对象下的方法要写成普通函数的形式,不然 this 的指向是 undefined，例如**

    const obj = {
      username:'zzz',
      sayName: () => {
        console.log(this.username)
      }
    }
    obj.sayName()

```js
const fun = a => 10;
const b = fun(100);
console.log(b);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const newArr = arr.filter(ele => ele > 5);
```

5.**如果变量名和属性名相同对象可以简写成以下方式：**

```js
const obj = {
  username,
  userage
};
console.log(obj);
```

## 字符串模板

```js
const username = 'ly';
// 在倒引号里面的内容会被解析为字符串，${}里面的内容是变量，也会被解析为字符串
console.log(`my name is ${username}`);
```

## 函数参数的默认值

```js
function highLight(color = 'red') {
  alert(color);
}
// 没有传参的话，调用函数会使用函数的默认参数
highLight('#ccc');
```

## 函数的剩余参数 rest

**可以用 rest 参数代替 arguments 变量，而且 rest 参数就是一个真正的数组，数组特有的方法都可以使用。**

```js
function restFunc(a, ...rest) {
  console.log(a);
  console.log(rest);
}
restFunc(1); // 控制台输出 1  []
restFunc(1, 2, 3, 4); // 控制台输出 1 [2,3,4]
```

## 扩展运算符(es7 8) ...可以应用在数组和对象上

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr1 = arr1.concat(arr2);
const newArr2 = [...arr1, ...arr2];
console.log(newArr2); // 控制台输出： [1,2,3,4,5,6]
```

## 合并对象

```js
const obj1 = {
  username: 'yuki'
};
const onj2 = {
  userage: 10,
  username: 'yuki1'
};
const newObj1 = Object.assign({}, obj1, obj2);
const newObj2 = { ...obj1, ...obj2 };
console.log(newObj1);
console.log(newObj2); // 控制台输出: {userage:10,username:'yuki1'}
```

## 数组和对象的拷贝 (遵循不变性)

```js
const arr = [1, 2, 3];
// const arr1 = arr.slice(0);
const arr1 = [...arr]; // arr1 和 arr数组内容完全一样，对arr1的修改不会影响arr
arr1.push(4);
console.log(arr);
console.log(arr1);
```

## class 模块

```js
class CreateCat {
  constructor(catName, catAge) {
    this.catName = catName;
    this.catAge = catAge;
  }
  sing() {
    console.log('miaomiaomiao');
  }
}
const xiaohua = new CreateCat('xiaohua', 2);
console.log(xiaohua);
console.log(CreateCat.prototype);
```

1.**constructor 相当于之前的构造函数，在这里面叫做构造器。**

2.**es6 class 内只能定义方法而且方法之间不能加逗号。**

3.**使用 new + class 名 创建实例化类，调用类的时候传递的参数会给到 constructor 方法。**

4.**constructor 方法在 new 的时候会默认执行。**

5.**除了 constructor 方法之外的方法相当于类的公有方法，就相当于原型内的方法。**

6.**类模块内自动都是严格模式。**

## class 继承

**构造函数的继承**

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function() {
  console.log(this.name);
};
const cat = new Animal('猫');
console.log(cat);
// 如果 Cat 构造函数要继承 cat的所有的属性和方法
function Cat() {}
Cat.prototype = cat;
```

**class 类的继承**

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}
const cat = new Animal('猫');
console.log(cat);

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  sing() {
    console.log('miao');
  }
}
```

**super(name)**:用 Animal 创建实例化对象，但是将 this 指向变成 Cat 的实例化类，给 Cat 的实例化类里面添加了 Animal 内的属性和方法。
