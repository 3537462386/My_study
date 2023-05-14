const http = require('http')

const server = http.createServer()
// on 想到什么？eventEmitter实例
server.on("request",async (req,res) => {
    // cors 跨域方案， cros 库 
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    // 与HEAD 类型 客服端查看服务器端的性能， 等指标
    // POST ajax 发送OPTIONS请求 跨域
    if(req.method === "OPTIONS") {
        res.status = 200;
        res.end()
        return
    }

    res.end('hello world')

    //耗时
    // - post data 
    // - 文件上传 写入

})
server.listen(8888,()=> console.log('in 8888'))