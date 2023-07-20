const User_col = require('../model/user')
const Post_col = require('../model/post')
const config = require('../config/config')
const Pass_col = require('../model/password')
const {
	validate,
	sign,
	encrypt
} = require('../utils/password')

const getAll = async (ctx, next) => {
	const post_data = await User_col.find()
	if (post_data) {
		ctx.body = {
			code: 1,
			msg: '查询成功',
			data: post_data
		}
	}
}

// 登录操作
const login = async (ctx, next) => {
	console.log('body:', ctx.request.body);
	const { username, password } = ctx.request.body;
	// 查表
	const user_data = await User_col.findOne({
		username: username
	})
	console.log(user_data);
	if (!user_data) {//不存在
		ctx.status = 200;
		ctx.body = {
			code: 0,
			msg: '用户不存在'
		}
		console.log("用户不存在")
		return;
	}
	// 存在用户名，判断密码是否输入正确
	if (user_data) {
		const name = user_data._id
		const pass = await Pass_col.findOne({
			userId: name
		})
		let jwtToken = sign({ username: user_data.username })
		const result = await validate(password, pass.hash)
		if (result) {//密码正确
			ctx.body = {
				code: 1,
				msg: '登录成功',
				data: user_data,
				token: jwtToken
			}
			console.log("登录成功")
		} else {
			ctx.status = 200
			ctx.body = {
				code: -1,
				msg: '密码错误'
			}
			console.log("密码错误")
		}
	}
}

// 注册操作
const register = async (ctx, next) => {
	const { username, password } = ctx.request.body
	console.log('register', username, password)
	// 查表
	let result = await User_col.findOne({
		username: username
	})
	if (result) {
		ctx.body = {
			code: 0,
			msg: '用户已存在'
		}
		console.log("用户已存在")
		return;
	}
	let newUser = await User_col.create({
		username: username
	})
	await encrypt(password, config.saltTimes).then(async (hash) => {
		let result2 = await Pass_col.create({
			userId: newUser._id,
			hash: hash
		})
		if (result2) {
			// console.log(newStu.userId,newStu.username);
			ctx.body = {
				code: 1,
				msg: '注册成功',
				data: {
					userId: newUser._id,
					username: username
				}
			}
			console.log("注册成功")
		} else {
			ctx.body = {
				code: 0,
				msg: '注册失败'
			}
			console.log("注册失败")
		}
	})

}
//收藏贴子
const collectPost = async (ctx, next) => {
	const { userId, postId } = ctx.request.body
	// console.log(userId, postId)
	try {
		// 查找并更新用户模型，在 collects 数组中添加目标文章 ID
		const user = await User_col.findByIdAndUpdate(
			userId,
			{ $addToSet: { collects: postId } },
			{ new: true } // 返回更新后的文档数据
		).populate('collects')
		if (!user) {
			ctx.body = {
				code: -1,
				msg: '收藏失败'
			}
			return
		} else {
			ctx.body = {
				code: 1,
				msg: '收藏成功'
			}
			return
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			msg: '服务器异常，服务请稍后再试！'
		}
		return
	}
}
//取消收藏贴子
const unCollectPost = async (ctx, next) => {
	const { userId, postId } = ctx.request.body
	// console.log(userId, postId)
	try {
		// 查找并更新用户模型，在 collects 数组中添加目标文章 ID
		const user = await User_col.findByIdAndUpdate(
			userId,
			{ $pull: { collects: postId } },
			{ new: true } // 返回更新后的文档数据
		).populate('collects');
		if (!user) {
			ctx.body = {
				code: -1,
				msg: '取消失败'
			}
			return
		} else {
			ctx.body = {
				code: 1,
				msg: '取消成功'
			}
			return
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			msg: '服务器异常，服务请稍后再试！'
		}
		return
	}
}
//查找用户收藏的贴子
const getPostByCollect = async (ctx, next) => {
	const { userId } = ctx.request.body
	// console.log(userId)
	try {
		const result = await User_col.findById(userId)
			.populate('collects')
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
//点赞贴子
const likePost = async (ctx, next) => {
	const { userId, postId } = ctx.request.body
	// console.log(userId, postId)
	try {
		// 查找并更新用户模型，在 likes 数组中添加目标文章 ID
		const user = await User_col.findByIdAndUpdate(
			userId,
			{ $addToSet: { likes: postId } },
			{ new: true } // 返回更新后的文档数据
		).populate('likes')
		const post = await Post_col.findByIdAndUpdate(postId, { $inc: { likes: 1 } })
		if (!user) {
			ctx.body = {
				code: -1,
				msg: '点赞失败'
			}
			return
		} else {
			ctx.body = {
				code: 1,
				msg: '点赞成功'
			}
			return
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			msg: '服务器异常，服务请稍后再试！'
		}
		return
	}
}
//取消点赞贴子
const unLikePost = async (ctx, next) => {
	const { userId, postId } = ctx.request.body
	// console.log(userId, postId)
	try {
		// 查找并更新用户模型，在 likes 数组中添加目标文章 ID
		const user = await User_col.findByIdAndUpdate(
			userId,
			{ $pull: { likes: postId } },
			{ new: true } // 返回更新后的文档数据
		).populate('likes')
		const post = await Post_col.findByIdAndUpdate(postId, { $inc: { likes: -1 } })
		if (!user) {
			ctx.body = {
				code: -1,
				msg: '取消失败'
			}
			return
		} else {
			ctx.body = {
				code: 1,
				msg: '取消成功'
			}
			return
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			msg: '服务器异常，服务请稍后再试！'
		}
		return
	}
}
//查找用户点赞的贴子
const getPostByLike = async (ctx, next) => {
	const { userId } = ctx.request.body
	// console.log(userId)
	try {
		const result = await User_col.findById(userId)
			.populate('likes')
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
module.exports = {
	login,
	register,
	getAll,
	getPostByCollect,
	collectPost,
	getPostByLike,
	likePost,
	unCollectPost,
	unLikePost
}
