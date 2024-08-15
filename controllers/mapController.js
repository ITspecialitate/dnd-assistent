const Map = require('../models/map');

exports.createMap = async (req, res) => {
  try {
    const map = new Map(req.body);
    await map.save();
    res.status(201).json(map);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMaps = async (req, res) => {
  try {
    const maps = await Map.find();
    res.json(maps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMap = async (req, res) => {
  try {
    const map = await Map.findById(req.params.id);
    if (!map) return res.status(404).json({ message: 'Map not found' });
    res.json(map);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateMap = async (req, res) => {
  try {
    const map = await Map.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!map) return res.status(404).json({ message: 'Map not found' });
    res.json(map);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteMap = async (req, res) => {
  try {
    const map = await Map.findByIdAndDelete(req.params.id);
    if (!map) return res.status(404).json({ message: 'Map not found' });
    res.json({ message: 'Map deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
