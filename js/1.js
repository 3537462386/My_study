function qp (arr) {
    if(arr.length <= 1) {
        return  arr;
    }

    const p = Math.floor(arr.length / 2);
    const pi = arr[p]
    const l = []
    const r = []
    for(let i = 0; i < arr.length; i++) {
        if(i === p ) {
            continue
        }
        if(arr[i] < pi) {
            l.push(arr[i])
        }else {
            r.push(arr[i])
        }
    }

    return [...qp(l),pi,...qp(r)]
}

const a = [2,9,4,7,3,6,5]

const b = qp(a)
console.log(b)