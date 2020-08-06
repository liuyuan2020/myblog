---
title: function 函数
date: 2018-11-10 10:06:54
categories:
  - 前端学习记录
tags:
  - 前端
  - js
  - 回调函数
  - 继承
  - 构造函数
  - 对象冒充
---

## 前言

1、function(函数参数){语句块的集合} :匿名函数 比如 click 事件内的 function 或者 filter 的 function

2、function fun(){}

function 声明函数

fun 代表函数名（随意起名，普通函数首字母一定不要大写）

3、**函数的调用**:执行函数内部的语句 。函数名()

4、函数创建的时候，大括号内的语句不会执行，只有调用的时候才会执行。

5、<font color=red>函数的形参相当于在函数内部定义变量 调用的时候传的实参相当于给变量赋值 没有传相当于没赋值</font>

6、**js 作用域** 只有函数有作用域（局部） 整个页面也是一个作用域（全局）

7、**匿名函数立即执行** 封装了局部变量 a

<font color=red>声明在全局作用域下的变量越多越污染全局环境</font>

     (function () {
        var a = 10
        console.log(a)
    })()

## 函数创建

1、**函数式创建方式**

    function fun(){}

函数声明提升是将整个函数提升到当前作用域的最顶端，所以在声明之前就可以调用。

```
fun()
function fun(){
  console.log('lalala')
}
// 可以执行
```

2、**变量的方式创建**

    var fun = function(){}
    变量名即函数名

## 函数参数

    定义：
    一个函数实现功能时需要的值，可以根据不同的值实现不同的效果，这个值指的就是函数的参数。

**所有带小括号的基本上都是函数调用，小括号内写的函数参数**

    例如：
    之前学过的xxx.attr(xx,xx)和 xx.attr(xx)

**函数声明时，写在小括号内的参数称作形参**

    function add(num1,num2){
      var result = num1 + num2
      console.log(result)
    }
    // 函数调用的时候需要传实参
    add(3,4)

**函数内部有个关键字 arguments 指的是实参的集合（类数组）**

    function add(a, b) {
        var res = a + b;
        console.log(arguments.length);
        return res;
      }
      add(1, 2);

## 函数返回值

     当一个函数执行完一系列功能之后想要得到一个结果就需要使用函数的返回值

**用法**：就是在操作完毕之后使用(return 需要的结果) 这样该函数就有了返回值并且返回值是需要的结果。

**如何得到返回值**：函数的调用就是返回的结果

    function add(num1,num2){
      var result = num1 + num2
      return result
    }

**自定义函数的时候尽量函数内部不要使用函数外部的变量**

## 实例

一、**将上次的遍历数组封装到一个函数中**

```
function createLi(users,ul){
  for(var i = 0;i <users.length;i++){
    var user = users[i]
    var li = $('<li>').html(`姓名:<span>${user.name}</span>年龄:<span>${user.age}</span>`)
  }
  ul.append(li)
}
createLi(users,$('.users'))
```

二、面试题

    function method(y) {
      x += 4;
      y += 4;
      console.log(x + y);
    }
    var x = 2;
    var y = 2;
    method(9);
    console.log(x + y);

**运行结果是：19 8**

method(9)函数调用，因为 method 函数里面没有对 x 进行定义一所以用的是全局的 x 即 x = 2,y = 9 所以第一个控制台输出 18，由于函数里面 x 的值改变了，所以全局下的 x 值变为 6，第二个控制台输出的是 8

## 回调函数

**回调函数 一个函数被当做另一个函数的参数那么前面的函数就被称为回调函数(callback)**

```
function animate(ele, styleObj, callback) {
    var styleName = Object.keys(styleObj)[0];
    var targetValue = styleObj[styleName];
    var startValue = parseFloat(window.getComputedStyle(ele, null)[styleName]);
    function run() {
        if (startValue > targetValue) {
            startValue--;
        } else if (startValue < targetValue) {
            startValue++;
        }
        ele.style[styleName] = startValue + "px";
        if (startValue !== targetValue) {
            requestAnimationFrame(run);
        } else {
            if (callback) {
              callback();
            }
        }
    }
    run();
}
document.querySelector("button").onclick = function() {
    animate(document.querySelector(".box"),
          {
            width: 400
          },
          function() {
            animate(document.querySelector(".box"), {
              width: 200
            });
          }
        );
      };
```

