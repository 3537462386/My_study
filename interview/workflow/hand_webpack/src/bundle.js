const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

function stepOne(filename) {
    const content = fs.readFileSync(filename, 'utf-8')
    //根据文本生成抽象语法树    JSON 
    const ast = parser.parse(content, {
        sourceType: 'module'
    })
    // console.log(ast)
    const dependencies = [] //收集依赖关系 ， 计算出来优先级
    traverse(ast, {
        ImportDeclaration({ node }) {
            // console.log(node,node.source.value)
            const dirname = path.dirname(filename)
            // console.log(dirname)
            const newFile = './' + path.join(dirname, node.source.value)
            // console.log(newFile)
            dependencies[node.source.value] = newFile
        }
    })
    // console.log(dependencies)
    const { code } = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })
    // console.log(code)
    return {
        filename,
        dependencies,
        code
    }
}
//从入口 遍历沿路的所有风景
function stepTwo(entry) {
    const entryModule = stepOne(entry)
    // 图
    const graphArray = [entryModule]
    for (let i = 0; i < graphArray.length; i++) {
        const item = graphArray[i]
        const { dependencies } = item
        for (let j in dependencies) {
            graphArray.push(
                stepOne(dependencies[j])
            )
        }
    }
    // 生成图谱
    const graph = {}
    praphArray.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })
    return graph
}
// stepTwo('./src/index.js')
// 生成代码 文本 
function step3(entry) {
    const graph = JSON.stringify(stepTwo(entry))
    return `
    function localRequire(relativePath) {
        return require(graph[module].dependencies[relativePath]);
    }
    var exports = {};
    (function(require, exports, code) {
        eval(code);
    })(localRequire, exports, graph[module].code);
    return exports;
}
require('${entry}')
})(${graph})
    `
}   

const code = setp3('./src/index.js')
// console.log(code)
fs.writeFile('code.js','utf-8',code,function(err){
    if(!err) {
        console.log('写入成功')
    }
})
