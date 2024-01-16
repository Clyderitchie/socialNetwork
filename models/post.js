const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CommentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        commentBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
        _id: false
    }
);

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
        },
        comments: [CommentSchema],
    },
    {
        toJSON:{
            getters: true,
            virtuals: true,
        },
        id: false
    }
);

PostSchema.virtual('commentCount').get(function () {
    return this.comments.length
})

const Post = model('Post', PostSchema);

module.exports = Post;