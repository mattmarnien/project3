const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Deck
      .find({ include: { models: db.gameCard } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Deck
      .findOne({
        where: {id: req.params.id},
        include: {models: db.gameCard}
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  buildDeck: function (req, res) {
    console.log(req.body)
    db.Deck
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};