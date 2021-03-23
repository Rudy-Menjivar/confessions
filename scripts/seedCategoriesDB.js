const db = require("../models");
const connectDB = require("../config/connectDB")

connectDB();

const categoriesSeed = [
  {
    name: "Crushes"
  },
  {
    name: "Food"
  },
  {
    name: "Gym"
  },
  {
    name: "Lies"
  },
  {
    name: "School"
  },
  {
    name: "Work"
  }
];

db.Categories
  .deleteMany({})
  .then(() => db.Categories.collection.insertMany(categoriesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });