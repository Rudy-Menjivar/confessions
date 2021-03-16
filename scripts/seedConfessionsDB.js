const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/confessions"
)
const confessionSeed = [
{
    title: "I skipped the gym",
    content: "And ate chocolate with ice cream",
    category: "Gym",
    likes: 3,
    reported: false
},
{
    title: "I cheated in school",
    content: "lorem Ipsum is Lorem Ipsum is crae cray",
    category: "School",
    likes: 2,
    reported: false
},
{
    title: "I lied to my mom",
    content: "I think she knows!",
    category: "Lies",
    likes: 5,
    reported: false
},
{
    title: "I skipped class",
    content: "And watched a movie",
    category: "School",
    likes: 0,
    reported: false
}
];

db.Confession
  .remove({})
  .then(() => db.Confession.collection.insertMany(confessionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
