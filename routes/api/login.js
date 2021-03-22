const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/login"
router.route("/")
  .post(userController.findAll);

module.exports = router;
