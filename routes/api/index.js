const router = require("express").Router();
const profileRoutes = require("./profile");

// API routes
router.use("/profile", profileRoutes);

module.exports = router;
