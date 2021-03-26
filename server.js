const express = require("express");
const path = require("path");
const routes = require("./routes");
const app = express();
const passport = require("passport");
const connectDB = require("./config/connectDB")
const PORT = process.env.PORT || 3001;

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

const secureRoute = require('./routes/secure-routes');

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/api', passport.authenticate('jwt', { session: false }), secureRoute);

connectDB();

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
