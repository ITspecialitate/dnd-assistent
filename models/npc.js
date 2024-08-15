const mongoose = require('mongoose');

const NPCSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  role: String,
  alignment: String,
  traits: [String],
  backstory: String,
  image: String,
});

module.exports = mongoose.model('NPC', NPCSchema);
