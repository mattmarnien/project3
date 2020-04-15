const express = require('express')
const router = require("express").Router();
const passport = require('../../passport')
const gameCardController = require("../../controllers/gameCardController");
const UserController = require("../../controllers/UserController");
const DeckController = require("../../controllers/deckController");


// Login route
router.route("/login")
  .post(passport.authenticate('local'))


// gameCard routes
router.route("/:id")
  .get(gameCardController.findById)

router.route("/gameCards/:name")
  .get(gameCardController.findCards)


// User routes
router.route("/users")
  .get(UserController.findUsers)
  .post(UserController.addUser)

router.route("/:id")
  .get(userController.findById)


// Deck routes
router.route("/")
  .get(deckController.findAll)
  .post(deckController.buildDeck)

// Matches with "/api/decks/:id"
router.route("/:id")
  .get(deckController.findById)


module.exports = router;
