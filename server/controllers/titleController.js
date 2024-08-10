const Titl = require('../models/Hero/Titl.js');

// Create a new title
const createTitle = async (req, res) => {
  const { title } = req.body;
  console.log(title);
  try {
    // Create a new Title document
    console.log("coming request");
    let titl = new Titl({ title});
    console.log(titl);
    // Save the new title to the database
   
      const savedData = await titl.save();
   
    console.log("savedData",savedData);
    res.json(savedData);
    //  console.log("savedData:", savedData);

    // Send the response with the saved data
    // return res.status(201).json(savedData.title); // Return the saved data, not just the title
  } catch (error) {
    // Handle errors and send an error response
    return res.status(400).json({ error: error.message });
  }
};


// Edit a specific title
const editTitle = async (req, res) => {
  // const { username, titleId, newTitle } = req.body;
const {title} = req.body;
const {id} = req.params;
  try {
    console.log("title",title);
    console.log("id",id);
    // const userTitle = await Titl.findOneAndUpdate(
    //   // { username, 'titles._id': titleId },
    //   // { $set: { 'titles.$.title': newTitle } },
    //   { $set: { 'titles.$.title': title } },
    //   { new: true }
    // );
    const updatedTitle = await Titl.findByIdAndUpdate(
      id,                          // The ID of the document to update
      { title: title },         // The update operation
      { new: true }                // Options: { new: true } returns the updated document
    );
    if (!updatedTitle) {
      return res.status(404).json({ message: 'Title not found' });
    }
    res.json(updatedTitle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
};

// Remove a specific title
const removeTitle = async (req, res) => { // we are only getting a title id so find the title by id only
  const { id } = req.params;
  try{
    let titl = await Titl.findById(id);
    if(!titl){
       return res.status(400).send("title doesn't exist");
    }
    let deletedTitle = await Titl.findByIdAndDelete(id);
    console.log(deletedTitle);
    res.json({success:"Note deleted successfully",deletedTitle:deletedTitle});
}catch(err){
   res.status(500).json({error:err.message});
}
};

// // Get titles by username
const getTitleByUsername = async (req, res) => {
  const { username } = req.params;
  try {
    const userTitle = await Title.findOne({ username });
    if (!userTitle) {
      return res.status(404).json({ message: 'Titles not found' });
    }
    res.json(userTitle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllTitles = async (req,res) =>{

  console.log("ready to fetch");
  try{
    let titl =await  Titl.find();
    console.log("all titles are sent");
    res.json(titl);
}
catch(err){
  console.log("error while fetching...");
    res.status(400).json({errors:err.message});
}
};

module.exports = {
  createTitle,
  editTitle,
  removeTitle,
  getTitleByUsername,
  getAllTitles 
};
