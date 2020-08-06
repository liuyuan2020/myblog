---
title: mint-ui(vue.js的移动端ui框架)
date: 2019-1-3 21:14:00
categories:
  - 前端学习记录
tags:
---

## 前言

1.Mint UI 包含丰富的 CSS 和 JS 组件，能够满足日常的**移动端开发**需要。通过它，可以快速构建出风格统一的页面，提升开发效率。

2.真正意义上的**按需加载组件**。可以只加载声明过的组件及其样式文件，无需再纠结文件体积过大。

3.考虑到移动端的性能门槛，Mint UI 采用 **CSS3 处理各种动效**，避免浏览器进行不必要的重绘和重排，从而使用户获得流畅顺滑的体验。

4.依托 Vue.js 高效的组件化方案，Mint UI 做到了**轻量化**。即使全部引入，压缩后的文件体积也仅有 ~30kb (JS + CSS) gzip。

5.这个组件库，适合于基于 vue 的手机页面开发。

## 安装及配置

1.安装 Mint-ui，执行命令：`npm i mint-ui -S`(-S 是--save 的缩写)

2.使用 vue-cli，执行命令：`npm install -g vue-cli`

3.在 VUE 项目中引入 Mint UI，可以引入完整的，也可以按需引入部分组件。**一般都是用按需加载，可以减少项目体积**

### 完整引入 Mint UI

在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';

Vue.use(MintUI);

new Vue({
  el: '#app',
  components: { App }
});
```

### 按需引入

1.安装**babel-plugin-component**:`npm install babel-plugin-component -D`。

2.修改**babel.config.js**，加入 plugins 属性:

```js
{
  presets: ['@vue/app'],
  plugins: [
    [
      'component',

      {
        libraryName: 'mint-ui',
        style: true
      }
    ]
  ]
}
```

3.引入部分组件，比如 Button 和 Cell，需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import { Button, Cell } from 'mint-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
```

## Tabbar 注意

1.由于底部 tabbar 栏需要点击跳转，所以要用到 vue-router，关于 **vue-router** 的详情可以查看博客里**VUE**的内容。

2.举个例子：

**v-model**:v-model=selected，点击的时候会给 selected 进行赋值，也就是将 id 值赋给 selected，需要给 tabbar 一个初始值，默认是 Home，监听这个值。

```js
export default {
  name: 'app',
  data: () => ({
    selected: 'home'
  }),
  watch: {
    selected() {
      const url = this.selected === 'home' ? '/' : `/${this.selected}`;
      this.$router.history.push(url);
    }
  }
};
```

每个 `mt-tab-item` 的 id 值就是 router.js 中的路由路径名字。**记得写 tabbar 底下的文字部分，最好加一个 span 标签，方便写样式。**

```js
<mt-tabbar v-model="selected">
  <mt-tab-item id="home">
    <img slot="icon">
    <span>首页</span>
  </mt-tab-item>
  <mt-tab-item id="project">
    <img slot="icon">
    <span>项目</span>
  </mt-tab-item>
  <mt-tab-item id="plat">
    <img slot="icon">
    <span>平台</span>
  </mt-tab-item>
  <mt-tab-item id="personal">
    <img slot="icon">
    <span>我的</span>
  </mt-tab-item>
</mt-tabbar>
```

## 实例

金杜律师事务所，用 Vue 框架和 mint-ui 开发，用到的 ui 基本上可以在官方文档中查到。完整项目放在 github 上，方便查看。
