 # 求第k 大数
    O(n)    k
    leetcode 215
    排序的变种
    快排 pivot
    小于pivot   pivot    大于pivot
    每个部分的长度

- git merge 和 git rebase 区别
    多分支开发的时候  开了个叉
    - git merge
        master
        feature
            分叉了commit 3
        切换到master  git switch master 
        git merge feature

        会新增节点

    - git rebase
        首先切换到feature 分支
            commit 3
        切换到master 
            git rebase feature
            transform-origin 变基
            feature 分支的所有提交 在master上再做一遍
            提交历史记录成直线
            解决冲突
            git rebase --continue

- 在大厂协作中，leader 是通过查看代码提交记录来了解项目和工作进度
    git merger 生成新的节点 达到合并代码的目的 但是分支一多 master 代码提交记录太多了 分叉多
    git rebase 解决了这个问题， 把要合并的所有提交记录都拷贝一份， 让主分支不分叉， 一条直线 提交记录可读性好

git merge和git rebase都是用来合并两个分支的命令，但是它们的方式不同。

git merge会创建一个新的合并提交，把两个分支的最新状态合并在一起，保留两个分支的提交历史。这样做的好处是不会破坏原来的分支历史，也可以保留合并的上下文信息。但是缺点是会产生额外的合并提交，可能导致提交历史变得复杂和混乱。

git rebase会把一个分支的提交重新应用到另一个分支的基础上，把两个分支的提交线性化，消除分叉。这样做的好处是可以让提交历史变得简洁和清晰，方便查看和回溯。但是缺点是会重写原来的分支历史，可能导致冲突和丢失信息，也不适合在公共分支上使用。

下面用图表示一下两种命令的过程：

假设有一个主分支master和一个功能分支feature，它们的初始状态如下：

```
A---B---C master
     \
      D---E feature
```

如果使用git merge命令，把feature合并到master，会产生一个新的合并提交F，如下：

```
A---B---C---F master
     \     /
      D---E feature
```

如果使用git rebase命令，把feature变基到master，会把D和E重新应用到C之后，如下：

```
A---B---C master
         \
          D'---E' feature
```

注意D'和E'是D和E的复制，并不是同一个提交。


好的，我可以给你一个实际的例子。

假设你和你的同事都在开发一个项目，你们都从远程仓库clone了master分支，然后在本地创建了各自的功能分支。你在feature1分支上开发了一个新功能，你的同事在feature2分支上修复了一个bug。你们都提交了自己的代码，并且推送到远程仓库。此时，远程仓库的状态如下：

```
A---B---C---G master
     \     \
      D---E feature1
       \
        F feature2
```

现在，你想把你的功能合并到master分支上，你有两种选择：merge或者rebase。

如果你选择merge，你需要先拉取远程仓库的最新状态，然后在本地执行git merge master命令，把master分支合并到feature1分支上。这样会产生一个新的合并提交H，如下：

```
A---B---C---G master
     \     \ \
      D---E---H feature1
       \
        F feature2
```

然后，你再推送feature1分支到远程仓库，并且创建一个pull request，请求把feature1分支合并到master分支上。如果没有冲突，这样会在master分支上再产生一个新的合并提交I，如下：

```
A---B---C---G---I master
     \     \ / /
      D---E-H feature1
       \
        F feature2
```

这样，你就完成了功能的合并，但是也产生了两个额外的合并提交，并且让提交历史变得复杂。

如果你选择rebase，你也需要先拉取远程仓库的最新状态，然后在本地执行git rebase master命令，把feature1分支变基到master分支上。这样会把D和E重新应用到G之后，如下：

```
A---B---C---G master
             \
              D'---E' feature1
       \
        F feature2
```

然后，你再推送feature1分支到远程仓库，并且创建一个pull request，请求把feature1分支合并到master分支上。这时候，因为feature1分支是基于master分支的最新状态的，所以不会有冲突，也不会产生额外的合并提交。master分支会直接快进到E'，如下：

```
A---B---C---G---D'---E' master, feature1
       \
        F feature2
```

这样，你也完成了功能的合并，但是没有产生额外的合并提交，并且让提交历史变得简洁。


