const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

router.post('/', async (req, res) => {
  try {
    const { name, customerIds } = req.body;
    const campaign = new Campaign({ name, customerIds });
    await campaign.save();
    res.status(201).json({ success: true, campaign });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create campaign' });
  }
});

// GET all campaigns
router.get('/', async (req, res) => {
    try {
      const campaigns = await Campaign.find().populate('customerIds'); // optional: to see customer details
      res.json(campaigns);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch campaigns' });
    }
  });
  

module.exports = router;
