const mongoose = require('mongoose');

// Define Works schema
const projectSchema = new mongoose.Schema({
  // username: { type: String, required: true , ref: 'User'},
  projectname: { type: String, required: true }, 
  skill: { type: [String], required: true },       //array  of strings
  photo: { type: String, required: true }, // Assuming photo is a URL to the image
  description: { type: String, required: true }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;