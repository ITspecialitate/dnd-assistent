const express = require('express');
const router = express.Router();
const {
  createMonster,
  getMonsters,
  getMonster,
  updateMonster,
  deleteMonster,
} = require('../controllers/monsterController');

router.post('/', createMonster);
router.get('/', getMonsters);
router.get('/:id', getMonster);
router.put('/:id', updateMonster);
router.delete('/:id', deleteMonster);

module.exports = router;
