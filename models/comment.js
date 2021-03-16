const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    user: String,
    text: String
});

module.exports = mongoose.model('Comment', CommentsSchema);