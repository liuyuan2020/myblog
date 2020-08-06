---
title: React开发京东轮播图
date: 2018-12-8 9:22:00
categories:
  - 前端学习记录
tags:
  - react
---

## 前言

获取真实的 dom 节点，会造成浏览器的回流或者重绘（会重新渲染浏览器的 html，造成速度缓慢。）

## 实现效果

**实现效果 gif 图已经上传到 github 的 react-jdLoop 的仓库下：JDLoop.gif**

1.刷新页面图片自动播放，鼠标移入播放停止，滑出自动播放。

2.点击图片组两侧的前进后退按钮可以实现图片切换。

3.点击图片组下方的小圆点可以切换到对应的图片。

## 实现过程

### 创建项目（准备工作）

1.首先利用`create-react-app`创建一个新项目。

    create-react-app react-jdLoop

2.进入新项目中，并安装 npm 包管理工具，之后启动项目。

    cd react-jdLoop
    npm i
    npm start

3.删除一些不需要的项目文件，并在 App.js 中写 hello，网页正确显示 hello，准备工作就完成了。

    logo.svg
    index.css
    app.test.js
    App.css

    打开 index.js,删除 import './index.css';
    打开 App.js,删除
    import logo from './logo.svg';
    import './App.css';

### App.js

1.考虑到每次切换图片时，就相当于页面的状态改变，所以给该组件定义一个 state。

```js
state = {
  ind: 0
};
```

2.

① 图片在开始部分导入，还有前后按钮当成组件引进来。

    import pic1 from './img/1.jpg';
    import pic2 from './img/2.jpg';
    import pic3 from './img/3.jpg';
    import pic4 from './img/4.jpg';
    import pic5 from './img/5.jpg';
    import pic6 from './img/6.jpg';
    import pic7 from './img/7.jpg';
    import pic8 from './img/8.jpg';
    import Button from './Button';

② 一个 contain 盒子里包含八张图片还有两个 Button 组件还有 ul 里的 8 个小圆点。

③ 网页 jsx 部分

```js
<>
  <div
    className="contain"
    onMouseEnter={() => {
      clearInterval(this.run);
    }}
    onMouseLeave={() => {
      this.run = setInterval(() => {
        this.autoPlay();
      }, 2000);
    }}
  >
    <a href="javacript:;" className={`${ind === 0 && 'active'}`}>
      <img src={pic1} alt="" />
    </a>
    <a href="javacript:;" className={`${ind === 1 && 'active'}`}>
      <img src={pic2} alt="" />
    </a>
    <a href="javacript:;" className={`${ind === 2 && 'active'}`}>
      <img src={pic3} alt="" />
    </a>
    <a href="javacript:;" className={`${ind === 3 && 'active'}`}>
      <img src={pic4} alt="" />
    </a>
    <a href="javacript:;" className={`${ind === 4 && 'active'}`}>
      <img src={pic5} alt="" />
    </a>
    <a href="javacript:;" className={`${ind === 5 && 'active'}`}>
      <img src={pic6} alt="" />
    </a>
    <a href="javacript:;" className={`${ind === 6 && 'active'}`}>
      <img src={pic7} alt="" />
    </a>
    <a href="javacript:;" className={`${ind === 7 && 'active'}`}>
      <img src={pic8} alt="" />
    </a>
    <Button txt="<" className="prev" onClick={this.clickPrev} />
    <Button txt=">" className="next" onClick={this.clickNext} />
    <ul className="list">
      <li
        onMouseEnter={() => {
          this.mouseChange(0);
        }}
        className={ind === 0 ? 'active' : ''}
      />
      <li
        onMouseEnter={() => {
          this.mouseChange(1);
        }}
        className={ind === 1 ? 'active' : ''}
      />
      <li
        onMouseEnter={() => {
          this.mouseChange(2);
        }}
        className={ind === 2 ? 'active' : ''}
      />
      <li
        onMouseEnter={() => {
          this.mouseChange(3);
        }}
        className={ind === 3 ? 'active' : ''}
      />
      <li
        onMouseEnter={() => {
          this.mouseChange(4);
        }}
        className={ind === 4 ? 'active' : ''}
      />
      <li
        onMouseEnter={() => {
          this.mouseChange(5);
        }}
        className={ind === 5 ? 'active' : ''}
      />
      <li
        onMouseEnter={() => {
          this.mouseChange(6);
        }}
        className={ind === 6 ? 'active' : ''}
      />
      <li
        onMouseEnter={() => {
          this.mouseChange(7);
        }}
        className={ind === 7 ? 'active' : ''}
      />
    </ul>
  </div>
</>
```

④ **mouseChange**函数是给八个小圆点添加 ind 值。

```js
mouseChange = newInd => {
  this.setState({
    ind: newInd
  });
};
```

⑤ **componentDidMount**方法是首次渲染到页面才执行，只执行一次，将刷新页面的时候执行的 setInterval 写到生命周期函数中。

```js
 componentDidMount() {
    this.run = setInterval(() => {
      this.autoPlay();
    }, 2000);
  }
    // 自动播放部分
    autoPlay = () => {
    const { ind } = this.state;
    this.setState({
      ind: ind === 7 ? 0 : ind + 1
    });
  };
```

⑥ 点击 prev 、next 按钮的函数。

```js
clickPrev = () => {
  if (this.state.ind > 0) {
    this.setState({
      ind: this.state.ind - 1
    });
  } else {
    this.setState({
      ind: 7
    });
  }
};
clickNext = () => {
  if (this.state.ind < 7) {
    this.setState({
      ind: this.state.ind + 1
    });
  } else {
    this.setState({
      ind: 0
    });
  }
};
```

### Button.js

**render 里面的内容**

**当父组件内部想要使用多个相同子组件的时候，而每个子组件大部分一样，只有一些部分不同，此时父组件需要向子组件传递信息，这个信息就是 props**

**父组件使用子组件的时候就在 jsx 标签内写属性，就相当于传递 props**

例如：

    <Button txt="哈哈"/> 相当于父组件给子组件传递了一个txt属性，属性值为“哈哈”。

```js
const { txt, className, onClick } = this.props;

return (
  <button className={className} onClick={onClick}>
    {txt ? txt : '按钮'}
  </button>
);
```
