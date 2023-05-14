const obj = {
    [Symbol()]:1
}
// 简单数据类型 不能 new 
// symbol label 标识
const a= Symbol('a')
const b = Symbol('b')
// Map 
obj[a] = 'hello' //唯一的 