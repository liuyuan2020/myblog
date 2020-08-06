---
title: jQuery
date: 2018-10-22 11:10:01
categories:
  - 前端学习记录
tags:
  - jQuery
  - 前端
---

> jQuery 是一个 javascript 工具库

## a 标签不跳转的两种方法

    <a href="javascript:;">不跳转</a>
    <a href="javascript:void(0);">不跳转</a>
    锚点：href和盒子id对应就可以跳到对应盒子。

## js 位置

**引入位置：引入 js 写到 body 最下面 引入里面不写代码**
**例如**

    <script src="js/jquery-3.3.1.js"></script>

**注意**：js 代码 必须严格区分大小写。
**一些特殊的 js 需要引入到 head 里。**

### cdn

**jquery 这种 js 类型的工具库 上传到我们自己的服务器加载可能很慢 使用 cdn 路径，常用 bootcdn**

    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>-->

## jQuery 选择器

jQuery 选择器：**\$('css 选择器')**
jQuery 自定义选择器：**p:last 在冒号前面的选择器中能选中的所有 p 之中选择最后一个 p:first 同理。和:last :first 规则一样的选择器是 :eq(数字) :even :odd 数字从 0 开始，也就是 0 代表第一个**
**注意**:jquery 里面第一个使用数字 0 表示，所以使用:even 的时候其实选择的是 0 2 4 ..
**input:[type]例 input:checkbox input:password**

// $(this) 特殊选择器 选择到的是触发事件的元素
例如：$('ul li a').mouseenter(function(){
// 先所有人变，之后特殊的自己变
$('ul li a').css({
'color':'#000',
'border-bottom':'2px solid #fff'
})
//$(this) 特殊选择器 选择到的是触发事件的元素
$(this).css({
'color':'red',
'border-bottom':'2px solid red'
})
// 通过滑过的 a 也就是$(this) 找到对应的 tab
//.next()作用是找到相邻的下一个兄弟元素
$('.box').css('display','none')$(this).next().css('display','block')
})

## 事件

常用的有：**click mouseenter(滑入) mouseleave（移出） dblclick(双击) focus(获取焦点) blur(失去焦点) change(有选中和非选中状态的表单点击事件，比如单选复选) trigger(可以模拟其他元素的事件触发 )**
键盘事件：**keydown keypress keyup**

### 事件的绑定

1.**用 on 绑定(此方法可以同时绑定多个事件)**

\$('input').on('事件 1 事件 2 ...',function(){}) 2.**直接绑定**

\$('input').focus(function(){})

3、**off 接触事件绑定**

    xxx.off('focus')

### 滚动条事件（scroll）

**有关滚动条涉及到函数节流**
**滚动条其实是属于浏览器窗口的 我们使用 \$(window) 选择浏览器窗口**
**如果某个盒子也有滚动条那就用某个盒子去选。**

\$(window).scroll(function(){})

### 鼠标事件

> 想要实现的效果：1、滑入小图出现对应大图 2、在小图上移动大图跟着鼠标走

**需要鼠标的坐标 参考事件对象 pageX pageY**

    获取鼠标横坐标：
    var x = event.pageX

### change 事件

    一般用在表单状态发生变化的时候(checkbox select 选中和不选中的时候)

### ready 事件

    此事件是默认触发的，绑定给document(文档)的。
    我们写的有些js代码，是需要页面所有dom元素加载完毕之后才能执行的，比如说事件绑定前提是该元素在页面中渲染完毕，所以这些js代码需要写在ready时间内部，
    写法如下：
    $(document).ready(function(){
    	// dom 加载完毕，添加我们要写的 js 代码
    	})
    上述写法的简写是：
    $(function(){})

<font color=red>$(document).ready(function(){}) 的简写$(function(){})
有的 script 标签写 head 标签里，页面加载是从上到下，页面还没渲染完毕，dom 结点会出错</font>

