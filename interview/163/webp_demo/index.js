// node 的文件系统
const fs = require('fs');
const dirPath = 'images'
const sharp = require('sharp');

function converTowWebp(inputPath, outputPath, quality) {
    sharp(inputPath)
        .webp({quality: quality})
        .toFile(outputPath, (err, info) => {
            console.log(outputPath, 'done', new Date());
        })
}

fs.readdir(dirPath, (err, files) => {
    // 拿到目录信息
    files.forEach(async(file) => {
        const filePath = `${dirPath}/${file}`
        const outputFilePath = `${dirPath}/${file.replace(/.jpe?g|.png/gi, '.webp')}`
        await converTowWebp(filePath, outputFilePath, 80)
    })
})