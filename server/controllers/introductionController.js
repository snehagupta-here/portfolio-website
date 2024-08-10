const Introduction = require('../models/Hero/Introduction');

// Create a new introduction
const createIntroduction = async (req, res) => {
  const {  introduction } = req.body;

  try {
    const newIntroduction = new Introduction({ introduction });
    await newIntroduction.save();
    res.status(201).json(newIntroduction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get introduction by username
const getIntroductionByUsername = async (req, res) => {
  // const { username } = req.params;
     
  try {
    const introduction = await Introduction.findOne();
    if (!introduction) {
      return res.status(404).json({ message: 'Introduction not found' });
    }
    console.log(introduction);
    res.json(introduction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update introduction
const updateIntroduction = async (req, res) => {
  const { introduction } = req.body;

  try {
    const updatedIntroduction = await Introduction.findOneAndUpdate(
      {},  // The filter criteria to find the user
          { $set: { introduction:introduction } },  // The update operation
          { 
            new: true,  // Return the updated document
           upsert: true  // Insert a new document if none is found
          }
    );
 
    if (!updatedIntroduction) {
      return res.status(404).json({ message: 'Introduction not found' });
    }
 console.log(updatedIntroduction);
    res.json(updatedIntroduction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createIntroduction,
  getIntroductionByUsername,
  updateIntroduction
};
