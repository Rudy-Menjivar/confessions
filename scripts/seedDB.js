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
    user: "gymLover101",
    category: "Gym",
    date: new Date(Date.now())
},
{
    title: "I cheated in school",
    content: "lorem Ipsum is Lorem Ipsum is crae cray",
    user: "collegeKid101",
    category: "School",
    date: new Date(Date.now())
},
{
    title: "I lied to my mom",
    content: "I think she knows!",
    user: "badKid101",
    category: "Lies",
    date: new Date(Date.now())
},
{
    title: "I skipped class",
    content: "And watched a movie",
    user: "harvardBound101",
    category: "School",
    date: new Date(Date.now())
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