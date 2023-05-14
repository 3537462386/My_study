const http = require('http')
const path = require('path')
const fs = require('fs')
// www.baidu.com -> dns 解析 // ngnix 调度负载均衡服务器（算法) 访问代理 多线程， 多人访问 500-1000人*1000台  -> 服务器集群 -> 某台服务器 多核CPU -> node 单线程 (容错处理  try catch )
// cdn 服务器  piccdn.baidu.com 内容分发网络  内容不变的 速度
// https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/149.9ccface.css
// 带宽资源
http
    .createServer((req, res) => {
        if (req.url === '/') {
            fs.createReadStream(
                path.join(__dirname, 'index.html')
            )
            .pipe(res)
            return
        }
        // 3个图片 * n 个用户 并发  缓存很重要  强缓存 
        // HTTP 0.9 没有提供 HTTP 1.0 Expires 
        let abs = path.join(__dirname, req.url)
        fs.stat(abs, (err, stat) => {
            if (err) {
                res.statusCode = 404
                res.end('Not Found')
                return
            }
            if (stat.isFile()) {
                res.setHeader('Cache-Control', 'max-age=00')
                
                if (req.headers['if-modified-since'] === stat.mtime.toGMTString()) {
                    res.statusCode = 304
                    res.end()
                    return
                }
                res.setHeader('Last-Modified', stat.mtime.toGMTString())
                // console.log(stat.ctime.toGMTString())
                fs.createReadStream(abs).pipe(res)
            }
        })


    })
    .listen(8888)