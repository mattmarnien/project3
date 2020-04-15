const express = require('express')
const router = require("express").Router();
const gameCardRoutes = require("./gameCards");
const gameCardController = require("../../controllers/gameCardController");
const UserController = require("../../controllers/UserController");
const userRoutes = require("./Users");
const passport = require('../../passport')
const deckRoutes = require("./Decks");

// gameCard routes
router.use("/gameCards", gameCardRoutes);

// router.route("/gameCards/:name")
// .get(gameCardController.findCards)

// router.route("/gameCards")
// .get(gameCardController.findAllCards)

// User routes
router.route("/users")
.get(UserController.findUsers)
.post(UserController.addUser)

router.route("/login")
.post(passport.authenticate('local')
)

   

router.use("/users", userRoutes);

// Deck routes
router.use("/decks", deckRoutes);


module.exports = router;
