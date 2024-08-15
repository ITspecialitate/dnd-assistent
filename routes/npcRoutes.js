const express = require('express');
const router = express.Router();
const {
  createNPC,
  getNPCs,
  getNPC,
  updateNPC,
  deleteNPC,
} = require('../controllers/npcController');

router.post('/', createNPC);
router.get('/', getNPCs);
router.get('/:id', getNPC);
router.put('/:id', updateNPC);
router.delete('/:id', deleteNPC);

module.exports = router;
