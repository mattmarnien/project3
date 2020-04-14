const router = require("express").Router();
// const gameCardRoutes = require("./gameCards");
const gameCardController = require("../../controllers/gameCardController");
const UserController = require("../../controllers/UserController");

// gameCard routes
router.route("/gameCards/:name")
.get(gameCardController.findCards)

router.route("/gameCards")
.get(gameCardController.findAllCards)

// User routes
router.route("/users")
.get(UserController.findUsers)


module.exports = router;
