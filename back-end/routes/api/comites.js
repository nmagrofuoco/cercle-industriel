const express = require('express');
const router = express.Router();

const Comite = require('../../models/Comite');

// @route   GET api/comites
// @desc    Get year and name of all comites
// @access  Private
router.get('/', async (req, res) => {
  try {
    const comites = await Comite.find().select('-_id year name');
    res.json(comites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/comites/:year
// @desc    Get all comitards of :year's comite
// @access  Private
router.get('/:year', async (req, res) => {
  try {
    const { comitards } = await Comite.findOne({
      year: req.params.year,
    }).select('-_id comitards');
    if (!comitards) {
      return res.status(404).json({ msg: "Ce comité n'existe pas." });
    }
    res.json(comitards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
