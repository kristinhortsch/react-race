const mongoose = require('mongoose');

const randomSchema = new mongoose.Schema({
  text: {
    type: String,
    isRequired: true
  }
});

const Random = mongoose.model('Random', randomSchema);

module.exports = Random;
