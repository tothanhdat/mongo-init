const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PostsSchema = new Schema({
    title: { type: String, unique: true, trim: true, required: true },
    description: String,
    pubDate : { type: Date, default: Date.now },
    /**
     * -1: chờ duyệt
     * 0: đang chạy
     * 1: bị chặn
     */
    status : { type: Number, default: -1 }
});

const Post       = mongoose.model('post', PostsSchema);
module.exports = {
    Post
};