### event 事件对象

1、获取鼠标相对于文档的坐标 **event.pageX event.pageY**
2、获取键盘码 event.which 13(回车)
3、阻止默认行为的触发 even.preventDefault() 阻止 a 的默认跳转 submit 按钮的默认提交
4、获取事件类型 event.type
5、(事件冒泡以及事件委托)

### each 事件

xx.each(function(){

})  
该事件的作用是 查找 each 前面的每一个人 分别执行 function 里面的内容，内部的\$(this)指的就是当前查找到的那个。

**例子**

**body 里面的结构**

    <div class="pic">
        <img>
        <img>
        <img>
        <img>
        <img>
    </div>

**普通方法**

    .pic>img:nth-child(1){
        left:0 ;
    }
    .pic>img:nth-child(2){
        left:66px;
    }
    .pic>img:nth-child(3){
        left:132px;
    }
    .pic>img:nth-child(4){
        left:198px;
    }
    .pic>img:nth-child(5){
        left:264px;
    }

**给盒子加上相对定位，图片加上绝对定位之后，想要实现手风琴的排列样式，可以使用 jq 事件**

    $('.pic>img').each(function(){
        var left = $(this).index() \* 220
        $(this).css('left',left)
    })

## 方法

**.xxx() 例：.css()**

.css() 修改**行内**样式，权重最大，所以肯定会生效 1.修改单一样式 .css('名'，'值') 2.修改多个样式 .css({'名':'值','名':'值',......})s
**常用方法**

     .siblings() 查找同一级别的兄弟元素括号内可以放选择器，带限制条件的兄弟元素
     .parent()查找父级元素
     .parents() 查找祖先元素 括号内必须添加选择器
     .children() 查找所有子级元素 括号可以放选择器
     .next()      找到相邻的下一个兄弟元素
     .find() 查找后代元素 括号内必须添加选择器
     .eq() 括号内直接写数字，不用加引号
     .index() 返回某个人在父级中的位置（也就是属于第一个子级，数字是从零开始的）
     .addClass('class名')
     .removeClass('class名')
     将要改变的样式单独用一个 class 去表示，但是要注意权重值，只写一个类名的话会被上面权重值大的覆盖，
     还要注意一定要添加和删除一起使用
     toggleClass('类名')  有active类名就删除没有就添加。
     .attr('属性名') 获取属性名对应的属性值,开始标签内部写的东西都称为属性
     .attr('属性名','属性值') 设置某个属性的属性值
     /*jquery 里面的数字都不用加引号*/
     removeAttr('属性名')     删除该属性
     .scrollTop()   获取滚动条距离顶部的距离，获取到的是数字
     .stop()    将stop之前的动画全部停止
     .delay(时间)    将动画延迟执行
     /*delay()和stop()同时使用时，stop()放后面*/
     xx.offset().top  某个元素距离文档（body）顶部的距离，xx代表某个html元素
     xx.offset().left     某个元素距离文档（body）左部的距离，xx代表某个html元素
     .width()和.height()   获取元素宽高
     .innerWidth()包括padding  .outerWidth包括border
     .val()和.text()   input 和 textarea获取内容和设置内容
     父级.append(子级)
     .trim()   将一个值的左右两侧的空白（空格和回车、tab符）全部去掉
     字符串.length  获取一个字符串的长度
     .html()    设置元素内部的 html 内容 括号内直接写 html 字符串即可
     .filter()   .has() .prev()
     .prop('checked')    获取 checkbox 的当前状态 是选中的话 得到 true 相反得到 false ，
     也可以用来设置当前状态

```
// 让滚动条以动画形式返回顶部
// 修改 css 修改 html 或 body 的scrollTop样式
$('button').click(function(){
	$('html,body').animate({'scrollTop':'0'},5000)
})
```

**引号内不能直接写 jQuery 方法**

