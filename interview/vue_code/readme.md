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
