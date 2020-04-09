const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String,
    required: true 
  },
  attack: Number,
  HP: Number,
});

const gameCard = mongoose.model("gameCard", cardSchema);

module.exports = gameCard;
