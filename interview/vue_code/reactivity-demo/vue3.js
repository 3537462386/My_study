let effective

function effect(fn) {
  effective = fn
}

function reactive(data) {
  if (typeof data !== 'object' || data === null) {
    return data
  }
  const observed = new Proxy(data, {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver)
      
      return typeof result !== 'object' ? result : reactive(result)
    },
    set() {
      effective()
      const ret = Reflect.deleteProperty(target, key)
      return ret
    }
  })

  return observed
}