const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post(
  "/login",
  async (req, res, next) => {
      passport.authenticate(
          "local", { session: false },
          async (err, user, info) => {
              console.log("user:", user)
              try {
              if (err || !user) {
                  return next(err);
              }
              console.log(user, info, "test");

              req.login(
                  user,
                  { session: true },
                  async (error) => {
                      if (error) {
                          return next(error);
                      }
                      const payload = {
                          _id: user._id,
                          username: user.username
                      }
                      const options = {
                          subject: `${user.id}`,
                          expiresIn: 3600
                      }
                      const token = jwt.sign({ user: payload }, 'TOP_SECRET', options);
                      console.log(token)
                      return res.json({ token });
                  }
              );

          } catch (err) {
              return err;
          }
      }
  )(req, res, next);
  }
);

module.exports = router;
