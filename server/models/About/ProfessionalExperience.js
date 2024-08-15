const mongoose = require('mongoose');

// Define Professional Experience schema
const professionalExperienceSchema = new mongoose.Schema({
  // username: { type: String, required: true },
  profession: { type: String, required: true },
  organization: { type: String, required: true },
  isRemote: {type: String, default: null},
  location: { type: String ,default : null},
  startDate: { type: String, required: true },
  endDate: { type:String, default: null },
  currentlyWorkinghere: {type: String, default : null},
  description: { type: String }
});

const ProfessionalExperience = mongoose.model('ProfessionalExperience', professionalExperienceSchema);

module.exports = ProfessionalExperience;
