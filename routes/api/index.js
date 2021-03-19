const router = require("express").Router();
const signupRoutes = require("./signup");
const profileRoutes = require("./profile");
const newsfeedRoutes = require("./newsfeed");

// API routes

// /api/profile
router.use("/profile", profileRoutes);

// /api/signup
router.use("/signup", signupRoutes);

// /api/newsfeed
router.use("/newsfeed", newsfeedRoutes);

module.exports = router;
