const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  image: { 
    data: Buffer,
    contentType: String,
    required: true 
  },
  attack: Number,
  HP: Number,
});

const gameCard = mongoose.model("gameCard", cardSchema);

module.exports = gameCard;
