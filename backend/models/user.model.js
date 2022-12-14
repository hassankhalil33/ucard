const mongoose = require('mongoose');
const validator = require('validator');

const followingSchema = new mongoose.Schema({
  card_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
}, { _id:  false })

const notificationsSchema = new mongoose.Schema({
  card_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
}, { _id:  false })

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'name is required',
    trim: true
  },

  email: {
    type: String,
    validate: [ validator.isEmail, 'invalid email' ],
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

  following: [
    followingSchema
  ],

  suggested: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }],

  notifications: [
    notificationsSchema
  ],

  notification_token: {
    tyoe: String
  },

  timestamp: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
