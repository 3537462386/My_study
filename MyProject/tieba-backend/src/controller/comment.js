const Comment_col = require('../model/comment')
const Post_col = require('../model/post')
const config = require('../config/config')

// 获取所有
const getCommentByPost = async (ctx, next) => {
  const post_data = await Post_col.findById(ctx.request.body.postId)
  .populate({
    path: 'comments',
    model: 'comment',
    populate: {
      path: 'replies',
      model: 'reply',
    },
  })
  if (post_data) {
    ctx.body = {
      code: 1,
      msg: '查询成功',
      data: post_data
    }
  }
}

// 增加评论
const addComment = async (ctx, next) => {
  let account = ctx.request.body
  const addAccount = {
    postId: account.postId,
    content: account.content,
    author: account.author
  }
  const result = await Comment_col.create(addAccount)
  const result2 = await Post_col.updateOne(
    { _id: account.postId },
    { $push: { comments: result._id } }
  )
  ctx.body = {
    code: 1,
    msg: '添加成功',
    data: result2
  }
}

// 删除评论
const deleteComment = async (ctx, next) => {
  try {
    const { _id } = ctx.request.body
    const result = await Comment_col.deleteOne({ _id: _id })
    if (result && result.deletedCount > 0) {
      ctx.body = {
        code: 1,
        msg: '删除成功',
        data: result,
      };
    } else {
      ctx.body = {
        code: -1,
        msg: '删除失败',
        data: result,
      };
    }
  } catch (err) {
    console.log(err);
    ctx.body = {
      code: -1,
      msg: '服务器异常，请稍后再试！',
      data: err.message,
    };
  }
};



module.exports = {
  addComment,
  deleteComment,
  getCommentByPost
}