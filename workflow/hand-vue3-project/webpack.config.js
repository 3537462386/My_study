// webpack 工程化的配置文件
const path = require('path')  // 引入path node 内置路径模块
const htmlWebpackPlugin = require('html-webpack-plugin')
const { title } = require('process')
// html + js 结合起来
console.log(path.resolve(__dirname, './src/main.js'))
module.exports = { // commonjs 模块化输出 
    entry: path.resolve(__dirname, './src/main.js'),
    // 工艺流程
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    //App.vue  .js 
    // tempalte
    // script     .vue 格式   -> vite webpack 工程化  .vue -> .js 
    // style 
    plugins:{
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,'./index.html'),
            filename:'index.html',
            title:'手搭 vue 开发环境'
        })
    }
}