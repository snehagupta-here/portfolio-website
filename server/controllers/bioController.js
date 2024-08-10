const Bio = require('../models/About/Bio');

const createBio = async (req, res) => {
  const {  bio } = req.body;

  try {
    const newIntroduction = new Bio({ bio });
    await newIntroduction.save();
    res.status(201).json(bio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrUpdateBio = async (req, res) => {
  const {bio } = req.body;

  try {
    const userBio = await Bio.findOneAndUpdate(
    
      {},  // The filter criteria to find the user
          { $set: { bio:bio } },  // The update operation
          { 
            new: true,  // Return the updated document
           upsert: true  // Insert a new document if none is found
          }
    );
    res.status(201).json(userBio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBioByUsername = async (req, res) => {
  // const { username } = req.params;

  try {
    const userBio = await Bio.findOne();
    if (!userBio) {
      return res.status(404).json({ message: 'Bio not found' });
    }
    res.json(userBio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrUpdateBio,
  getBioByUsername,
  createBio
};
