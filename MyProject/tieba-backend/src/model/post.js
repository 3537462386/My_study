const mongoose = require('mongoose')
// 专门做映射表
const Schema = mongoose.Schema;
// _id: 帖子 ID
// title: 标题
// content: 内容
// author: 作者 ID
// comments: 评论列表（由 Comment 对象组成的数组）
// tags: 属于哪个贴吧的文章
// relay: 转发量
// likes: 点赞数
// createdAt: 创建时间
// updatedAt: 最后更新时间
const PostSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	imgs: [{ type: String }],
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
	tagsId: { type: mongoose.Schema.Types.ObjectId, ref: 'tags', required: true },
	relay: { type: Number, default: 0 },
	likes: { type: Number, default: 0 },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
}, {
	collection: 'post',
	versionKey: false
})

PostSchema.virtual('tagName', {
	ref: 'Tag',
	localField: 'tagsId',
	foreignField: '_id',
	justOne: true,
	select: 'name'
  })

module.exports = mongoose.model('post', PostSchema)
