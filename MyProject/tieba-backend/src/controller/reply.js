const Reply_col = require('../model/reply')
const Comment_col = require('../model/comment')
// 增加回复
const addReply = async (ctx, next) => {
    let account = ctx.request.body
    const addAccount = {
      commentId: account.commentId,
      content: account.content,
      author: account.author
    }
    const result = await Reply_col.create(addAccount)
    const result2 = await Comment_col.updateOne(
      { _id: account.commentId },
      { $push: { replies: result._id } }
    )
    ctx.body = {
      code: 1,
      msg: '添加成功',
      data: result2
    }
  }

// 删除评论
const deleteReply = async (ctx, next) => {
  try {
    const { _id } = ctx.request.body
    const result = await Reply_col.deleteOne({ _id: _id })
    if (result && result.deletedCount > 0) {
      ctx.body = {
        code: 1,
        msg: '删除成功',
        data: result,
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '删除失败',
        data: result,
      }
    }
  } catch (err) {
    console.log(err)
    ctx.body = {
      code: -1,
      msg: '服务器异常，请稍后再试！',
      data: err.message,
    }
  }
}

module.exports = {
	addReply,
  deleteReply
}