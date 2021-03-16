const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    userName: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Data, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentsSchema);