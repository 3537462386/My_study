- 多级路由
    1. 首页， 商品列表 购物车   PC网站
    2. 后台
        独立的系统 路由的嵌套
    3. express  api 

- vuex 架构
    - store/index.js
        树根上 集合
    - 四部分模块化
        -mutation-types.js 变化清单
    - modules 

- 项目里做了哪些优化？
    - 列表类组件化
        - 直接在组件内请求数据，响应式
        - UI 组件和数据管理的分离
        - actions 请求接口
            mutations 修改数据
            computed 去拿到状态
        - 组件分离 粒度 
            维护良好的组件树（DOM树没有可读性） 可读性 维护性 
            - 循环 Item 组件
            - button 组件 加入购物车的vuex 逻辑
