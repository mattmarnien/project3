const router = require("express").Router();
const gameCardController = require("../../controllers/gameCardController");

// Matches with "/api/gameCards"
router.route("/")
  .get(gameCardController.findAllCards)

// Matches with "/api/gameCards/:name"
router.route("/:name")
  .get(gameCardController.findCards)

// Matches with "/api/gameCards/:id"
router.route("/:id")
  .get(gameCardController.findById)

module.exports = router;
