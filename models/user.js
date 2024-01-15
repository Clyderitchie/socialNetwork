const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: 'A username is required for all users',
        },
        email: {
            type: String,
            require: 'A email is required to signup',
            match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            'This is not a valid email']
        },
        name: {
            type: String,
            unique: false,
            required: 'Please enter your first and last name please'
        },
        birthday: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        dateCreated: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        }
    },
    {
        toJSON:{},
        id: false,
        autoIndex: false
    }
);

const User = model('User', UserSchema);

module.exports = User;