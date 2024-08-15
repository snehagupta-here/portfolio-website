const Contact = require('../models/contact');
const multer  = require('multer');
const upload = multer();  // This will handle `multipart/form-data`

// Create or update contact information
const createOrUpdateContact = async (req, res) => {
  upload.none()(req, res, async (err) => {
    if (err) {
      console.log("Error:", err.message);
      return res.status(400).json({ error: err.message });
    }

    const { types, ids } = req.body;
    const {id} = req.params;
    // Validate input data
    if (!types || !ids) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

  try {
    console.log("updating contact");
    let contact = await Contact.findByIdAndUpdate(
      id,
      {ids,types},
      {new:true}
    );
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
};

// Get contact information by username
const getContactByUsername = async (req, res) => {
  // const { username } = req.params;

  try {
    const contact = await Contact.find();
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    console.log("contact sent",contact);
    res.json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createContact = async (req, res) => {
  upload.none()(req, res, async (err) => {
    if (err) {
      console.log("Error:", err.message);
      return res.status(400).json({ error: err.message });
    }

    const { types, ids } = req.body;
    
    // Validate input data
    if (!types || !ids) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new contact instance
    const contact = new Contact({
      types,
      ids
    });

    try {
      // Save the new contact to the database
      console.log("contact created",contact);
      const newContact = await contact.save();
      res.status(201).json(newContact); // Use 201 status for successful creation
    } catch (error) {
      console.error("Error saving contact:", error.message);
      res.status(500).json({ error: 'Failed to save contact' });
    }
  });
};
const deleteContact = async (req,res) =>{
  try{
              let {id} = req.params;
              const deletedContact = await Contact.findByIdAndDelete(id);
              if (!deletedContact) {
                return res.status(404).json({ message: 'Contact not found' });
              }
              res.json({ message: 'Contact deleted successfully' });
               
  }catch(e){
      res.status(500).json({ error: e.message });
  }
}
module.exports = {
  createOrUpdateContact,
  getContactByUsername,
  createContact,
  deleteContact
};
