# 滴滴实习

- 滴滴的难度如何？
    - 比较简单
    - 比发展快，薪资高的公司 容易
    - 扎实的前端基础
        20%的高质量 完整度 惊喜讲出来
- 投递策略
    1. 定向投
    2. 投多个

- css 的布局有哪些？
    回答思路：需要的各种布局，从文档流->俩列/三列布局->新的BFC(弹性/网格)->相对(定位)-> table布局 脑图
    - 三列布局
        - 块级元素默认从上到下，
        - 脱离文档流或开辟新的BFC(flex，inline-flex，inline宽度高度不可以，inline-block font-size:0) 
        - 浮动
            圣杯 1.padding 把左右都留出来 2. 三个元素都浮动 3.main width 100% 4.left margin-left -100% 5.position:relative;left:-200px;margin-left:-100%;
            和双飞翼   
            - 中间列要能够宽度自适应 
            - 中间列要优先渲染
        - 弹性布局 
            实现简单 flex:1 缺：兼容性问题
    - 流式布局  flow
        默认布局方式 元素从上到下，从左到右布局
    - 浮动布局  
    - 弹性布局  阮一峰
    - 网格布局 display:Grid 
        复杂的行列布局  九宫格
    - 绝对定位布局
        通过设置元素的position属性为absolute或fixed，在父级元素中的位置即使改变也可以不变
    - 表格布局 

- es6  symbol BigInt
    7 种数据类型 
    新的数据结构 map/set weakmap weakset 
    js 数据类型 
    - 如何判断类型
    - Symbol 的用法，应用场景 
        唯一的
        - 对象属性名的定义 
            大型多人项目中 不会覆盖原有属性方法
        - 不重要的属性不出现在对象遍历
            Object.getOwnPropertySymbols()
        - 类的私有属性或方法
            1. es6 目标 让js 成为大型企业级开发语言，需要提供private能力
            class extends
            2. 约定大于一切 _method()
            3. 类的开发者和使用者解耦
                类复杂的话，开发者没有必要，隐藏一些复杂的细节，不能被调用者随便使用
                公有方法 简单的 好用的
                私有方法 难度 有规矩的 使用者没有必要去搞的
                Symbol() 使用者 不可能去 加大了使用者犯错的难度

- js 判断类型的方法
    - typeof
        null Array Object 子类型 
    - instanceof
        构造函数在对象的原型链上
    - Object.prototype.toString.call()
        子类型
    之外，假如我们还要添加新的数据结构判断能力
    - isSet    isMap



