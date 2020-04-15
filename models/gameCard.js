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
  cost: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  class:{
    type: String,
    required: true
  },
  attack: Number,
  HP: Number,
  mechanics: String,
  flavor: String,
});

const gameCard = mongoose.model("gameCard", cardSchema);

module.exports = gameCard;
