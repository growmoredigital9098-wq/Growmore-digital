const Consultation = require('../models/Consultation');

// Submit consultation form
const submitConsultation = async (req, res) => {
  try {
    const { name, contact, email } = req.body;

    // Validate input
    if (!name || !contact || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    // Create new consultation
    const consultation = new Consultation({
      name,
      contact,
      email,
    });

    await consultation.save();

    res.status(201).json({
      success: true,
      message: 'Consultation submitted successfully',
      data: consultation,
    });
  } catch (error) {
    console.error('Consultation submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// Get all consultations (admin only - optional)
const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find()
      .sort({ submittedAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: consultations.length,
      data: consultations,
    });
  } catch (error) {
    console.error('Get consultations error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

module.exports = {
  submitConsultation,
  getConsultations,
};