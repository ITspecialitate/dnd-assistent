const NPC = require('../models/npc');

exports.createNPC = async (req, res) => {
  try {
    const npc = new NPC(req.body);
    await npc.save();
    res.status(201).json(npc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getNPCs = async (req, res) => {
  try {
    const npcs = await NPC.find();
    res.json(npcs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getNPC = async (req, res) => {
  try {
    const npc = await NPC.findById(req.params.id);
    if (!npc) return res.status(404).json({ message: 'NPC not found' });
    res.json(npc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateNPC = async (req, res) => {
  try {
    const npc = await NPC.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!npc) return res.status(404).json({ message: 'NPC not found' });
    res.json(npc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteNPC = async (req, res) => {
  try {
    const npc = await NPC.findByIdAndDelete(req.params.id);
    if (!npc) return res.status(404).json({ message: 'NPC not found' });
    res.json({ message: 'NPC deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
