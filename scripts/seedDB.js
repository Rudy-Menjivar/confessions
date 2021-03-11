const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    
)
const confessionSeed = [
{
    title: "I skipped the gym",
    user: "gymLover101",
    synopsis: "Gym",
    date: new Date(Date.now())
},
{
    title: "I cheated in school",
    user: "collegeKid101",
    synopsis: "School",
    date: new Date(Date.now())
},
{
    title: "I lied to my mom",
    user: "badKid101",
    synopsis: "Lies",
    date: new Date(Date.now())
},
{
    title: "I skipped class",
    user: "harvardBound101",
    synopsis: "School",
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