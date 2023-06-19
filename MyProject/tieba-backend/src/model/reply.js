const mongoose = require('mongoose')
// 专门做映射表
const Schema = mongoose.Schema;
const ReplySchema = new mongoose.Schema({
	content: { type: String, required: true },
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
	commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'comment' , required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
}, {
	collection: 'reply',
	versionKey: false
})

module.exports = mongoose.model('reply', ReplySchema)
