const router = require("express").Router();
// const gameCardRoutes = require("./gameCards");
const gameCardController = require("../../controllers/gameCardController");

// gameCard routes
router.route("/gameCards/:name")
.get(gameCardController.findCards)

router.route("/gameCards")
.get(gameCardController.findAllCards)



module.exports = router;
