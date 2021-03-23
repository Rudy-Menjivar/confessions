const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoute = require("./user");
const passport = require("passport");

// API routes
router.use("/api", apiRoutes);
// Below is route under testing, please don't remove now
// router.use("/api", passport.authenticate('jwt', { session: false }), apiRoutes);

router.use("/api", userRoute);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
