---
title: shell 命令和git
date: 2018-12-03 09:38:18
categories:
  - 前端学习记录
tags:
  - 前端
  - git
---

## shell 命令

1、**cd 命令**：后面加可以找到的目录。
2、**ls 命令**：查看当前文件夹下的所有内容（不包括隐藏文件），加上参数也可以查看隐藏文件(ls -a)
3、**pwd**:查看当前所处位置。
4、**cd d:**:在任何路径下都可以直接回到对应的盘，此命令是回到 d 盘。
5、**cd ../**:返回上一级路径
6、**cd ~**:跳转到用户主目录。
7、**mkdir a**:在当前目录创建一个名为 a 的文件夹。
8、**mkdir a/b**:在当前目录下 a 文件夹里面创建 b 文件夹。(可以放路径)
9、**touch index.html**:在当前目录下创建文件，必须带后缀名。创建多个之间用空格。
10、**rm a**:删除文件，删除多个的时候之间用空格。

    加参数 -r 可以删除文件夹。rm a -r。
    -f:强制删除 。rm a -rf
    rm -rf \* :删除所有，包括隐含文件

11、**python -m SimpleHttpServer 5000**
12、**ifconfig**:查看 ip
13、**clear**:光标回到屏幕最上方。
14、**cat a.txt**:查看文件内的文本内容。
15、**cp file1 file2**:将 file1 拷贝到 file2 里。

    cp 文件 目录：将当前目录下的文件拷贝到目标目录。
    cp 文件 名：拷贝后重命名。
    参数 -r：可以拷贝文件夹。

16、**mv 文件|文件夹 目录**：将该文件或文件夹移动到目录下。

    mv 文件|文件夹 名：重命名

## 快捷键

1、**ctrl+c**:取消命令，不去操作，回到新的一行
2、tab :可以自动补全路径名。比如：cd Des+tab.

## git 操作

1、生成秘钥，用于和 github 连接。

在命令行中执行 ssh-keygen.
2、进入到用户主目录下：cd ~
3、再进入到 .ssh 文件夹下 ：cd .ssh
4、使用 cat 命令查看公钥 cat id_rsa.pub 复制里面的文本。
5、打开 github 网站点击用户下面的 settings->SSh and GPG->添加 ssh 即可

## 克隆网上的仓库到本地

1、点击仓库下的绿色按钮 **clone or download** 选择 http 地址。
2、打开命令行，跳转到某个目录(放项目的文件夹)下。
3、执行 **git clone 地址**命令(将网上的项目克隆到了本地)。

## 将本地的项目存到 git 远端

**只有在 git 仓库内才能对该仓库进行操作**

1、进入到仓库的文件夹下
2、**git add 修改的文件名(.代表所有修改的文件)**---->将对仓库内文件的修改让远端 git 记录。
3、**git commit -m '版本信息(此次修改的标题'**----> 将此次修改做成一个 git 版本，方便 git 记录。
4、**git push** 将我们的修改提交到远端
**第一次使用 git 时候做版本会失败，因为没有登录账号密码**

    使用：
    git config --global user.name "git用户名"
    git config --global user.email "git 邮箱"

之后再次执行 **git 三步**

## 本地项目存储到 git (没有仓库的情况)

1、git 远端新建一个同名仓库，里面什么都不放(初始化的时候不要添加 README.md 文件)
2、进入到本地的项目文件夹，打开终端，执行 git init 操作(初始化本地文件夹为 git 仓库)
3、执行 `git add .`
4、执行 `git commit -m '版本留言'`
5、执行 git push 会报错，没有远端目标
6、执行 git remote add origin git@github.com:ChaCha4/blog.git 设置远端目标
7、执行 git push -u origin master 将本地仓库推送到设置好的远端仓库
8、以后想修改的话直接执行 git 三步

## 多个人同时对同一文件进行修改

**团队合作或者通过其他的方式导致网上的版本优先于本地的版本之后如何操作**

当我们不知道远端有新版本的时候执行了 git 三步之后，push 的时候会提示：更新被拒绝，因为远程仓库包含您本地上不存在的提交。

**解决方案**

执行 **git pull** 将远端的新版本拉取到本地，会出现两种情况。

**情况 1**.如果远端的新版本和你本地修改的版本是同一个文件的话会发生合并冲突，需要你自己到对应文件内处理冲突。
接下来就是用 git 三步提交。

**情况 2**.远端的修改和本地的修改不是同一个文件，那么 git pull 的时候 git 会帮你自动合并，但是需要你添加一个合并的版本留言(有默认的留言信息)，直接执行 ctrl + x 退出即可，相当于 git 自动帮你合并做成了版本并且提交了版本里的留言，接下来直接使用 git push 推送即可。

## 查看当前仓库的命令

    git log 查看当前仓库的版本，版本非常多显示不全，使用回车看下面的，按 q 键退出。
    git status 查看当前仓库的状态。
    任何命令加上 --help 可以查看命令可以带哪些参数。

## git 版本回退

1.**git log --pretty=oneline**查看版本信息，参数的意思是在一行显示。

2.使用 **git reset --hard 版本号前四位** 实现本地版本回退.

3.使用 **git push -f** 强制推送到远端，想要回到之前的版本，使用 **git reflog --all** 查看之前的所有版本修改，找到对应的版本号

4.使用 **git reset --hard 版本号前四位**实现版本跳转 5.执行 **git push**推送到远端

## node 相关

将 node 添加到 linux 的环境变量

1.找到 node 路径
/home/zzt/.nvm/versions/node/v9.2.0/bin

2.打开.bashrc
添加 export PATH="\$PATH:/home/zzt/.nvm/versions/node/v9.2.0/bin" 到最后一行保存 3.重启命令行

## git 分支操作

将其他仓库内的项目托管到 git 服务器
1、新建分支 **git branch gh-pages** 分支名必须叫做 gh-pages，可以使用 **git branch** 查看本地有哪些分支并且处于哪个分支。

    新建分支之后，新分支内的内容默认和主分支一样，但是之后单独对某个分支操作是不影响其他分支的。
    加 -r 参数可以查看远端分支

2、切换到新创建的分支 gh-pages,git checkout gh-pages 在该分支下修改某个文件。并执行 git 三步，第一次将本地分支上传到远端的时候会失败，并提示如何上传：使用**git push --set-upstream origin gh-pages**。创建新的分支之后也可以直接使用该命令将新分支直接上传。

    这样 gh-pages 分支下的index.html 就可以使用git免费服务器访问了，网址如下：
    用户名.github.io/仓库名
    不是访问 master 分支下的index.html

3、将 gh-pages 分支内做好的页面合并到主分支，切换到 master 分支，合并其他分支上的更新 **git merge gh-pages** 合并的时候必须保证主分支上的内容没有修改或要提交的。

## 写好的项目如何托管到 git 服务器

1、网上新建一个同名的空仓库。
2、将本地的项目文件初始化为 git 仓库
3、执行 git 三步上传，由于是第一次上传需要添加远端地址并上传。
4、新建 gh-pages 分支，并切换到该分支上传到远端。**git checkout -b gh-pages**新建一个分支并切换过去。
5、这样项目就能访问了。

## 更新项目

**master 分支上一般放项目的源码**
1、进入到 master 分支进行更新
2、更新 gh-pages 分支，切换到 gh-pages 分支，使用 **git pull origin master**拉取主分支上的更新。然后使用 git push 上传。

## 删除分支操作

1.首先得切换到主分支。

2.**git branch -d 分支名**:删除本地分支

3.**git branch -d -r origin/分支名**：删除远端分支

4.删除分支之后，需使用 **git push origin :分支名**，提交到远端
