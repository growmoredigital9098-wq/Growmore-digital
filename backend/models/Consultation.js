const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  contact: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'completed'],
    default: 'pending',
  },
});

const Consultation = mongoose.model('Consultation', consultationSchema);

module.exports = Consultation;