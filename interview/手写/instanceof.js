const myInstanceof =  (left,right) => {
    const proto = Object.getPrototypeOf(left)
    prototype = right.prototype

    while(true) {
        if(!proto) return false
        if(proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

console.log(myInstanceof([1,2],Array))
// true
