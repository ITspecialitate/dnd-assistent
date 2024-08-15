const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  locations: [String],
});

module.exports = mongoose.model('Map', MapSchema);
