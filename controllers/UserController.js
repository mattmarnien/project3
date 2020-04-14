const db = require("../models");

module.exports = {

  findDecks: function (req, res) {
    db.User
      .find({ 
        name: { $regex: req.params.name, $options: "i" },
        include: {models: db.Deck}
       })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}