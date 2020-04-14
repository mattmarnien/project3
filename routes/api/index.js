const express = require('express')
const router = require("express").Router();
const gameCardRoutes = require("./gameCards");
const gameCardController = require("../../controllers/gameCardController");
const UserController = require("../../controllers/UserController");
const userRoutes = require("./Users");
const passport = require('../../passport')

// gameCard routes
router.use("/gameCards", gameCardRoutes);
router.route("/gameCards/:name")
.get(gameCardController.findCards)

router.route("/gameCards")
.get(gameCardController.findAllCards)

// User routes
router.route("/users")
.get(UserController.findUsers)
.post(UserController.addUser)

router.route("/login")
.post(passport.authenticate('local'),
(req,res) => {
    res.redirect('/')
}
)

   

router.use("/users", userRoutes)

module.exports = router;
