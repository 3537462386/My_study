const Tags_col = require('../model/tags')
const Comment_col = require('../model/comment')

const getAllTags  = async (ctx, next) => {
    try {
      const result = await Tags_col.find()
      if (result) {
        ctx.body = {
          code: 1,  
          msg: '查询成功',
          data: result
        }
      }
    } catch (err) {
      console.error(err);
    }
}

const addTags = async (ctx, next) => {
    let account = ctx.request.body
    const addAccount = {
      name:account.name
    }
    const result = await Tags_col.create(addAccount)
    ctx.body = {
      code: 1,
      msg: '添加成功',
      data: result
    }
  }
  
module.exports = {
	getAllTags,
    addTags
}