### 获取属性值方法注意事项

    我们使用jq方法获取页面上的属性值的时候获取的都是字符串，不能直接进行相加运算。
    需要让这个字符串 * 1之后运算。

**例如**

```
<input class='num' type='text' value='1'>
<button class='sub'>-</button>
<button class='add'>+</button>
<script>
	$('add').click(function(){
		var num = $('.num').val()
		num = num * 1 + 1
		$('.num').val(num)
	})
</script>
```

### 动画方法

**一个元素从消失到出现的效果 transition 给消失出现的元素加不了过渡**
**注意：动画和转换只作用于块元素**

    CSS3 动画会在元素消失(display:none)出现(display:block)的时候执行
    show(时间)---出现
    hide(时间)----消失 时间单位是ms 'slow' 'fast'
    toggle(时间)----切换
    slideUp(时间) slideDown(时间) slideToggle(时间)
    fadeIn(时间) fadeOut(时间) fadeToggle(时间) fadeTo(时间)
    fadeTo(时间，透明度)  fadeTo(1000,0.5) 让box在1s后变成0.5透明度

**jquery 的动画不会影响其他语句的执行 也就是写在动画后面的语句不会在动画执行完毕之后再执行**

**所有的 jquery 动画方法，都可以写回调（当某个动画执行完毕之后想要执行其他的事）**

jquery 动画回调写法 .xxx(1000,function(){动画执行完毕之后做的事})

**动画当给同一个元素写不同的动画时不需要写成回调形式也是先后执行**
**自定义动画效果 .animate({样式},时间,function(){回调})**
**animate 不能给转化（transform）加动画，只能给值是数字的样式加动画**

## 变量

**当你通过一些复杂的操作得到了某个值的时候，而且其他的地方反复使用这个值，我们将这个获取的值存储到一个变量里，其他地方使用的时候可以直接使用这个变量即可。**
var num = 0
//想要再次给变量赋值（修改）直接写 num = xxxx(可能是运算也可能是因为个数)即可

## 实际案例

### 全选按钮控制

**需要实现的**：
1、有两个全选按钮复选框，三个单选按钮复选框
2、任意点击一个全选按钮，三个单选按钮包括全选按钮都被选中
3、三个单选按钮全为选中状态时，两个全选按钮为选中状态
4、三个单选按钮有一个为未选中状态时，全选按钮都为未选中状态
**实现方法**
方法一：

```
/*实现点击某个全选 所有其他的checkbox跟当前点击的全选一致*/
$('.all').change(function(){
	var state = $(this).prop('checked')
	$(this).siblings('input:checkbox').prop('checked',state)
})
/*点击单选 只要3个按钮都是 true的话，全选变为true 只要当前的按钮变为false 全选肯定是false*/
$('.radio').change(function(){
	var state = $(this).prop('checked')
/*判断当前按钮的状态:如果是false 那么直接让全选变 false,如果是true 那么需要判断其他三个是否也为true 都为true的话 全选选中*/
	if(state == false){
		$('.all').prop('checked',false)
	}else{
		/*在检查所有radio的状态之前 定义一个allState,allState 代表全选的状态 默认全选状态为true*/
		var allState = true
		/*遍历所有的radio获取当前radio的状态，只要当某一个radio的状态为false的时候，全选状态肯定也为false，那么allState变为false*/
		$('.radio').each(function(){
			var state1 = $(this).prop('checked')
			if(state1 == false){
				allState = false
			}
		})
		$('.all').prop('checked',allState)
```

方法二：

```
var truenumber = 0
$('.radio').each(function(){
	var state1 = $(this).prop('checked')
	if(state1 == true){
		truenumber +=1
	}
})
if(truenumber == 3){
	$('.all').prop('checked',true)
}
```

### 做开关的方法（常用方法）

    	var selected = 0
    	$('span').click(function(){
    		if(selected == 0){
    			selected = 1
    		}else{
    			selected = 0
    		}
    	})
