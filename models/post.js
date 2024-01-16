const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PostSchema = new Schema(
    {
        postTitle: {
            type: String,
            minlength: 1,
            maxlength: 20,
            required: 'Please add a title for your post'
        },
        postText: {
            type: String,
            minlength: 1,
            maxlength: 280,
            require: 'Please fill in the body of your post'
        },
        username: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        }
    },
    {
        toJSON:{
            getters: true
        },
        id: false
    }
);

const Post = model('Post', PostSchema);

module.exports = Post;