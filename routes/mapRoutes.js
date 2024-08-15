const express = require('express');
const router = express.Router();
const {
  createMap,
  getMaps,
  getMap,
  updateMap,
  deleteMap,
} = require('../controllers/mapController');

router.post('/', createMap);
router.get('/', getMaps);
router.get('/:id', getMap);
router.put('/:id', updateMap);
router.delete('/:id', deleteMap);

module.exports = router;
