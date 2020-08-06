---
title: React开发例子--点击按钮出现侧边栏
date: 2018-12-11 21:21:23
categories:
  - 前端学习记录
tags:
  - react
---

## 实现效果

1.点击按钮，侧边栏会出现，点击 main 内容或者 header 侧边栏消失。

2.**实现效果已经上传到 github**

## 实现过程

### App.js

1.因为点击 Main 和 Header 都能改变侧边栏的 show 状态，所以在父组件中写一个 state。

```js
state = {
  show: false
};
```

2.在父组件内定义修改 show 状态的方法。

```js
// 点击按钮
alterClick = () => {
  this.setState({
    show: true
  });
};
closeSide = event => {
  const eleClassName = event.target.className;
  // 1.给 app 绑定点击事件，只要点击的不是 button 按钮就隐藏
  // 2.给 sub-nav 绑定点击事件，作用是阻止 app 的点击事件触发，由于 sub-nav 里面的内容很多，通过event.target.className 无法判断是否点击的是 sub-nav 或者是里面的内容。
  if (eleClassName !== 'btn') {
    this.setState({
      show: false
    });
  }
};
```

3.父组件中的 render 部分。

```js
 render() {
    const { show } = this.state;
    return (
      <div onClick={this.closeSide}>
        {/* 以props将方法传递给子组件button */}
        <Button change={this.alterClick} show={show} />
        <SubNav show={show} />
        <Main show={show} />
      </div>
    );
  }
```

### Main.js

```js
 render() {
    const { show } = this.props;
    return (
      <div className="main" style={{ marginLeft: show ? '200px' : '0px' }}>
        main
      </div>
    );
  }
```

### Button.js

```js
render() {
    const { show, change } = this.props;
    return (
      <button
        className="btn"
        onClick={change}
        style={{ marginLeft: show ? '200px' : '0px' }}
      >
        按钮
      </button>
    );
  }
```

### SubNav.js

1.因为我要实现点击 Button 组件修改 SubNav 组件的 state，但是这两个组件是毫不相关的(兄弟)，所以将 SubNav 组件的 state 写到 app 组件中(**状态提升**)

2.将 app 中的状态要传递给 SubNav 组件，使用 props。

3.为什么要提升到父组件?

    由于子组件可以修改父组件的状态,那么 Button 组件可以修改 App 的状态，
    进而也就修改了 SubNav 的 props。

4.子组件如何修改父组件的 state？

    1.在父组件内部声明修改 state 的方法
    2.将该方法当做props传递给子组件，让子组件执行

```js
render() {
    const { show } = this.props;
    return (
      <div
        className="sub-nav"
        style={{ left: show ? '0px' : '-200px' }}
        onClick={event => {
            // 阻止事件冒泡
          event.stopPropagation();
        }}
      >
        <h1>我的简历</h1>
        <ul>
          <li>
            <a href="http://baidu.com">个人资料</a>
          </li>
          <li>
            <a href="http://baidu.com">个人资料</a>
          </li>
          <li>
            <a href="http://baidu.com">个人资料</a>
          </li>
        </ul>
      </div>
    );
  }
```
