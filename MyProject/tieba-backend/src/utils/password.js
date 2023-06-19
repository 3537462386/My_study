const bcrypt = require('bcrypt');

// 使用bcrypt加密密码
const encrypt = async (password, saltTimes) => {
    const hash = await bcrypt.hash(password, saltTimes);
    return hash
}

// 密码校验
const validate = async (password, hash) => {
    const result = await bcrypt.compare(password, hash);
    return result;
}

const jwt = require('jsonwebtoken');
// 生成token
function sign(option) {
    // 第一个参数可以描述账号信息的对象，
    return jwt.sign(option, 'token', {
        //过期时间、s
        expiresIn: 600
    })
}

// 校验
let verify = () => (ctx, next) => {
    // 获取前端穿过来的token
    let jwtToken = ctx.req.headers.authorization
    if (jwtToken) {//存在，则校验
        jwt.verify(jwtToken, 'token', function (error, decoded) {//error错误
            if (error) {//校验token不合法
                console.log('toekn失效');
                ctx.body = {
                    status: 401,
                    message: 'token失效'
                }
            } else {
                next()//不校验权限
            }
        })
    }else {
        ctx.body = {
            status: 401,
            message: '请提供token'
        }
    }
}
// export default不能在node环境下使用
module.exports = {
    encrypt,
    validate,
    sign,
    verify
}