- requestAnimationFrame 和 requestCallback 区别
    - 长列表 渲染
    - three.js 
    - 复杂动画
    宏任务 微任务
    - 时间分片机制的实现

    - requestAnimationFrame 会在浏览器下一次的重绘前指定回调函数， 每秒60次
    属于浏览器的宏任务 
    - App.vue -> 一堆组件(层级) -> mounted  接近一个执行时间单位
    主动去释放对runtime 的控制
        react fiber 机制 requestIdCallback 时间分片

        ```js
            function lazyLoadImages() {
                // 很多的话？
                // images 有点多
                const images = document.querySelectorAll('img[data-src]')
                Array.from(images).forEach(image => {
                    // image 
                    requestIdCallback(() => {
                        image.src = image.dataset.src;
                        image.removeAttribute('data-src')
                    })
                })
            }
        ```

    requestAnimationFrame 是浏览器提供的一种方法，用于在下一次浏览器重绘之前执行回调函数。这个方法通常用于执行动画或其他需要频繁更新的操作，因为它会尽量保持每秒60帧的刷新率，以提供流畅的动画效果。使用 requestAnimationFrame 还可以避免浏览器在执行过多的 JavaScript 代码时出现卡顿或延迟的情况。

    requestCallback 是一个 Web API，它提供了一种在不同浏览器中执行回调函数的方法。它是一个通用的异步回调函数方法，可以在浏览器中执行任何类型的回调函数。与 requestAnimationFrame 不同，requestCallback 不会在浏览器重绘之前执行回调函数。它只是将回调函数添加到任务队列中，并在当前任务完成后执行。这个方法通常用于处理一些不需要频繁更新的操作，例如网络请求、计算密集型操作或其他需要异步执行的任务。

    - 如何判断两棵二叉树是一样的
        - 树 递归的概念来定义

    - webpack 打包优化做了哪些？
        减少代码体积 加快打包速度 优化程序性能 提升用户体验

        - 代码压缩和混淆
            js 的压缩 UglifyJS/Terser(webpack5 内置) sayHello
            s(); 报错怎么办？ dev-tool: 'source-map'
            混淆 增加代码的安全性
            css 压缩
            cssNano  MiniCssExtractPlugin css从js抽离 单独打包
                CssMinimizerPlugin 压缩
                scoped 带来css的安全性
            webpack5 在生产阶段直接支持
        - gzip 压缩
            http 2.0 
        - tree shaking 去除无用的代码
            webpack 基于es6模块化 静态分析 无用代码
        - 图片压缩
            1. 较少的http请求数 用户体验 图片打包是打包大小的很大一部分
            < 8kb  base64
            test: /\.(png|jpe?g|gif|webp)$/i
            parse: {
                dataUrlCondition: {
                    maxSize: 30 * 1024
                }
            }
            2. webp 批处理
                node webp 的处理程序
        - webpack code splitting 只加载当前所需的模块
            import() 按需加载
            vue3 composition api  函数式
        - 框架按需加载
        - 图片懒加载 vue-lazyload
        - 使用 cdn vender 加载 js css 

    webpack是一个前端打包工具，它可以把多个模块和资源文件打包成一个或多个bundle文件，方便浏览器加载和执行。但是webpack打包的过程和结果也会影响到项目的性能和用户体验，所以需要进行一些优化。

    webpack打包优化的目标主要有两个：

    - 减少打包时间，提高开发效率
    - 减少打包体积，提高加载速度

    针对这两个目标，webpack打包优化的方法主要有以下几种：

    - 使用高版本的webpack和node.js，利用它们的性能优势和新特性
    - 使用多进程/多实例构建，利用happypack或thread-loader等插件，加速代码转换和打包
    - 使用缓存机制，利用cache-loader或hard-source-webpack-plugin等插件，缓存已经处理过的模块，避免重复编译
    - 使用DllPlugin和DllReferencePlugin插件，预编译一些不常变化的第三方库，减少编译时间和体积
    - 使用Tree Shaking技术，删除未引用的代码，减少无用代码的打包
    - 使用Code Splitting技术，按需加载或异步加载模块，避免一次性加载过多的代码
    - 使用SplitChunksPlugin插件，提取公共模块和第三方模块，避免重复打包
    - 使用MiniCssExtractPlugin插件，把CSS代码从JS文件中分离出来，减少JS文件的体积
    - 使用OptimizeCssAssetsWebpackPlugin插件，压缩CSS代码，去除无用的空格和注释
    - 使用TerserWebpackPlugin插件，压缩JS代码，去除无用的空格、注释和变量名
    - 使用CompressionWebpackPlugin插件，对打包后的文件进行gzip压缩，减少传输的数据量

- 淘宝跳转到天猫 为什么不需要要重新登录
    www.taobao.com www.tmall.com
    企业级的登录机制
    - 单点登录 sso SIngle sign on
        - 从淘宝 登录 颁发一个包含用户信息的令牌 token
            Access Token
        - 放在 cookie里
        - taobao Tmall 同一家公司 会向 .com 顶级域名服务器商 备案
            在tmall 也可以 读取并传输 samesite
    - 微信授权？
        公众号 
        - 为了用户安全  (OAuth2.0 协议)

        B端<------->微信(oAuth  Access  token 时间戳)<------->用户