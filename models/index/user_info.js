var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userInfoSchema = new Schema({
    name: String,
    userId: String,
    password: String,
    profileImage: String,
    coverImage: String
});

module.exports = mongoose.model("userInfo",userInfoSchema);