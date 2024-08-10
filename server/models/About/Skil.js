const mongoose = require('mongoose');

// Define subdocument schema for individual skills
const individualSkillSchema = new mongoose.Schema({
  skill: { type: String, required: true }
}, { _id: true });

// Define main Skills schema
const skilSchema = new mongoose.Schema({
  skill:{
    type:String,
    required:true
  }
});



module.exports =  mongoose.model('Skil', skilSchema);
