const router = require("express").Router();
const profileRoutes = require("./profile");
const signupRoutes = require("./signup");

// API routes

// /api/profile
router.use("/profile", profileRoutes);

// /api/signup
router.use("/signup", signupRoutes);

module.exports = router;
