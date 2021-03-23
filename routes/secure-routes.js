const express = require("express");
const router = express.Router();

router.get(
  "/user_data",
  (req, res, next) => {
    console.log(req.headers)
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.headers.secret_token
    })
  }
);

module.exports = router;
