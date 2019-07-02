const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UsersSchema = new Schema({
    lastname: String,
    firstname: String
});

const Users       = mongoose.model('user', UsersSchema); //user -> users || post -> posts
module.exports = {
    Users
};