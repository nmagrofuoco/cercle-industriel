const mongoose = require('mongoose');

const ComiteSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  comitards: [
    {
      poste: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = Comite = mongoose.model('comite', ComiteSchema);
