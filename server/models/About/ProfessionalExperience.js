const mongoose = require('mongoose');

// Define Professional Experience schema
const professionalExperienceSchema = new mongoose.Schema({
  // username: { type: String, required: true },
  position: { type: String, required: true },
  organization: { type: String, required: true },
  workfromhome: {type: String, default: null},
  location: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, default: null },
  currentlyWorkinghere: {type: String, default : null},
  description: { type: String, default: null }
});

const ProfessionalExperience = mongoose.model('ProfessionalExperience', professionalExperienceSchema);

module.exports = ProfessionalExperience;
