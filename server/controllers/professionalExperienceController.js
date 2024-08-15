const ProfessionalExperience = require('../models/About/ProfessionalExperience');

const createProfessionalExperience = async (req, res) => {
  const { profession, organization, location, startDate, endDate, description, isRemote, currentlyWorkinghere } = req.body;
    console.log("getting experience");
    console.log("profession",profession);
    console.log("organization",organization);
    console.log("location",location);
    console.log("startDate",startDate);
    console.log("description",description);
    console.log("isRemote",isRemote);
    console.log("currentlyWorkinghere",currentlyWorkinghere);
  try {
    const newExperience = new ProfessionalExperience({      
      profession, 
      organization, 
      location, 
      startDate, 
      endDate, 
      description, 
      isRemote, 
      currentlyWorkinghere 
    });
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProfessionalExperience = async (req, res) => {
  const { id } = req.params;
  const { profession, organization, location, startDate, endDate, description, isRemote, currentlyWorkinghere } = req.body;
  // console.log("getting experience");
  // console.log("profession",profession);
  // console.log("organization",organization);
  // console.log("location",location);
  // console.log("startDate",startDate);
  // console.log("description",description);
  console.log("isRemote",isRemote);
  console.log("currentlyWorkinghere",currentlyWorkinghere);
  try {
    const updatedExperience = await ProfessionalExperience.findByIdAndUpdate(
      id,
      { 
        profession, 
        organization, 
        location, 
        startDate, 
        endDate, 
        description, 
        isRemote, 
        currentlyWorkinghere 
      },
      { new: true }
    );
          console.log(updatedExperience);
    if (!updatedExperience) {
      return res.status(404).json({ message: 'Professional experience not found' });
    }

    res.json(updatedExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProfessionalExperience = async (req, res) => {
  const { id } = req.params;
console.log("deleting working");
  try {
    const deletedExperience = await ProfessionalExperience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({ message: 'Professional experience not found' });
    }

    res.json({ message: 'Professional experience deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProfessionalExperiencesByUsername = async (req, res) => {
  // const { username } = req.params;

  try {
    const experiences = await ProfessionalExperience.find();
    if (!experiences.length) {
      return res.status(404).json({ message: 'Professional experiences not found' });
    }
    res.json(experiences);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProfessionalExperience,
  updateProfessionalExperience,
  deleteProfessionalExperience,
  getProfessionalExperiencesByUsername
};
