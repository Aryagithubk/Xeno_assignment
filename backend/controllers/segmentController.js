const Segment = require('../models/Segment');

// Create a segment
exports.createSegment = async (req, res) => {
  try {
    const { name, rules } = req.body;
    const segment = new Segment({ name, rules });
    await segment.save();
    res.status(201).json(segment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all segments
exports.getSegments = async (req, res) => {
  try {
    const segments = await Segment.find();
    res.json(segments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a segment
exports.deleteSegment = async (req, res) => {
  try {
    const { id } = req.params;
    await Segment.findByIdAndDelete(id);
    res.json({ message: 'Segment deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
