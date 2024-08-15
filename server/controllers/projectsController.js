const Project= require('../models/Work/Project'); // Adjust the path to your Works model
const Profile = require('../models/Hero/Profile'); // Adjust the path to your Profile model
const multer = require('multer');
const path = require('path');
const createProfile = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { username } = req.body;
    const profile = req.file ? req.file.path : null;

    try {
      const newProfile = new Profile({ username, profile });
      await newProfile.save();
      res.status(201).json(newProfile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

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

// const createWork = async (req, res) => {
//   const { projectname, skill, photo, description } = req.body;
// console.log("projectname",projectname);
// console.log("photo",photo);
// console.log("skill",skill);
// console.log("description",description);
// res.json("successfull project");
// upload(req, res, async (err) => {
//   if (err) {
//     console.log("Error during file upload:", err);
//     return res.status(400).json({ error: err.message });
//   }

//   const profilePath = req.file ? req.file.path : null;
//            console.log("profilepath:",profilePath);
//   try {
//     // Ensure that skill is an array
//     const skillsArray = Array.isArray(skill) ? skill : [skill];
 
//     const project = new Project({
//       projectname,
//       skill: skillsArray,
//       photo,
//       description,
//     });
     
//     const newProject = await project.save();

//     res.status(201).json(newProject);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }};
const createWork = async (req, res) => {
  // console.log("Updating profile");

  upload(req, res, async (err) => {
    if (err) {
      console.log("Error during file upload:", err);
      return res.status(400).json({ error: err.message });
    }

    const photoPath = req.file ? req.file.path : null;
             console.log("photopath:",photoPath);
             console.log("req.body",req.body.projectname);
             console.log("req.file",req.file);
             const { projectname, skill, photo, description } = req.body;
             console.log("projectname",projectname);
             console.log("photo",photo);
             console.log("skill",skill);
             console.log("description",description);
             try {
              // Ensure that skill is an array
              const skillsArray = Array.isArray(skill) ? skill : [skill];
           
              const project = new Project({
                projectname,
                skill: skillsArray,
                photo:photoPath,
                description,
              });
               
              const newProject = await project.save();
          
              res.status(201).json(newProject);
            }
    // try {
    //   const updatedPhoto = await Profile.findOneAndUpdate(
    //     {},
    //     // { username: req.body.username }, // Make sure to search by username
    //     { profile: profilePath }, // Update the profile picture path
    //     { new: true, upsert: true } // Use `upsert` to create a new profile if it doesn't exist
    //   );

    //   if (!updatedProfile) {
    //     return res.status(404).json({ message: 'Profile not found' });
    //   }

    //   res.json(updatedProfile);
    // } 
    catch (error) {
      console.error("Error updating profile:", error);
      res.status(400).json({ error: error.message });
    }
  });
};
// Get works by username
const getWorksByUsername = async (req, res) => {
  
  try {
    const project = await Project.find();
    if (!project.length) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a work
const updateWork = async (req, res) => {
  // console.log("getting work");
  upload(req, res, async (err) => {
    if (err) {
      console.log("Error during file upload:", err);
      return res.status(400).json({ error: err.message });
    }
 
    const photoPath = req.file ? req.file.path : null;
  const {id} = req.params;
  const {  projectname, skill,  description } = req.body;
                console.log(photoPath);
  try {
    const updatedWork = await Project.findByIdAndUpdate(
      id,
      { projectname, skill, description ,photo:photoPath},
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
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
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
