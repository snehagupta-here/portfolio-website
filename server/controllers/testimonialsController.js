const Testimonial = require('../models/Testimonials/Testimonials');
const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profiles'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Rename the file
  }
});

const upload = multer({ storage: storage }).single('photo');
// Create a new work
const createWork = async (req, res) => {
  
  upload(req, res, async (err) => {
    if (err) {
      console.log("Error during file upload:", err);
      return res.status(400).json({ error: err.message });
    }

    const photoPath = req.file ? req.file.path : null;
  try {
    const { serviceName, organizationName, photo, description } = req.body;
    const newWork = new Testimonial({  serviceName, organizationName, photo:photoPath, description });
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  });
};

// Get Testimonials by username
const getTestimonialsByUsername = async (req, res) => {
  // const { username } = req.params;

  try {
    const testimonials = await Testimonial.find();
    if (!testimonials) {
      return res.status(404).json({ message: 'Testimonials not found' });
    }
    res.json(testimonials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a testimonial
const updateTestimonial = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log("Error during file upload:", err);
      return res.status(400).json({ error: err.message });
    }

    const photoPath = req.file ? req.file.path : null;
  const {id} = req.params;
  const {serviceName, organizationName, photo, description } = req.body;

  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      { serviceName, organizationName, photo:photoPath, description },
      { new: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json(updatedTestimonial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
};
const deleteTestimonial = async (req,res) =>{
  const { id } = req.params;
console.log("deleting Testimonial");
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
module.exports = {
  createWork,
  getTestimonialsByUsername,
  updateTestimonial,
  deleteTestimonial
};
