const db = require("../models");

module.exports = {
    
      findUsers: function(req, res) {
        db.gameCard
          .find({name: {$regex: req.params.name, $options: "i"}})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findById: function(req, res) {
        db.User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      addUser: function (req, res) {
        console.log(req.body)
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
}