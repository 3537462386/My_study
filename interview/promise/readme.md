# Promise   A+ 规范

- Promise 类 then catch
resolve reject all race
finally....
- 传一个参数，函数，也叫 
executor,立即执行
- executor有俩个参数， resolve,reject 函数
- 三个状态 pending fullfilled rejected  
    - pending , 可以转化为          后不可改变，并得到一个相应的值
                    - resolve 
                    - fulfilled
- executor 报错， 直接reject() 

- then(onFulfilled,onRejected)
    -state 为fulfilled , this.value -> onFulfilled 运行
    - rejected this.reason -> onRejected

- then 
    1. 如果异步，存起来 当状态发生改变， 执行
    2. 解决了回调地狱问题
        控制执行顺序    then 链式调用
        前一个promise then 怎么执行下一个then？
        return promise  2  object 
        promise value 