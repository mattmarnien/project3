const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://" + process.env.DBUSER + ":" + process.env.DBPASS + "@ds129018.mlab.com:29018/heroku_g9r80cft"
);

const gameCardSeed = [
  {
    name: "Test",
    image: "https://via.placeholder.com/150",
    attack: 40,
    HP: 100
  }
];

db.gameCard
  .remove({})
  .then(() => db.gameCard.collection.insertMany(gameCardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
