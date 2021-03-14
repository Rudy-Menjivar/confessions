const router = require("express").Router();
const confessionController = require("../../controllers/confessionController");

// Matches with "/api/member/profile"
router.route("/")
    .get(confessionController.findAll)
    .post(confessionController.create);

// Matches with "/api/profile/:id"
router.route("/:id")
    .get(confessionController.findById)
    .put(confessionController.update)
    .delete(confessionController.remove);

module.exports = router;