## 递归函数

**递归函数 函数内部调用该函数**

    var a = 10
    function fun(){
        a++
        console.log(a)
        if(a < 100){
            fun()
        }
    }
    fun()

## 闭包

**一个函数里嵌套另一个函数叫做闭包**

    function a(){
        var num = 0
        function b(){
            console.log(num)
        }
        return b
    }
    var c = a()
    c()

<font color=red>内部函数的作用域永远在外部函数内，外层函数定义的变量会始终存储在内存中，改变的话内存中的也会变，供内部函数调用</font>

    function fun(){
        var number = 0
    }
    fun()
    // 会报错，因为一个函数是一个作用域，在内部声明的变量并不会在外面取到
    console.log(number)

**例子**

    function a(){
        var num = 0
        function b(){
            console.log(num)
        }
        return b
    }
    var c = a()
    c()
    c()
    // 运行结果是：1  2
    function a(){
        var num = 0
        function b(){
            console.log(num)
        }
        return b
    }
    a()()
    a()()
    // 运行结果是：1   1

### 实例

**body 部分**

    <div>
      <button>1</button> <button>2</button> <button>3</button>
      <button>4</button> <button>5</button>
    </div>

**js 部分**

    var btnArr = document.querySelectorAll("button");
      for (var i = 0; i < btnArr.length; i++) {
        btnArr[i].onclick = (function() {
          var ind = i;
          return function() {
            // 输出对应按钮的索引值
            console.log(ind);
          };
        })();
      }

## 构造函数（非常重要）

<font color=red>
1.构造函数的原型有个 constructor 属性 该属性指的就是构造函数本身

2.每个实例化类都有 \_\_proto\_\_属性 该属性指向的是最大的构造函数 object 的原型</font>

**通过构造函数创建对象**

    var arr = new Array(1,2,3,4,5,6)
    var re = new RegExp('^' + username + '$')

<font color=red>js 里面内置了很多构造函数 Array RegExp Date</font>

    // 创建一个对象并返回
    function createCat (catName,catAge){
    return {
        name:catName,
        age:catAge
        }
    }
    var myCat = createCat('小花儿',2)

**函数名首字母必须大写，函数内部使用 this 关键字给对象添加属性或方法**

    function CreateCat(catName,catAge){
        this.name = catName
        this.age = catAge
    }
    // 类 通过类创建的对象称为实例化类，变成一个对象
    // 使用 new + 构造函数() 时，函数内部的this指的是实例化类
    var myCat = new CreateCat('小虎儿',2)
    console.log(myCat)

**构造函数的原型 给类添加公有的属性或方法的对象**

    function CreateCat(catName,catAge){
        this.name = catName
        this.age = catAge
        this.sing = function(){
            console.log('miaomiaomiao')
        }
    }
    var myCat = new CreateCat('小虎儿',2)
    var myCat1 = new CreateCat('小花儿',3)
    myCat.sing = function(){
        console.log('喵喵喵')
    }
    myCat.sing()// 输出喵喵喵

    myCat1.sing()// 输出miaomiaomiao

**构造函数的原型**

    构造函数.prototype // 获取构造函数的原型对象

**用构造函数创建的实例化对象，由两部分组成**

    1.构造函数内的私有属性或方法
    2.构造函数原型内的公有属性和方法

    function CreateCat(catName,catAge){
        this.name = catName
        this.age = catAge
    }
    CreateCat.prototype.sing = function(){
        console.log('喵喵喵')
    }
    var myCat = new CreateCat('小虎儿',2)
    var myCat1 = new CreateCat('小花儿',3)
    myCat.sing = function(){
        console.log('hhh')
    }
    myCat.sing()// 输出hhh

    myCat1.sing()// 输出喵喵喵

**改变数组的公有方法**

    var arr = [1, 2, 3, 4];
    arr.push(5);
    Array.prototype.push = function() {
        console.log("hahahah");
    };
    arr.push();

### 用构造函数兼容处理

    if (!Array.prototype.push) {
        // 判断浏览器对push方法支不支持，如果不支持。。。。
        Array.prototype.push = function() {};
    }

### 函数的继承

<font color = red>继承：一个类继承了另一个类的公有属性和方法。
</font>
一、**一个类继承某个类的公有属性和方法**

1.**拥有公有属性和私有属性的构造函数**

    function CreatePeople(){}
    CreatePeople.prototype.say = function(){
        console.log('hello')
    }

2.**新创建一个构造函数，其公有方法等于上一个构造函数的**

    function Hero(name){
        this.name = name
    }
    // 让新创建的构造函数原型等于上一个构造函数的原型,就涉及到了继承
    // 通过 Hero 构造函数创建的 实例化类 继承了 CreatePeople 类的公有属性和方法
    Hero.prototype = CreatePeople.prototype
    var spiderMan = new Hero('spiderMan')
    console.log(spideMan)

二、**一个类继承某个实例化对象的属性或方法**

<font color=red>这种方法把父类的私有属性和方法也当做了子类的公有属性和方法</font>

    function CreatPeople(name){
        this.firstName = name
    }
    CreatePeople.prototype.sayName = function(){
        console.log('My firstName is' + this.firstName)
    }
    var a = new CreatePeople('刘')
    console.log(a)
    /*后代类 想要继承‘刘姓’*/
    function Children(name){
        this.lastName = name
    }
    /*将实例化对象赋值给后代类的原型*/
    Children.prototype = a
    var xiaol = new Children('三')
    Children.prototype.say = function(){
        console.log(this.firstName + this.lastName)
    }
    var xiaol = new Children('三')
    /*控制台输出刘三*/
    xiaol.say()

### 对象冒充（改变 this 指向）

**call apply bind 三种方法**

    var x = 10
    var obj = {
        x:20
    }
    function fun(){
        console.log(this.x)
    }
    // 将 fun 函数使用bind方法改变内部的this指向改变成bind方法的参数， 并返回新的函数
    // 调用某个方法时 中间加上 bind 并给 bind 方法传参，会生成一个新的函数
    // 这个函数里面的内容和原来的函数完全一致，只不过函数内部的this指向的是bind方法的参数
    var fun1 = fun.bind(obj)
    console.log(fun1)

**call 对象冒充例子**

    function class1(){
        this.name = function(){
            console.log('我是class1内的方法')
        }
    }
    function class2(){
        // 调用 class1 的时候 把里面的 this 改成 class2 内的 this
        // 相当于继承让 class2 的实例化对象继承class1的name方法
        // class1 如果可以传递参数，将参数写在 call 方法的第一个参数后面作为 2,3,4,5。。。
        class1.call(this,age)
    }
    var f = new class2(2)
    /*控制台输出'我是class1内的方法'*/
    f.name()

<font color=red>apply 和 call 完全一样，只不过给 class1 传递参数的时候，需要写成数组</font>

    // class1.call(this,[age])
    // Math.max(1,2,3,4,5,5)
    var arr = [1,222,2334,3423,2,2]
    var num = Math.max.apply(Math,arr)
    console.log(num)
    
### 用构造函数模拟 jq 的修改样式功能

**要实现的效果**

    <h1>hello</h1>

    // script 内容
    // 写一个名为_$的构造函数，changeColor是构造函数实例化对象的方法
    // changeColor这个方法是公有的放在构造函数原型里面的
    _$('h1').changeColor('red')

**实现过程（只涉及到了对象）**

1、在 body 内部引入外部 js，在 js 中写一个构造函数

    function _$(selector){
        // 需要返回一个实例化对象
        // 用 return new _$(selector);会陷入一个死循环
        // 通过 new 关键字调用构造函数时，函数内的 this 指向实例化类
        // 拿到当前dom结点
        return _$.prototype.init(selector)
    }

**只有当 new \_\$('xx')的时候 this 指的是实例化对象，不写 new 就只是单纯的调用函数，this 指的是 window**

2、构造函数的原型

    _$.prototype = {
      changeColor: function(color) {
    // 改颜色
    // 通过调用这个函数传过来的参数 获取原生的 dom 对象 对其颜色进行修改
    this.dom.style.color = color;
    },
    init: function(selector) {
    // 相当于给 this 添加一个属性 属性值是 dom 结点
    this.dom = document.querySelector(selector);
    return this;
     }
    };
