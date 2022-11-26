const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  category: {
    type: String,
    required: 'category is required',
    enum: ["PERSONAL", "BUSINESS", "GAMING", "OTHER"]
  },

  name: {
    type: String,
    required: 'name is required',
    trim: true
  },

  profession: {
    type: String,
    trim: true
  },

  photo: {
    type: String,
  },

  email: {
    type: String
  },

  link: {
    type: String
  },

  location: {
    type: String
  },

  notifications: {
    type: Array
  },

  is_public: {
    type: Boolean,
    default: false
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
})

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
