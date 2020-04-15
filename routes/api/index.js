const router = require("express").Router();
const gameCardRoutes = require("./gameCards");
const userRoutes = require("./Users");
const deckRoutes = require("./Decks");

// gameCard routes
router.use("/gameCards", gameCardRoutes);

// User routes
router.use("/users", userRoutes);

// Deck routes
router.use("/decks", deckRoutes);


module.exports = router;
