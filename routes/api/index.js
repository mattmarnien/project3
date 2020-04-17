const express = require('express')
const router = require("express").Router();
const passport = require('../../passport')
const gameCardController = require("../../controllers/gameCardController");
const UserController = require("../../controllers/UserController");
const DeckController = require("../../controllers/deckController");


// Auth routes
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return next();
  }
}

router.route("/login")
  .post(passport.authenticate('local'), (req, res) =>{
    console.log(req)
    if(req){
      res.sendStatus(200)
    }
    else{
      res.send('username or password wrong')
    }
  })
   router.get('/checkUser', isLoggedIn, (req, res) => {
     res.send(req.user)
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

router.route("/user")
  .get(UserController.findById)

router.route("/userDecks")
   .get(UserController.findUserDecks)


// Deck routes
router.route("/decks")
  .get(DeckController.findAll)
  .post(DeckController.buildDeck)

router.route("/decks/:id")
  .get(DeckController.findById)


module.exports = router;
