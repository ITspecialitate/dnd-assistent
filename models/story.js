const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  introduction: String,
  location: String,
  events: [String],
  twists: [String],
  resolution: String,
  notes: String,
  images: [String],
});

module.exports = mongoose.model('Story', StorySchema);
