// 密码表
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
	hash: {
		type: String,
		require: true
	}
}, {
	collection: 'password',
	versionKey: false
});

module.exports = mongoose.model('password', PasswordSchema);
