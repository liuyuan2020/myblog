---
title: object 对象
date: 2018-11-08 14:11:39
categories:
  - 前端学习记录
tags:
  - 前端
  - js
---

## 前言

1、对象（object）有两种：自定义对象、内置对象。对象用于存储大量数据的时候。

2、自定义对象：{}对象 对象内部有属性名和属性值

    例：
    var cat = {
        name: "xxx",
        age: 2,
        sing: function() {
          cosole.log("xxx");
        }
    };
    对象内部属性值是 function 的称该属性为方法。

3、**如何访问对象下的属性**

对象名.属性名

访问对象没有的属性，得到的结果是 undefined。

4、**如何执行对象下的方法**

对象名.方法名()

5、不同对象有不同的方法，不能混用。比如，toFixed()是对数字的方法，字符串不能使用。

6、内置对象：数组（important）、正则表达式、日期、数学、数字、字符串、浏览器.

7、对象类型是引用类型，比较的时候比较的是引用的比较，对象形式的数据存储的时候会在内存中开辟一个地址存储，每定义一个对象就会有一个地址存储该对象，不会有重复的地址，所以对象永远不相等。

8、如何修改对象下的某个属性的属性值 直接对属性进行赋值即可

      var cat = {
        name: "xiaohua",
        age: 2
      };
      // 操作
      var cat1 = cat;

      cat.age = 1;

      console.log(cat);
      console.log(cat1);
      // 两个控制台输出结果一样，是因为和对象的存储方式有关，对象存储的地址赋值给另一个变量，这个变量就可以访问这个地址

## 数组对象

**定义**:数据的有序集合。

    var arr = [1,2,3,4,5,6,7,8,9,10]
    像是京东首页的banner条，有一组图片，每天都会更新，这样的就可以将每一张图的信息作为对象存到数组里面。
    一般数组信息会从后台传过来，前端写数组的时候少，都是控制数组。

**访问数组内容**

    数组[下标|索引值]：获取数组中的某个元素。
    例：
    var arr = [1,2,3]
    console.log(arr[3])  //undefined

    arr 声明未赋值结果就为undefined

<font color=red>访问对象下没有的属性，得到的结果是 undefined</font>

**数组的常用属性**

1、length:返回数组的长度也就是数组中元素的个数

    console.log(arr.length)

**数组的常用方法**

    方法的作用、会不会改变原来的对象、方法的返回值
    某个方法的返回的意思就是该方法被调用之后，会变成返回值。

1、.push(要添加的元素):向数组内部的最后添加元素，原来的数组改变，该方法返回新数组的长度。

2、数组.concat(另一个数组):将两个数组拼接（个数不限，用逗号隔开），原来的数组不变，并且返回新得到的数组

3、.pop():删除数组中的最后一项，原数组改变，并返回被删除的元素。

4、.shift():删除数组内部的最前面的元素，原来的数组改变，该方法返回被删除的元素。

5、.unshift():向数组内部的最前面添加元素，原来的数组改变，该方法返回新数组的长度。

6、.slice(a,b):对数组进行截取从下标 a 开始到 b 结束（包括开始不包括结束），原数组不变，返回被截取的数组。

**这个方法可以只写开始不写结束：从开始直接截取到最后，包括最后一项**

**这个方法可以用来做数组的拷贝**

7、.splice(a,b,c):对数组进行添加或删除，原数组改变，返回被删除元素组成的数组，没有删除的话返回 []---空数组。。

    a 代表添加或删除的位置（下标）
    b 代表删除的个数
    c 代表要添加的元素（可以省略）

8、.join(a):将数组的每一项以 a 作为连接符拼接成字符串，原数组不变，返回新得到的字符串。

9、.reverse():将数组顺序颠倒，原数组改变，并且返回颠倒后的新数组。

10、.indexOf(要查找的元素):查找数组内是否包含某个元素，如果包含返回第一个匹配的下标，否则返回 -1，原数组不会改变。

**其他的方法**：filter map find findIndex reduce inCludes sort every forEach

## 数组的高阶方法

1、.filter() :将一个数组根据条件生成另外一个数组，原数组不变，返回新生成的数组（本身就是个 for 循环，遍历数组）

    写法：
    xx.filter(function(ele,index,array){return 条件})
    如果数组中的某一项满足条件的话，就放入到新生成的数组内
    ele 代表数组中的某一项
    index 代表的是该项的下标
    array代表原数组

