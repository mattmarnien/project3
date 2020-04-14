const router = require("express").Router();
const userController = require("../../controllers/UserController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findUsers)
  .post(userController.addUser);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(userController.findById)

module.exports = router;
