const Monster = require('../models/monster');

exports.createMonster = async (req, res) => {
  try {
    const monster = new Monster(req.body);
    await monster.save();
    res.status(201).json(monster);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMonsters = async (req, res) => {
  try {
    const monsters = await Monster.find();
    res.json(monsters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMonster = async (req, res) => {
  try {
    const monster = await Monster.findById(req.params.id);
    if (!monster) return res.status(404).json({ message: 'Monster not found' });
    res.json(monster);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateMonster = async (req, res) => {
  try {
    const monster = await Monster.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!monster) return res.status(404).json({ message: 'Monster not found' });
    res.json(monster);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteMonster = async (req, res) => {
  try {
    const monster = await Monster.findByIdAndDelete(req.params.id);
    if (!monster) return res.status(404).json({ message: 'Monster not found' });
    res.json({ message: 'Monster deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
