const Skil = require('../models/About/Skil');

// Create a new skill
const createSkill = async (req, res) => {
  const { skill } = req.body;
  // console.log(req.body);
  try {
    // Create a new Title document
    console.log("coming request3abc");
    let skil= new Skil({ skill});
    console.log(skil);
    // Save the new title to the database
   
      const savedData = await skil.save();
        
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
// Edit a specific skill
const editSkill = async (req, res) => {
  const { skill } = req.body;
  const {id} = req.params;

  try {
    console.log("skill",skill);
    console.log("id",id);
    // const userTitle = await Titl.findOneAndUpdate(
    //   // { username, 'titles._id': titleId },
    //   // { $set: { 'titles.$.title': newTitle } },
    //   { $set: { 'titles.$.title': title } },
    //   { new: true }
    // );
    const updatedSkill= await Skil.findByIdAndUpdate(
      id,                          // The ID of the document to update
      { skill:skill },         // The update operation
      { new: true }                // Options: { new: true } returns the updated document
    );
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(updatedSkill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a specific skill
const removeSkill = async (req, res) => { // we are only getting a title id so find the title by id only
  const { id } = req.params;
  try{
    let skill = await Skil.findById(id);
    if(!skill){
       return res.status(400).send("skill doesn't exist");
    }
    let deletedSkill = await Skil.findByIdAndDelete(id);
    console.log(deletedSkill);
    res.json({success:"Note deleted successfully",deletedSkill:deletedSkill});
}catch(err){
   res.status(500).json({error:err.message});
}
};

// Get skills by username
const getSkillsByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const userSkills = await Skills.findOne({ username });
    if (!userSkills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.json(userSkills);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllSkills = async (req,res) =>{

  console.log("ready to fetch");
  try{
    let skill =await  Skil.find();
    console.log("all skills are sent");
    res.json(skill);
}
catch(err){
  console.log("error while fetching...");
    res.status(400).json({errors:err.message});
}
};

module.exports = {
  createSkill,
  editSkill,
  removeSkill,
  getSkillsByUsername,
  getAllSkills
};
