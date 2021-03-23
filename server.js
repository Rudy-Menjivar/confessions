const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require("passport");

// next two lines load dot env variables (only needed for dev)
//  const dotenv = require("dotenv")
//  dotenv.config({ path: "./config/config.env" })
const PORT = process.env.PORT || 3001;

const secureRoute = require('./routes/secure-routes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport");
// Add routes, both API and view
app.use(routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Connect to the Mongo DB
const connectDB = async () => {
  try {
    const conn = 
    await mongoose.connect(process.env.MONGO_URI || 
      "mongodb://localhost/confessions", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
      console.error(err)
      process.exit(1)
  };
};

connectDB();

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
