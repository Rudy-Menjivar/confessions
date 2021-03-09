const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const confessionSchema = new Schema({
    title: {type: String, required: true },
    user: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Confession = mongoose.model("Confession", confessionSchema);

module.exports = Confession;