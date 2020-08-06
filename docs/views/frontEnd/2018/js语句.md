---
title: js语句
date: 2018-11-07 13:20:49
categories:
  - 前端学习记录
tags:
  - js
  - 前端
---

## switch 语句

**用来做相等判断，注意是使用三个等号判断的，值和类型都要相同**

**语法**:

    switch(判断的值){
      case 目标值: 当判断的值和目标值相等的时候执行的语句;
      break;
      ....
      default:上述 case 不成立执行的语句;
      break;
    }

<font color=red>break 的作用是跳出当前语句，也就是跳出 switch 语句。</font>

**不写 break 的话，只要有一条成功之后，下面的语句都会执行。**

## for 语句

**语法**：

    for(定义一个初始值;条件;自增|自减){
        执行语句
    }
    1、首先看初始值是否满足条件，满足执行大括号内的语句，不成立不执行大括号内的语句。
    2、如果初始值满足条件，执行自增或自减，然后再判断是否满足条件

for 语句内可以使用两个关键字：**break** **continue**

    break 直接跳出 for 语句
    continue 跳出当前这一步的for循环，继续向下执行。

**for(var i in Obj){}**

    for in 语句遍历对象 可以获取对象的属性名以及属性值
    for (var i in styleObj) {
      var styleName = i;
      var styleValue = styleObj[styleName];
      console.log(styleValue);
    }

### for 语句示例

1.输出 1+2+....+100 的结果(**求和算法**)。

    var result = 0;
    for(i = 0;i < 100;++i){
      result += i;
    }
    console.log(result);

2.利用 js 排版布局--手风琴 banner

**body 部分**

    <div class="pic">
      <img src="./images/slide-1.jpg" alt="">
      <img src="./images/slide-2.jpg" alt="">
      <img src="./images/slide-3.jpg" alt="">
      <img src="./images/slide-4.jpg" alt="">
      <img src="./images/slide-5.jpg" alt="">
    </div>

**css 样式部分**

    .pic {
      width: 1100px;
      height: 393px;
      overflow: hidden;
      position: relative;
      margin: 0 auto;
    }
    .pic img {
      display: block;
      position: absolute;
      top: 0;
    }

**js 部分（注意引入 jq）**

    var imgNum = $('.pic>img').length
    var picWidth = $('.pic').width()
    // 大盒子的宽度除以图片个数求开始状态的每个图片间距
    var startLeft = picWidth / imgNum
    var imgWidth = $('.pic>img').width()
    // 当划过一个图片时每个图片的间距（大盒子宽度除以（图片个数-1））
    var endLeft = (picWidth - imgWidth) / (imgNum - 1)

    for (var i = 0; i < imgNum; i++) {
      var left = i * startLeft
      $('.pic>img').eq(i).css('left', left)
    }
    $('.pic>img').mouseenter(function () {
      // 修改所有图片的 left 值
      // 划过的图片以及左边的图片 left 各自的索引值*82.5
      // 划过的图片右边的图片 left （各自的索引值-1）*82.5 + 770
      // 获取当前图片的索引值 当做左右图片的判断条件
      var ind = $(this).index()
      $('.pic>img').each(function () {
        // 获取当前查到的图片的索引值 和 划过图片的索引作比较
        var eachOne = $(this).index()
        if (eachOne <= ind) {
          // 是参考图片的左边的图片
          $(this).css('left', eachOne * endLeft)
        } else {
          // 是参考图片的右边的图片
          $(this).css('left', (eachOne - 1) * endLeft + imgWidth)
        }
      })
    })

**鼠标划过部分用 for 循环**

    $('.pic>img').mouseenter(function(){
      var ind = $(this).index()
      for(j = 0;j <imgNum;j++){
        if(j <= ind){
          $('.pic>img').eq(j).css('left',j * endLeft)
        }else{
          $('.pic>img').eq(j).css('left',(j - 1) * endLeft + imgWidth)
        }
      }
    })

## 实例

一、实现计算器中的+、-、\*、/

**实现思路**

1、结构：四个文本输入框,num1、num2、sign（符号）、result（结果），和一个等号按钮。

2、给 = 绑定点击事件，获取 num1 num2 sign .val()，将运算结果写到 input 中。

**body 结构**

    <input class="num1" type="text">
    <input class="sign" type="text">
    <input class="num2" type="text">
    <button class="btn">=</button>
    <input class="result" type="text">

**jq 事件**

    $('.btn').click(function () {
      var num1 = $('.num1').val() * 1
      var num2 = $('.num2').val() * 1
      var sign = $('.sign').val()
      var result = 0
      switch (sign) {
        case "+": result = num1 + num2;
          break;
        case "-": result = num1 - num2;
          break;
        case "*": result = num1 * num2;
          break;
        case "/": result = num1 / num2;
          break
      }
      $('.result').val(result)
    })

二、点击十个按钮会在输入框中显示对应按钮的数字。

**实现思路**

    1、写一个文本输入框，十个按钮。
    2、获取每个按钮的值.val(),并赋值给文本输入框。

**jq 事件**

    var num1 = ""
    $('input:button').click(function () {
      var num = $(this).val();
      num1 += num;
      $('input:text').val(num1)
    })

三、点击数字按钮和符号按钮在显示框输出，点击等号得出结果在结果框输出

**实现思路**

    1、点击数字按钮可以依次显示。
    2、点击符号按钮可以获得符号值以及num1的值，并在输入框中显示出来。
    3、再次点击数字按钮需要获得num2的值，因此需要判断是否输入了符号，用if语句来控制num1和num2的获取。并在输入框显示num1 + sign + num2。
    4、点击等号，判断符号，并输出结果。

**jq 事件**

**点击数字按钮**

    var num1 = "";

    var num2 = "";

    var sign = "";

    var result = 0;
    $(".number").click(function() {
        var num = $(this).val();

        // 点击了符号之后要存储第二个数

        if (sign) {
          num2 += num;
        } else {
          num1 += num;
        }

        $(".num").val(num1 + sign + num2);
      });

**点击符号按钮**

$(".sign").click(function() {
        sign =$(this).val();

        $(".num").val(num1 + sign);
      });

**点击等号**

    $(".btn").click(function() {
        switch (sign) {
          case "+":
            result = num1 * 1 + num2 * 1;
          break;
          case "*":
            result = num1 * num2;
          break;
          case "-":
            result = num1 - num2;
          break;
          case "/":
            result = num1 / num2;
          break;
        }
        $(".result").val(result);
    });

**点击重置按钮**

    $("input:reset").click(function() {
        $(".num").val("");
        num1 = "";
        num2 = "";
        sign = "";
        $(".result").val("");
    });

**得出结果后再次点击数字按钮，重新计算**

    只需要在点击等号按钮事件结束的时候清空num1、sign、num2的值即可。

## toFixed()

由于 js 浮点型数字计算的时候会出现计算错误，是因为 js 浮点型数字的精度问题。使用数字的 toFixed()方法。

**写法**

    数字.toFixed(括号内的数字是保留几位小数)
    做电商类网站时必须要使用这个方法。
    这个方法作用是 将数字保留几位小数并且转换成字符串，规则是四舍五入。
