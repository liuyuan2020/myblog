---
title: css3 animate(动画)
date: 2018-10-21 14:11:54
categories:
- 前端学习记录
tags:
- 前端
- CSS3
---

## 自定义动画
**注意：自定义动画一般放在样式顶部，只用于块元素**
**写法**
    
    @keyframes 动画名{动画帧数}
**例如**
    
     @keyframes shake{
			/*第一帧 from 相当于0%*/
			0%{
				/*样式*/
				transform:scale(0.8);
			}
			20%{
				/*样式*/
				transform:scale(0.8);
			}
			/*最后一帧 to 相当于 100%*/
			60%{
				transform: scale(1.5);
			}
			100%{
				/*样式*/
				transform: scale(1.5);
			}
		}
## 添加动画
**添加动画 使用animation样式 动画只能实现带给数值的样式添加效果，例如加颜色变化的效果不对**
**可以结合hover一起使用,用在加了hover伪类的选择器里**
**写法**
     
    animation:动画名（必须） 持续时间（必须） 速度曲线（默认是ease：先慢后快再慢 ，linear(匀速) ease-in ease-out ease-in-out） 延时（s或ms） 
    次数（数字或者infinite） alternate(偶数次数是否逆向，逆向)  
    forwards（动画完毕是否停到最后一帧）
## animate.css网站

    https://daneden.github.io/animate.css/
