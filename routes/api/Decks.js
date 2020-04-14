const router = require("express").Router();
const deckController = require("../../controllers/DeckController");

// Matches with "/api/decks"
router.route("/")
  .get(deckController.findAll)
  .post(deckController.buildDeck)

// Matches with "/api/decks/:id"
router.route("/:id")
  .get(deckController.findById)

module.exports = router;
