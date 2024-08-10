const Firstname = require('../models/Hero/Firstname'); // Adjust the path to your Firstname model
const User = require('../models/Hero/user');
// Create a new firstname entry
const createFirstname = async (req, res) => {
  const { firstname } = req.body;

  try {
    const newFirstname = new Firstname({ username, firstname });
    await newFirstname.save();
    res.status(201).json(newFirstname);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update firstname by username
const updateFirstname = async (req, res) => {
  const {  firstname } = req.body;
      console.log("getting:",firstname);
      try {
        // Perform the update operation with the `upsert` option enabled
        let user = await User.findOneAndUpdate(
          {},  // The filter criteria to find the user
          { $set: { firstname: firstname } },  // The update operation
          { 
            new: true,  // Return the updated document
            upsert: true  // Insert a new document if none is found
          }
        );
        console.log("updated firstname",user.firstname);
        res.json(user.firstname);
      }
     catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateLastname = async (req, res) => {
  const {  lastname } = req.body;
      console.log("getting:",lastname);
      try {
        // Perform the update operation with the `upsert` option enabled
        let user = await User.findOneAndUpdate(
          {},  // The filter criteria to find the user
          { $set: { lastname: lastname } },  // The update operation
          { 
            new: true,  // Return the updated document
            upsert: true  // Insert a new document if none is found
          }
        );
        console.log("updated firstname",user.lastname);
        res.json(user.lastname);
      }
     catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Get firstname by username
const getFirstnameByUsername = async (req, res) => {
  // const { username } = req.params;

  try {
    const user = await User.find();
    if (!user) {
      return res.status(404).json({ message: 'Firstname not found' });
    }
    console.log(user);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createFirstname,
  updateFirstname,
  updateLastname,
  getFirstnameByUsername
};
