import { observe } from './observer'
// 设计模式
// Vue React 
// 组件 类
function MVVM (options) {
    var self = this  //解决this 丢失问题
    this.data = options.data
    this.methods = options.methods
    // this.title  =  this.data.title
    Object.keys(this.data).forEach(function(key) {
        self.proxyKeys(key)
    })
    // defineProperty set -> 响应式 effect 解耦
    // 观察者模式 
    observer(this.data)
}

MVVM.prototype = {
    proxyKeys:function(key) {
        var self = this
        Object.defineProperty(this,key,{
            enumerable:false,
            configurable:true,
            get:function getter() {
                return self.data[key]
            },
            set:function setter(newVal) {
                self.data[key] = newVal
            }

        })
    }
}