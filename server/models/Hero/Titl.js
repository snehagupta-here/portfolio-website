const mongoose = require('mongoose');
const User = require('./user');

// Define subdocument schema for individual titles


// Define main Title schema
const titlSchema = new mongoose.Schema({
  // username: { type: String, required: true, unique: true },
  // titles: [individualTitleSchema]
  title:{
    type:String,
    required:true
  }
});

// const Titl = mongoose.model('Titl', titleSchema);

module.exports = mongoose.model('titl', titlSchema);;
