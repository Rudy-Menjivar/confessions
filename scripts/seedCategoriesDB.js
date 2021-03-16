const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/confessions"
)
const categoriesSeed = [
{
    name: "sport"
},
{
    name: "lifestyle"
}
];

db.Categories
  .remove({})
  .then(() => db.Categories.collection.insertMany(categoriesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });