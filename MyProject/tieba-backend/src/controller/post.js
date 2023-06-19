const Post_col = require('../model/post')
const Tags_col = require('../model/tags')
const User_col = require('../model/user')
const config = require('../config/config')

// 获取所有贴子
const getAll  = async (ctx, next) => {
  try {
    const result = await Post_col.find()
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
// 获取用户的所有贴子
const getPostByUser  = async (ctx, next) => {
  const { author } = ctx.request.body
  // console.log(author)
  try {
    const result = await Post_col.find({ author:author })
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
// 获取贴吧的所有贴子
const getPostByTags  = async (ctx, next) => {
  const { tags } = ctx.request.body
  console.log(tags)
  try {
    const result = await Post_col.find({ tags:tags })
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
// 发表贴子
const addPost = async (ctx, next) => {
  let account = ctx.request.body
  console.log(account)
  let addAccount = {
    title: account.title,
    content: account.content
  }
  const tagsId = await Tags_col.findOne({name:account.tags})
  const userId = await User_col.findOne({username:'13184660710'})
  if(account.imgs.length != 0){
    const result = await Post_col.create({...addAccount,imgs:account.imgs,tagsId:tagsId})
    const result2 = await Tags_col.updateOne(
      { name: account.tags },
      { $push: { posts: result._id } }
    )
  }else{
    const result = await Post_col.create({...addAccount,tagsId:tagsId,author:userId})
    const result2 = await Tags_col.updateOne(
      { name: account.tags },
      { $push: { posts: result._id } }
    )
  }
  ctx.body = {
    code: 1,
    msg: '添加成功'
  }

}

// 删除贴子
const deletePost = async (ctx, next) => {
  try {
    const { _id } = ctx.request.body
    const result = await Post_col.deleteOne({ _id: _id })
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
      msg: '器异常，服务请稍后再试！',
      data: err.message,
    };
  }
};



module.exports = {
  getAll,
  getPostByTags,
  getPostByUser,
  addPost,
  deletePost
}