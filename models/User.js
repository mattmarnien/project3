const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  deck: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'gameCard'
  }
]
});

const User = mongoose.model("User", userSchema);

module.exports = User;