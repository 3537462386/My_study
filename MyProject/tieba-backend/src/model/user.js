const mongoose = require('mongoose')
// 专门做映射表
const Schema = mongoose.Schema;
// 用户数据（User）：
// _id: 用户 ID
// username: 用户名
// password: 密码
// avatar: 用户头像
// createdAt: 创建时间
// updatedAt: 最后更新时间
// likes: 点赞过的帖子 ID 列表
const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	avatar: { type: String },
	likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
}, {
	collection: 'user',
	versionKey: false
})

module.exports = mongoose.model('user', UserSchema)
