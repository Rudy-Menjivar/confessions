const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post(
  "/login",
  async (req, res, next) => {
    passport.authenticate(
      "login",
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error("An error occurred.");

            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { 
                _id: user._id, 
                username: user.username 
              };
              const token = jwt.sign({ 
                user: body 
              }, "TOP_SECRET");

              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    ) (req, res, next);
  }
);

module.exports = router;
