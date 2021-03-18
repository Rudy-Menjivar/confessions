const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const confessionSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        likes: { type: Number },
        reported: { type: Boolean, default: false },
        date: { type: Date, default: Date.now },
        comments: [
            {
                type: String
            }
        ],
        categories: [
            {
                type: String
            }
        ]
    });

const Confession = mongoose.model("Confession", confessionSchema);

module.exports = Confession;
