#  全栈项目及vue 考点表达

- front + backend 
    1. 前后端分离 
    2. 前端使用vue +vite 全家桶单页应用开发
    3. 后端用node + mysql 提供接口服务

- 如何介绍vue 项目架构
    - 使用vite + vue 全家桶开发单页应用
        - vite比webpack 快，不需要全部打包， 按需加载，转译，执行，
            vite默认启用esm 
        - composition api + setup 语法 将类式组件 函数化， hooks编程
            更好理解，更好复用，更好tree-shaking
    - 移动商城使用lib-flexible rem适配,  assets/main.css 组织了css的模块化(reset 样式组件（1px）css 变量 )
    - 使用better-scroll 实现移动端滚动 (性能，体验)
    - 使用axios 封装http请求，拦截器，请求错误处理，请求loading
    - 使用less 做样式预编译，变量，mixin,嵌套等css增强和模块化能力
    - 使用lib-flexible rem适配,  
    - 使用vant ui组件库，按需加载，减少打包体积
    - 使用three.js 数据可视化，3D看品· 亮点

- 功能细节
    - css 架构
        - css入口文件main.css 模块化 base.css / theme.css .... 
        - css 4变量  维护更好
        - 移动端IE盒模型更好打理宽度
        - app.vue 全局样式， 最外层容器水平方向不超出，垂直方向可以一直滚动，通用滑屏阅读模式
    - better-scroll 用法
        - 移动端优化滚动的必备组件, 接近原生的android/ios
        - 横向/竖向 
        - 滚动容器 ref 标记
        - nextTick 实力化， 配置方向和容器
        - refresh 一下
    - 路由管理
        - history or hash 
            原理
        - 路由懒加载
            加快首页渲染 按需加载
        - useRouter  useRoute hooks 函数
            router  路由管理对象  跳转 
            route  当前路由对象  params
        - 路由守卫
            登录校验跳转
            页面切换特效

    - 状态管理设计
        - 采用pinia 更简单，函数化，性能更好
        - 分离式状态管理， 而不是全局的
        - pinia 语法老版本  类似于vuex 
        - 步骤
            - defineStore pinia composition api 
            - 第二个参数如果是对象， vuex 写法， 如果 是函数呢 setup 写法 
    - vant 组件库使用总结
        使用 van-pull-refresh 实现下拉刷新
    - axios 
        - api/axios 统一配置 baseURL
            baseURL 开始的时候可能是fastmock
            上线阶段切换成 线上真实接口地址
        - 请求响应拦截
            request   authorization token 
            response 500  vant message 



- 组件化介绍
    - 项目封装了Header/HomeHeader/Footer/AllTypes/GoodsList 等组件， 页面由组件构成，而不是标签
        组件树 vue-devtool
    - 组件封装的指导思想是 封装（隐藏细节，合作调用）复用
    - UI组件库（vant）通用组件（components） 路由组件(pages)
        状态组件/无状态组件 父子组件 共享组件 Layout组件 Suspense组件 Fragment组件 Portal组件

- 功能模块设计
    - 登录 注册
    - 搜索
        - 使用vant-swiper 垂直滚动搜索热词
        - lazyload 防抖搜索 
        - 搜索记录localStorage 存储和展示
        - 分成搜索和搜索结果展示页

    - 首页幻灯片使用vant-swipe 
    - 详情页
        - useRoute 解构查询参数 :id
        - axios 请求 data
        - 后端是使用 goods.js 模拟的
        - 相似产品的推荐
        - van-action-bar 加入购物车等底栏

- 项目特色
    - 代码风格良好，注意注释编写，提高代码可读性

- 项目难点

- 项目做了哪些优化
    - tree-shaking 不用的代码不打包
    - 按需加载vant组件库，减少打包体积
    - 路由的懒加载，按需加载，减少打包体积
        wepback splitChunks 
    - iconfont使用CDN加载，未来打包后的静态资源都会发布到cdn服务器
    - 图片懒加载
        - 首页幻灯片
    

- 考点
    - computed和watch 区别
        计算属性 返回值 pinia state -> setup computed -> ui  {{}}
        watch 监听 没有返回值， 监听一个或多个，执行复杂业务
    - 如果需要根据其他响应式数据进行复杂的计算，使用 computed。
        如果需要监听一个或多个特定的响应式数据的变化，并执行相应的操作，使用 watch

// - vuex 和 pinia 区别？
//     状态管理的设计模式
//     - vuex  全局共享状态
//         state action mutation getters 
//         module 
//         dispatch commit 
//     - vuex 过于复杂，函数式编程hooks 
//         pinia 新时代的vuex 
//         - 分离的， vuex是树状的
// 提供响应式的状态和修改的方法
    - v-if v-show 的区别
        - v-if 条件渲染指令 动态的编译和渲染，false 不会在DOM中
        - v-show 切换指令 通过 CSS 的 display 属性来控制元素的显示
        - 性能开销
            平凡切换，v-show适合， v-if 重复的编译挂载
        - 初始渲染延迟
            v-if 比较适合在初始加载时有大量隐藏内容的情况 
            v-show 适合于需要快速显示的情况
        v-if  PC登录模态框
        v-show ajax 搜索列表建议 
    - 工程化
        webpack entry output bundle.js
        - 懒加载
            bundle.js（小了） + chunks(n个, 异步加载)
            optimization: {
                splitChunks: {
                chunks: 'all'
                }
            }
    - es6 与项目结合
        - localStorage.setItem(), JSON.stringify()
            .getItem()  JSON.parse()
        - 深拷贝
            对象 
            JSON.parse(JSON.stringify())
            - 函数/循环引用
        -  搜索历史记录
            json 数组， 交给 new Set()  唯一



- vant 组件库使用小结
    - van-swipe/van-swipe-item 轮播图
    -  van-tab/van-tab-item  底栏
    - van-pull-refresh 下拉刷新
    - js toast close 
    - van-nav-bar header 