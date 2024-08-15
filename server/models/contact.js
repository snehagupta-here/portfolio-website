const mongoose = require('mongoose');

// Define Contact schema
const contactSchema = new mongoose.Schema({
  // username: { type: String, required: true, unique: true, ref: 'User' },
  // email: { type: String },
  // instagram: { type: String },
  // linkedIn: { type: String },
  // twitter: { type: String },
  // message: { type: String }
  types:{
    type:String,
    required:true
  },
  ids:{
    type:String,
    required:true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
