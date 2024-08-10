const Achievement = require('../models/About/Achievement');

// Create a new achievement
const createAchievement = async (req, res) => {
  const { username, achievement } = req.body;

  try {
    const newAchievement = new Achievement({ username, achievement });
    await newAchievement.save();
    res.status(201).json(newAchievement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createOrUpdateAchievement = async (req, res) => {
  const {achievement } = req.body;
console.log("achievement",achievement);
  try {
    const   userAchievement = await Achievement.findOneAndUpdate(
    
      {},  // The filter criteria to find the user
          { $set: { achievement:achievement } },  // The update operation
          { 
            new: true,  // Return the updated document
           upsert: true  // Insert a new document if none is found
          }
    );
    console.log(userAchievement)
    res.status(201).json(userAchievement.achievement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Update an existing achievement or create one if not found
const updateAchievement = async (req, res) => {
  const { id, username, achievement } = req.body;

  try {
    // Try to update the achievement
    const updatedAchievement = await Achievement.findByIdAndUpdate(
      id,
      { username, achievement },
      { new: true }
    );

    if (!updatedAchievement) {
      // If achievement not found, create a new one
      const newAchievement = new Achievement({ username, achievement });
      const savedAchievement = await newAchievement.save();
      return res.status(201).json(savedAchievement); // 201 status code for created
    }

    // If achievement is found and updated
    res.json(updatedAchievement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an achievement
const deleteAchievement = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedAchievement = await Achievement.findByIdAndDelete(id);

    if (!deletedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    res.json({ message: 'Achievement deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get achievements by username
const getAchievementsByUsername = async (req, res) => {
  // const { username } = req.params;
console.log("getting achievement");
  try {
    const achievements = await Achievement.findOne();
    console.log(achievements);
    if (!achievements) {
      return res.status(404).json({ message: 'Achievements not found' });
    }
    res.json(achievements);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createAchievement,
  updateAchievement,
  deleteAchievement,
  getAchievementsByUsername,
  createOrUpdateAchievement
};
