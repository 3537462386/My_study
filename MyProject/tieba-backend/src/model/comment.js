const mongoose = require('mongoose')
// 专门做映射表
const Schema = mongoose.Schema;
// 评论（Comment）：
// _id: 评论 ID
// postId: 帖子 ID
// content: 内容
// author: 作者 ID
// createdAt: 创建时间
// updatedAt: 最后更新时间
const CommentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reply' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    collection: 'comment',
    versionKey: false
})

module.exports = mongoose.model('comment', CommentSchema)
