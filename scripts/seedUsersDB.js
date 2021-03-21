const mongoose = require("mongoose");
const db = require("../models");

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

const userSeed = [
  {
    username: "whiteRabbit",
    password: "password"
  },
  {
    username: "blackRabbit",
    password: "youwillneverfindouthaha"
  },
  {
    username: "user",
    password: "user"
  }
];

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  