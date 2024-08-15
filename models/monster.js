const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  hitPoints: Number,
  armorClass: Number,
  abilities: [String],
  description: String,
  image: String,
});

module.exports = mongoose.model('Monster', MonsterSchema);
