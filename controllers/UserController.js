const db = require("../models");

module.exports = {

  findUsers: function (req, res) {
    db.User
      .find({
        name: { $regex: req.params.name, $options: "i" },
        include: { models: db.Deck }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addUser: function (req, res) {
    console.log(req.body)
    const user = new db.User({name: req.body.username, password: req.body.password})
    user.password = user.generateHash(req.body.password)
    console.log(user)
    
    db.User
      .create(user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}