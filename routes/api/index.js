const router = require("express").Router();
const signupRoutes = require("./signup");
const profileRoutes = require("./profile");
const newsfeedRoutes = require("./newsfeed");
const loginRoutes = require("./login");

// API routes

// /api/profile
router.use("/profile", profileRoutes);

// /api/signup
router.use("/signup", signupRoutes);

// /api/newsfeed
router.use("/newsfeed", newsfeedRoutes);

// /api/login
router.use("/login", loginRoutes);

module.exports = router;
