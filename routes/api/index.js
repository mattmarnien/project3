const express = require('express')
const router = require("express").Router();
const passport = require('../../passport')
const gameCardController = require("../../controllers/gameCardController");
const UserController = require("../../controllers/UserController");
const DeckController = require("../../controllers/deckController");


// Login route
router.route("/login")
  .post(passport.authenticate('local'), (req,res) =>{
    console.log("in passport")
    res.json(req.user)
  })


// gameCard routes
router.route("/gameCards/:id")
  .get(gameCardController.findById)

router.route("/gameCards")
  .get(gameCardController.findCards)


// User routes
router.route("/users")
  .get(UserController.findUsers)
  .post(UserController.addUser)

router.route("/users/:id")
  .get(UserController.findById)


// Deck routes
router.route("/decks")
  .get(DeckController.findAll)
  .post(DeckController.buildDeck)

router.route("/decks/:id")
  .get(DeckController.findById)


module.exports = router;
