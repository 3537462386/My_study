let express = require('express')

let app = express() // 后端应用APP 
// 添加路由
// HTTP 是一个简单协议， 基于TCP/IP　基于请求响应　
// 使用上网代理（浏览器），输入地址　http://localhost:3000/say 
// 请求行  GET  http://localhost:3000/say   1.1
// 请求头  COOKIE  Authorization  

// 后端放水
let whiteList = ['http://127.0.0.1:5555']
// app.use((req,res,next)=>{
//     // 那些跨域请求通过 origin 不太了解  *所有都过
//     let  origin = req.headers.origin
//     if( whiteList.includes(origin)) {
//             res.setHeader('Access-Control-Allow-Origin',origin)
//             // DEL PUT 整个替换 PATCH 部分修改 修改
//             // Restful 一切皆资源 请求资源时候，应该使用相应的请求方法
//             res.setHeader('Access-Control-Allow-Methods','GET,POST')
//             res.setHeader('Access-Control-Allow-Credentials',true)
//     }
//     console.log(origin,'||||||||||')

//     console.log('```````````````````````````')
//     next()
// })   // 中间件

app.get('/say', function(req, res) {
    let jsonData = {
        name: '蔡总帅',
        favor: ['喝酒','ada']
    }
    // res.end('hello, say')
    res.setHeader('Content-Type', 'text/json;charset=utf8')
    res.send(JSON.stringify(jsonData))
})

app.listen(3000)

