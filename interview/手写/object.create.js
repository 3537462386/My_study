function create (obj) {
    function F () {}
    F.prototype = obj
    return new F()
}

let a = 4
a=5
console.log(a)