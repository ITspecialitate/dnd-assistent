const express = require('express');
const router = express.Router();
const {
  createStory,
  getStories,
  getStory,
  updateStory,
  deleteStory,
} = require('../controllers/storyController');

router.post('/', createStory);
router.get('/', getStories);
router.get('/:id', getStory);
router.put('/:id', updateStory);
router.delete('/:id', deleteStory);

module.exports = router;
