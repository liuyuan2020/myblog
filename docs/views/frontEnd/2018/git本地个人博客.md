---
title: 用hexo写个人博客
date: 2018-09-15 21:21:23
list_number: false
tags: 
- hexo 
- git 
- github

---


## 前言
>上午生产实习结束后，就跑回宿舍开始整个人博客，虽然过程遇到了一些麻烦，但是最后总算还是整完了。还好能找到一个可以用外网的vpn，不然github都打不开，Google搜索是真滴好用！！百度搜索同一个关键词，给出的都是没有针对性的解答（=.=），但是Google搜索出来的第一条就是针对我的问题的解答，让我的生活工作有效率了不少。只是，第一篇博客里面没有图片，暂时还没学会在Markdown中插入本地图片。

## 安装及配置

1、安装`git`
2、安装`node.js`
3、注册`github`
4、配置`Git`以及`SSH keys`
①配置SSH keys
在myBlog的目录下右键会有Git GUI Here。

点击help里面的show SSH key，将里面的内容复制到剪贴板，然后打开github里的settings，找到SSH and GPG keys。

点击New SSH key新建，名字随便取，内容粘贴剪贴板里的内容，这样SSH keys就设置好了。

②配置git,在终端输入以下命令：

    git config --global user.name xxx
    git config --global user.email yyy    //邮箱为注册github所用邮箱
    git config --global push.default simple
    git config --global core.quotepath false //防止文件名变成数字
    git config --global core.editor “vim” //使用`vim`编辑提交信息

## 终端上的安装

1、安装`Hexo`

    npm install -g hexo-cli
2、进入一个安全目录，比如进入桌面：

    cd ~/desktop
3、新建一个文件夹并且进入：
    
    mkdir blog
    cd blog
4、依次执行

    hexo init myBlog //在myBlog文件夹下新建一个网站
    cd myBlog //进入myBlog文件夹内
    npm i //安装依赖包
    
>其中，新建的框架目录如下
|—— _config.yml             // 网站的配置信息
|—— package.json            // 项目包信息
|—— scaffolds               // 模板文件夹，Hexo根据scaffold中的模板来新建文件
|—— source                  // 存放用户资源的地方
|   |—— _drafts             // 存放草稿
|   |—— _posts              // 存放文章
|—— themes                  // 主题文件夹

5、新建第一篇博客（双引号里面的内容为博客标题，可以随便取）

    hexo n "我的第一篇博客内容"
6、编辑上面的md文件，这个文件的内容就是你的博客内容

    start ~/desktop/blog/myBlog/source/_posts/我的第一篇博客内容.md      //windows系统打开指令是start，mac系统打开指令是open
7、进入`github`，新建一个名为“用户名+github.io”的仓库，命名完成之后直接创建
8、打开_config.yml文件

    Start _config.yml

第6行title改为你想的标题
第9行author改为你的名字
最后一行type改为：
    
    type:git
type下面新加一行，左边和type对齐（type：和repo：后面都有空格）

    repo：git@github.com:ChaCha4/ ChaCha4.github.io.git
上面的地址就是你们github上面的ssh的地址，一般新建仓库后都会在下面显示出来。
9、编辑完博客内容就可以执行以下命令，上传到githu：

    npm install hexo-deployer-git --save
    hexo g
    hexo d
10、此时您就可以预览第一篇博客了，预览地址为你的仓库名称。
## 备份博客


    为了防止电脑突然出故障而导致的本地文件丢失，需要利用github新建一个仓库来存储本地上的blog文件。

### 操作步骤


1、github新建一个仓库，命名完成直接创建。在新仓库下面会有教你如何保存到github的步骤
2、在blog文件夹下右键点击`Git Bash Here`，然后按照他教的步骤复制下来就可以了。
3、记得做完他的步骤，还要加上如下几条命令

    git add . 
    git commit -m "xxx" //引号里面的是注释，随便填，最好写与操作相关的注释
    git push -u origin master
4、上传完成后，再次用的时候可以直接以压缩包的形式下载到本地。
## 出现的问题


>明明已经换过样式了，hexo g ，hexo d之后并没有变化

    A：正常现象，可以去看会视频休息一下，等待片刻就会显示更改后的样子。

>执行命令：npm install -g hexo 报错是怎么回事？

    A：一般报错可能是因为被墙了，换国内镜像源试试：
    npm config set registry="http://registry.cnpmjs.org"
    然后再次执行npm install -g hexo,成功！

>在网上找了一个主题，结果生成的博客结构不一样QAQ

    A:一般每个主题都会有使用说明，照着说明上设置就不会不一样了。
    
## Hexo命令


    新建一篇文章

    $ hexo new "标题"

也可以简写为：`$ hexo n "标题"`
    
    生成静态文件
    $ hexo generate
也可以简写为：`$ hexo g`

    部署网站
    $ hexo deploy

也可以简写为：$ hexo d

    清除缓存文件（db.json）和已生成的静态文件（public）。
    在某些情况（尤其是更换主题后），如果发现您对站点的更改无论如何也不生效，您可能需要运行该命令。
    $ hexo clean
   .
   
    显示hexo版本
    $ hexo version
    
也可以写为：$ hexo -v
