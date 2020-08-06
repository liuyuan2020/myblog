---
title: react动画-react-transition-group
date: 2018-12-20 09:18:00
categories:
  - 前端学习记录
tags:
  - react
---

## 安装

执行如下指令，将`React Transition Group`安装在对应项目文件夹的根目录下

    npm install react-transition-group --save

然后去官方网站实现几个小例子：

    http://reactcommunity.org/react-transition-group/

## 点击按钮实现文字渐出的效果

**实现效果已经做成 gif 图片，存在 github 下的 react-recharts 仓库里。名字是：ButtonEnter.gif**

1.在 App.js 中导入需要用到的包：

    import { CSSTransition } from 'react-transition-group';

2.因为这个过程涉及到了页面的状态变化，所以加一个判断显示还是不显示的状态，刚开始是 false(不显示)。

```js
state = {
  show: false
};
```

3.jsx 部分

**注意：CSSTransition 标签里的属性名 classNames，而不是 className**

```js
<div>
  <button style={{ display: 'block' }} onClick={this.showChange}>
    按钮
  </button>
  // 需要添加动画的部分要用 CSSTransition 标签包裹
  <CSSTransition classNames="message" in={show} unmountOnExit timeout={3000}>
    <span>i have a dream</span>
  </CSSTransition>
</div>
```

4.按钮的点击事件

```js
showChange = () => {
  this.setState({
    show: true
  });
};
```

5.添加一个 app.css 在里面写 transition 动画效果

```css
.message-enter {
  opacity: 0;
  font-size: 16px;
}
.message-enter-active {
  opacity: 1;
  font-size: 20px;
  transition: all 3s;
}
.message-enter-done {
  opacity: 1;
  font-size: 20px;
}
```

## 相关解释

### timeout

timeout 等于 3000 是指**css 样式中 transition 动画只能持续 3s**，如果大于 3s 多出来的渐出效果会被剪掉，3s 结束直接跳到最终样式。

可以设置一个最终的样式效果**message-enter-done**，不设置的话最后样式就是 span 的默认样式。

### in

当 in 为 true 时，会给 span 加上两个类名**message-enter-active** **message-enter** ，timeout 设置的时间结束后，span 的类名会被替换为 **message-enter-done**
