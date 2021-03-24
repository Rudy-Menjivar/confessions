const express = require("express");
const router = express.Router();
// const profileRoutes = require("./api/profile");
// const newsfeedRoutes = require("./newsfeed");

const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get(
  "/user_data",
  (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.headers.secret_token
    })
  }
);

// /api/profile
// Will use this after successfully establishing table relationship because each user needs to link with their own confessions from the confession table

// router.use("/profile", isAuthenticated,
//   (req, res, next) => {
//     console.log("here" + req.user)
//     res.json({
//       message: 'You made it to the secure route - profile',
//       user: req.user,
//       token: req.headers.secret_token
//     })
//   },
//   profileRoutes
// );

// router.use("/newsfeed", 
//   (req, res, next) => {
//     console.log("here" + req.user)
//     res.json({
//       message: 'You made it to the secure route - newsfeed',
//       user: req.user,
//       token: req.headers.secret_token
//     })
//   },
//   newsfeedRoutes
// );

module.exports = router;
