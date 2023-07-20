const Post_col = require('../model/post')
const Tags_col = require('../model/tags')
const User_col = require('../model/user')
const config = require('../config/config')
// 获取所有贴子
const getAll  = async (ctx, next) => {
  const {userId} = ctx.request.body // 获取当前用户 ID
  if (userId) {
    try {
      const posts = await Post_col.aggregate([
        // 首先，使用 $lookup 阶段将 User 中的 likes 数组和 Post 集合进行关联
        {
          $lookup: {
            from: 'users',
            let: { userId: userId },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ['$_id', '$$userId'] }
                }
              },
              {
                $project: {
                  likes: 1
                }
              }
            ],
            as: 'user'
          }
        },
        // 然后，使用 $addFields 阶段添加一个名为 isLiked 的字段，表示当前用户是否点赞该文章
        {
          $addFields: {
            isLiked: {
              $in: ['$_id', '$user.likes']
            }
          }
        },
        // 最后，使用 $project 阶段将关联结果中不需要的字段去除，只保留需要的字段
        {
          $project: {
            _id: 1,
            title: 1,
            content: 1,
            imgs: 1,
            author: 1,
            comments: 1,
            tagsId: 1,
            relay: 1,
            likes: 1,
            createdAt: 1,
            updatedAt: 1,
            isLiked: 1
          }
        }
      ]);
      
      if (posts) {
        ctx.body = {
          code: 1,  
          msg: '查询成功',
          data: posts
        }
      }
    } catch (err) {
      console.error(err);
    }
  }else {
    try {
      const posts = await Post_col.find()
      if (posts) {
        ctx.body = {
          code: 1,  
          msg: '查询成功',
          data: posts
        }
      }
    }catch (err) {
      console.error(err);
    }
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
    content: account.content,
    author: account.userId
  }
  const tagsId = await Tags_col.findOne({name:account.tags})
  // const userId = await User_col.findOne({username:'13184660710'})
  console.log({...addAccount,tagsId:tagsId})
  if(account.imgs.length != 0){
    const result = await Post_col.create({...addAccount,imgs:account.imgs,tagsId:tagsId._id})
    const result2 = await Tags_col.updateOne(
      { name: account.tags },
      { $push: { posts: result._id } }
    )
  }else{
    const result = await Post_col.create({tagsId:tagsId._id,...addAccount})
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

// 点赞取消贴子
const likePost  = async (ctx, next) => {
  let account = ctx.request.body

  try {
    const isLiked = await User_col.exists({ _id: account.userId, likes: account.postId })
    if(isLiked){
      await Post_col.updateOne({ _id: account.postId }, { $inc: { likes: -1 }})
      await User_col.updateOne({ _id: account.userId }, { $pull: { likes: account.postId }})
    }else{
      await Post_col.updateOne({ _id: account.postId }, { $inc: { likes: 1 }})
      await User_col.updateOne({ _id: account.userId }, { $push: { likes: account.postId }})
    }
  } catch (err) {
    console.error(err);
  }
}



// 转发贴子
const relayPost  = async (ctx, next) => {
  try {
    const result = await Post.updateOne({ _id: postId }, { $inc: { relay: 1 }})
    if (result) {
      ctx.body = {
        code: 1,  
        msg: '转发成功',
        data: result
      }
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAll,
  getPostByTags,
  getPostByUser,
  addPost,
  deletePost,
  likePost,
  relayPost
}