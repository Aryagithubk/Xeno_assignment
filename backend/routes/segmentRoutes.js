const express = require('express');
const router = express.Router();
const { createSegment, getSegments, deleteSegment } = require('../controllers/segmentController');

router.post('/', createSegment);
router.get('/', getSegments);
router.delete('/:id', deleteSegment);

module.exports = router;
