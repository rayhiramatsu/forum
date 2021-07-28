const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    votes: {type: Number, default: 0},
},
{timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
