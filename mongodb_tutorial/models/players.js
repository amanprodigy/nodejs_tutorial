const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema and Model

const PlayerSchema = new Schema(
  {
    name: String,
    team: String,
    age: Number
  }
);

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
