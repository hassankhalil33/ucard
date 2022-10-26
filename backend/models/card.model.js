const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  category: {
    type: String,
    required: 'category is required',
    enum: ["personal", "business", "gaming", "other"]
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

  emails: {
    type: String
  },

  links: {
    type: String
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
