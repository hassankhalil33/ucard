const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  category: {
    type: String,
    required: 'category is required'
  },

  name: {
    type: String,
    required: 'name is required',
    trim: true
  },

  name: {
    type: String,
    required: 'profession is required',
    trim: true
  },

  photo: {
    type: String,
  },

  emails: {
    type: Array
  },

  links: {
    type: Array
  },

  is_public: {
    type: Boolean
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
})

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