2、forEach 数组的遍历,用法和 for 一样

    写法：
    arr.forEach(function(ele,index,array){
        console.log(ele,index,array)
    })

3、find() 数组的查找 通常使用在对象数组(数组里面存放的是对象类型{})上在数组中查找符合 return 后条件的第一个元素并返回，原数组不变，差找不到返回 undefined

    写法：
    xx.find(function(ele,index,array){
        return 条件
    })

4、findIndex() 查找的是下标，其余和 find 一模一样，查不到返回

5、every() 检测所有元素是否符合条件，符合条件返回 true 不符合返回 false，通常用来查询数组中是否都是同一个元素。

    用法：
    var arr = [1,1,1,11,111,11,11,1]
    var state = arr.every(function(ele,index,array){
        return ele>1
    })
    console.log(state)

6、inCludes 使用该方法替换 indexOf,返回 true 或 false

7、sort 给数组排序

    var arr = [22,1,32,45,6,7,3,4,5]
    var newArr = arr.sort(function(a,b){
        return b - a
    })
    // a b 代表的是数组的相邻两项
    // b-a从大到小
    // a-b从小到大

## 实例

**前情提要**

    body里面的结构是：
    <input type="text">
    <button>搜索</button>
    <ul></ul>
    定义一个数组：
    var users = [
        {
            '姓名':'小一',
            '年龄':'12'
        },{
            '姓名':'小二',
            '年龄':'12'
        },{
            '姓名':'小三',
            '年龄':'13'
        },{
            '姓名':'小四',
            '年龄':'14'
        }
    ]

一、**点击搜索显示符合条件的第一条列表项**

    实现思路:
    1、将ul内的三个li替换成当前这项对应的li
    2、删除其他几个li

二、**点击搜索查到所有符合条件的**

    实现思路：
    1、写button的点击事件
    2.在点击搜索的时候获取文本输入框中的内容，执行for循环
    3、覆盖 需要找到符合条件的所有元素，将其放到新的数组内，
    然后清空原来的ul的内容，使用新得到的数组重新for写入新的li

```
方法一：
$('button').click(function(){
    var content = $('input:text').val()
    var currentUsers = []
    for(var j = 0;j < users.length;j++){
        var user = users[j]
        if(content === user.age.toString() || user.name === content){
            currentUsers.push(user)
        }
    }
    // for 循环结束之后就得到了一个存放正确结果的新数组
    $('ul').empty()
    for(var i = 0;i <currentUsers.length;i++){
        var user =currentUsers[i]
        var li = $('<li>').html(`姓名:<span>${user.name}</span>年龄:<span>${user.age}</span>`)
        $('ul').append(li)
    }
})
方法二：
$('button').click(function(){
    var content = $('input:text').val()
    var currentUsers = users.filter(function(user,index,array){
        return (content === user.age.toString() || user.name === content)
    })
    $('ul').empty()
    for(var i = 0;i <currentUsers.length;i++){
        var user =currentUsers[i]
        var li = $('<li>').html(`姓名:<span>${user.name}</span>年龄:<span>${user.age}</span>`)
        $('ul').append(li)
    }
})
```

三、**实现购物车的功能**

**要求**

    给出存放商品信息的数组，实现可以删除商品信息，选择商品，商品数量的增减同时小计和总计相应增减。

**实现思路**

1、实现全选按钮和单选按钮关联控制

2、遍历数组寻找商品信息，并将其以 li 标签的形式存放到 ul 标签下，点击删除按钮后，对应的 li 被移除

3、点击“-”或“+”按钮时，获取输入框中的值，++或--，同时影响小计的值。

4、以选择商品的个数在全选按钮状态改变时和商品选择状态改变时添加。

5、因为总计的改变都和小计有关，所以封装一个功能函数，这个函数的功能是遍历商品列表，如果该商品被选中，总价就加上该商品的小计。

**实现过程**

**body 结构部分**

    <ul class="list">
      <li class="head">
        <input type="checkbox" id="option" class="all" />
        <label for="option"
          >全选</label
        >
        <span>商品</span> <span>单价</span> <span>数量</span> <span>小计</span>
      </li>
    </ul>
    <div class="bottom">
      已选商品个数<span class="allGoods">0</span>总价<span class="goods-total"
        >0</span
      >
    </div>

**jq 部分**

1、定义一个存放商品数据的数组

    var goodArr = [
        { goodsName: "iphone", price: 2000 },

        { goodsName: "iphone1", price: 2001 },

        { goodsName: "iphone2", price: 2002 },

        { goodsName: "iphone3", price: 2003 }
      ];

