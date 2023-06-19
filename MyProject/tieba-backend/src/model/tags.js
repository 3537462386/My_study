const mongoose = require('mongoose')
// 专门做映射表
const Schema = mongoose.Schema;

const TagsSchema = new mongoose.Schema({
    name: { type: String,  required: true },
    posts:[{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }]
}, {
    collection: 'tags',
    versionKey: false
})

module.exports = mongoose.model('tags', TagsSchema)
