// symbol  的 用途
// Symbol class 私有属性 方法
// Symbol 迭代对象的时候 过滤不必要的属性
// Object.values()
const obj = {}
const a = Symbol('a')
const b = Symbol('b')
// 唯一 暂时用下
object[a] = 'hello'
object[b] = 'world'
// 重要
object.x = 'x'
object.y = 'y'
for (let key in object) {
    console.log(key, object[key]);
}
console.log(Object.getOwnPropertyNames(object));
console.log(Object.getOwnPropertySymbols(object));