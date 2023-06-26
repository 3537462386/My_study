- 数据库类型
    - 关系型数据库 
        Mysql sql 语句 表关联  1:n 索引 外键
    - NoSQL
        mongodb  自由，js交流， json  

- express-generator
    - bin/www  服务器 上线目录 nginx 代理目录
    - mongoose 数据库驱动 mongodb://127.0.0.1:27017/test
    - cors 手写
    - 路由中间件  可以设置路由前缀

- crud
    restful 
    MVC Model 模型印射 ORM 
    存的时候自动生成 json 
    ORM 对象模型映射 Object-Relational Mapping
        Schema 
        简化的api
    - products
    - manufacturer

- mysql 和  mongodb 区别
    mongodb 对js 非常友好， 文档数据库，NOSQL 
    test->manufacturer(collection)->document(JSON)
    find({})
    .findOne
    .save()
    .update()
    .remove()
    id  自增   _id hash值 mongodb 来完成
