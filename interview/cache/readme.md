# 前段性能优化最重要-- 缓存

- 静态资源缓存
    304 NOt Modified

- 第一次访问某站
    200 返回资源    花费时间
    走缓存


- node 的理解
    1. 如何返回一个 html 模板
        硬盘里 fs 读出来   字符串
        fs.readFile 异步的，不会阻塞node的单线程 node 的eventloop
        同样的硬件的能力下  多让一些用户访问 服务器价格便宜
        index.js 内存 -> fs(I/O) -> 硬盘 -> 回调函数 -> 第一个参数是err(文件路径存在，固态硬盘和机械硬盘的区别)，第二个参数是数据 

    2. readFilelSync 同步， 不太常用 ， 性能不好 
    3. 流的概念
        二进制文件的处理思想
        fs.createReadStream()

- 图片格式
    jpg png 区别
    1、JPG格式是一种有损压缩格式，而PNG是无损压缩算法的位图格式。

    2、由于JPG是有损格式，将图像压缩在很小的储存空间，一定程度上会造成图像数据的损伤，会造成锯齿状边缘。而PNG可以为原图像定义256个透明层次，使图片边缘平滑融合，从而消除图片锯齿边缘。

    3、在使用中jpg不能作为透明图片使用，而PNG支持透明效果，可以作为背景透明的图片使用。
    webp 同样的清晰度，体积只有1/2 1/3

- 缓存
    1. 服务器端开启缓存 强缓存
        - 返回资源的同时， Exipres  过期时间 setHeader('Exipres',时间)
            本地缓存这个图片时，Exipres 写入
        - 再次请求 /two.png 前端缓存就挡道 有没有缓存
            本地的时钟和缓存的 Exipres 时间 比较 走缓存 或者走后端
        - 本地的时钟不准确 Exipres 不准确

    2. HTTP 1.1 更新 Cache-Control 相对时间
        maxAge 倒计时

- 强缓存
    expires http 1.0 
    cache-control max-age

- 缓存过期了怎么办？ 一定要重写请求吗？
    强缓存过期  但是服务器文件 变了 或者 没变

- 协商缓存
    Last-Modified + If-modified-Since
    Etag +  If-None-Match