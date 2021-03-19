const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const confessionSchema = new Schema({
    title: {type: String, required: true },
    content: {type: String, required: true},
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comment: Array,
    category: Array,
    reported: { type: Boolean, default: false },
    owner: { 
        type: Schema.Types.ObjectId,  
        ref: "User"
    },
    date: { type: Date, default: Date.now }
});

const Confession = mongoose.model("Confession", confessionSchema);

module.exports = Confession;
