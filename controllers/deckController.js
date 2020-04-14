const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Deck
          .find(req.query, {include: {models: db.gameCard}})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};