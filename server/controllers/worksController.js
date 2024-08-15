const Service = require('../models/Services/Works');
const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profiles'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || path.extname(file.mimetype); // Use original extension or MIME type
    console.log("path.extname(file.mimetype)",path.extname(file.mimetype));
    cb(null, Date.now() + ext); // Append timestamp to avoid filename conflicts
  }
});

const upload = multer({ storage: storage }).single('photo');
// Create a new work
const createWork = async (req, res) => {
  console.log("service working");
  upload(req, res, async (err) => {
    if (err) {
      console.log("Error during file upload:", err);
      return res.status(400).json({ error: err.message });
    }

    const photoPath = req.file ? req.file.path : null;
  const {  serviceName, description } = req.body;

            //  console.log("service name",req.body);
      console.log("photopath",req.file);
  try {
    const newWork = new Service({serviceName, photo:photoPath, description });
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
};

// Get works by username
const getWorksByUsername = async (req, res) => {
  // const { username } = req.params;

  try {
    const works = await Service.find();
    if (!works.length) {
      return res.status(404).json({ message: 'Works not found' });
    }
    res.json(works);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a work
const updateWork = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log("Error during file upload:", err);
      return res.status(400).json({ error: err.message });
    }
    const {id} = req.params;
    const {serviceName, description } = req.body;
    console.log("servicename",serviceName);
    console.log("description",description);
    console.log("req.file",req.file);
    const photoPath = req.file ? req.file : null;
  try {
    const updatedWork = await Service.findByIdAndUpdate(
      id,
      { serviceName, photo:photoPath, description },
      { new: true }
    );

    if (!updatedWork) {
      return res.status(404).json({ message: 'Work not found' });
    }

    res.json(updatedWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
};

const deleteWork = async (req, res) => {
  const { id } = req.params;
console.log("deleting working");
  try {
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createWork,
  getWorksByUsername,
  updateWork,
  deleteWork
};

