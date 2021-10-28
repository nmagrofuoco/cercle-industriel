const express = require('express');
const router = express.Router();

const Salopette = require('../../models/Salopette');

// @route   GET api/salopette
// @desc    Get year and list of papers of all existing salopettes
// @access  Private
router.get('/', async (req, res) => {
  try {
    const salopettes = await Salopette.find().select('-_id year papers url');
    res.json(salopettes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
