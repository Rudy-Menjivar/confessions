const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/login"
router.route("/")
  .get(userController.findByUsername);

module.exports = router;