2、遍历数组中的商品信息，并以 li 标签的形式添加到 ul 下。

    goodArr.forEach(function(ele) {
        var li = $('<li class="goods">').html(
          `<input type="checkbox"><span>${
            ele.goodsName
          }</span><span class="price" >${
            ele.price
          }</span><button class="sub" disabled>-</button><input type="text" value="1"><button class="add">+</button><span class='sum'>${
            ele.price
          }</span><button class="del">删除</button>`
        );
        $(".list").append(li);
      });

3、封装一个函数（一般写在前面）

    function allTotal(allGoods) {
        // allGoods 代表的所有商品 用jquery选择器选到的类似$('.list .goods')
        var total = 0;
        allGoods.each(function() {
          // 查找每一个商品，看该商品是否选中
          var state = $(this)
            .find("input:checkbox")
            .prop("checked");
          if (state) {
            total =
              total +
              $(this)
                .find(".sum")
                .text() *
                1;
          }
        });
        return total.toFixed(2);
      }

4、全选按钮状态改变时

     $(".all").change(function() {
        var stateTotal = $(this).prop("checked");
        $("input:checkbox").prop("checked", stateTotal);
        if (stateTotal == true) {
          $(".allGoods").text(goodArr.length);
        } else {
          $(".allGoods").text(0);
        }
        $(".goods-total").text(allTotal($(".list .goods")));
      });

5、单选按钮状态改变时

    $(".goods input:checkbox").change(function() {
        var state = $(this).prop("checked");
        var sumState = $(".allGoods").text() * 1;
        if (state == false) {
          $(".all").prop("checked", false);
          sumState--;
          $(".allGoods").text(sumState);
        } else {
          var stateAll = true;
          sumState++;
          $(".allGoods").text(sumState);

          $(".goods input:checkbox").each(function() {
            var state1 = $(this).prop("checked");
            if (state1 == false) {
              stateAll = false;
            }
          });
          $(".all").prop("checked", stateAll);
        }
        $(".goods-total").text(allTotal($(".list .goods")));
      });

6、删除按钮点击时

    $(".del").click(function() {
        $(this)
          .parent()
          .remove();
        $(".goods-total").text(allTotal($(".list .goods")));
      });

7、加减按钮点击时

    $(".sub").click(function() {
        var num = $(this)
          .next()
          .val();
        var price =
          $(this)
            .siblings(".price")
            .text() * 1;
        if (num > 1) {
          num--;
        }
        if (num == 1) {
          $(this).attr("disabled", true);
        }
        $(this)
          .next()
          .val(num);
        $(this)
          .siblings(".sum")
          .text(price * num);
        $(".goods-total").text(allTotal($(".list .goods")));
      });
      $(".add").click(function() {
        var num = $(this)
          .siblings("input:text")
          .val();
        var price =
          $(this)
            .siblings(".price")
            .text() * 1;
        num++;
        if (num > 1) {
          $(this)
            .siblings(".sub")
            .attr("disabled", false);
        }
        $(this)
          .siblings("input:text")
          .val(num);
        $(this)
          .siblings(".sum")
          .text(price * num);
        $(".goods-total").text(allTotal($(".list .goods")));
      });

## reduce 实现数组的求和

**reduce(function(result,ele,index){},0)**

    result 代表的是最终结果
    ele代表的是数组的一项
    index对应的下标
    0 代表最终结果的初始值是自己定义的。
    function 的大括号内，必须填写返回最后的结果,必须写return

**实例，用 reduce 实现过滤的效果**

    var arr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
    var result = arr.reduce(function(newArr, ele) {
        if (ele % 2) {
            newArr.push(ele);
        }
        return newArr;
    },[]}

## 冒泡排序

```
var arr = [33, 1, 5, 2, 67, 45, 209, 78, 9];
for (j = 0; j < arr.length - 1; j++) {
//内部的for循环只是找到了最大的一个数，还需要循环剩下的，每循环一次找到一个内部循环的个数就减一次，所以内部循环要减j
    for (i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            var num = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = num;
        }
    }
}
      console.log(arr);
```

## js 数组去重方法

**最简单的去重方法实现思路**

新建一新数组，遍历传入数组，值不在新数组就加入该新数组中。

注意：判断值是否在数组的方法“indexOf”是 ECMAScript5 方法
