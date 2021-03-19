const mongoose = require("mongoose");
const db = require("../models");

// next two lines load dot env variables (only needed for dev)
// const dotenv = require("dotenv")
// dotenv.config({ path: "./config/config.env" })

const connectDB = async () => {
  try {
    const conn = await
      mongoose.connect(process.env.MONGO_URI ||
        "mongodb://localhost/confessions", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    console.log(`Seed records sent to: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  };
};

connectDB();

const confessionSeed = [
  {
    title: "I skipped the gym",
    content: "I never worked out and instead destroyed the pizza, as well as the salted caramel chocolate ice cream",
    category: "Gym",
    likes: 3,
    dislikes: 0,
    reported: false
  },
  {
    title: "I cheated in school",
    content: "lorem Ipsum is Lorem Ipsum is crae cray",
    category: "School",
    likes: 2,
    dislikes: 1,
    reported: false
  },
  {
    title: "I lied to my mom",
    content: "I ate the entire costco bag of cheetos and I think she knows!",
    category: "Lies",
    likes: 5,
    dislikes: 1,
    reported: false
  },
  {
    title: "I skipped class",
    content: "I skipped on the project to watch a movie, go shopping and binge watch some more..",
    category: "School",
    likes: 0,
    dislikes: 0,
    reported: false
  }
];

db.Confession
  .deleteMany({})
  .then(() => db.Confession.collection.insertMany(confessionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
