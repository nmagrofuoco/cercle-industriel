const mongoose = require('mongoose');

const SalopetteSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  papers: [
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = Salopette = mongoose.model('salopette', SalopetteSchema);
