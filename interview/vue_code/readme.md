- 组件通信
  - 8种
    - props / emit
    - eventbus vue2.0 3.0废弃了 事件总线
    - provide inject 崛起
    - ref/defineExpose 
    - vuex/pinia
    - localStorage
    - $parent $child vue2.0 vue3.0废弃
    - attrs
  - 3类
    父子
    兄弟组件
    跨层级
  - 底层原理是什么
      设计模式 订阅发布者模式

      - provide
  
- EventBus
    vue 2.0 new EventBus 基于事件消息机制（on 订阅 emit 触发）实现通信
    3.0 结合 mitt 第三方EventEmitter 库也可以
    provide + inject 代替了他们



- https://github.com/front-refined/refined-vue3-ts-component-modal
    1. 收集岗位信息 值日
    2. 面试的一些问题
        50%
        - 手写 Promise js底层 练手
            看 
        - 面试沟通的技巧
        - vue 深入 mvvm 组件设计
        - 数据可视化 
        - 写文章

- 请设计Modal 组件
    - 入职后工作 写组件 用组件 研究组件 
    - 组件 
        - HTML 6 Web Component 
        - 抽象能力 
            严谨 满足需求 通用性 
            - 如何让Modal 组件全局化？
                Vue.use(Modal)
                本质是？ install 方法 -> app.component(name,...)
            - 如何发布到npm ？
                一定的目录结构和要求
                plugins
                    要求
    - 组件设计 
        好的组件一定是先设计的
        抽象好
        title + footer(button 取消 确定) + content(slot)
        props title v-model show
    - 需求分析
        - 遮罩层 点击 退出modal
        - 标题内容 主题内容 确定 取消 事件等
        - typescript 
        - 支持国际化 
    - 实现流程
    - 项目亮点加上设计了某某通用组件

- vue2 和 vue3 响应式的区别
    defineProperty 与 proxy 区别


    - defineProperty 返回的是对象本身
        proxy 返回的是代理对象
        通过handler 有多达十几种的对象行为，属性操作拦截

- defineProperty 缺点是什么？
    -兼容性 es5+
    - 性能比proxy好 没有生成代理对象 和之中的handler
    - 可读性更好 学习成本低 
- defineProperty 缺点是什么？
    - 对象行为不可以监听
        get set 是属性的操作
        proxy has  deleteProperty
        ownKeys() set()
        setOwnPropertyDescitor()
    - 不能监听数组的变化 length
        通过重写那7个方法达到

- proxy 优点
    - 代理整个对象
    - 监听数组
    - Map Set 监听
    - 监听新增删除

- reflect 对象理解
    - Reflect es6 新的内置对象 不能被new
        Reflect.get set() has()   .   []  =   对象操作符
    - 结合proxy 替代一些运算符， 支持 拦截 
