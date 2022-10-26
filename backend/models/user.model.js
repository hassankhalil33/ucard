const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'name is required',
    trim: true
  },

  email: {
    type: String,
    required: 'email is required',
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: 'password is required',
    select: false,
    trim: true
  },

  location: {
    type: String,
    required: 'location is required',
    trim:true
  },

  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }],

  card_count: {
    type: Number,
    default: 0
  },

  following: [[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  },

  {
    type: Date,
    default: Date.now
  }
]],

  suggested: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }],

  notifications: {
    type: Array
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
