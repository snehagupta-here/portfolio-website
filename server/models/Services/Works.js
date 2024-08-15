const mongoose = require('mongoose');

// Define Works schema
const serviceSchema = new mongoose.Schema({
  // username: { type: String, required: true, ref: 'User' },
  serviceName: { type: String, required: true },
  photo: { type: String, required: true }, // Assuming photo is a URL to the image
  description: { type: String, required: true }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
