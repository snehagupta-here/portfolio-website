const ServiceDescription = require('../models/Services/ServiceDescription');

// Create a new service description
const createServiceDescription = async (req, res) => {
  const { username, serviceName, description } = req.body;

  try {
    const newServiceDescription = new ServiceDescription({ username, serviceName, description });
    await newServiceDescription.save();
    res.status(201).json(newServiceDescription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get service descriptions by username
const getServiceDescriptionsByUsername = async (req, res) => {
  // const { username } = req.params;
  try {
   
    const serviceDescriptions = await ServiceDescription.findOne();
    console.log(serviceDescriptions);
    if (!serviceDescriptions) {
      console.log("service");
      return res.status(404).json({ message: 'Service descriptions not found' });
    } 
    res.json(serviceDescriptions.description);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a service description
const updateServiceDescription = async (req, res) => {
  const { description } = req.body;
 console.log(description);
  try {
    const updatedServiceDescription = await ServiceDescription.findOneAndUpdate(   
      {},  
      { $set:{description:description}  },
      { new: true ,upsert:true}
   
      
    );
        console.log("updateServiceDescription",updateServiceDescription);
    if (!updatedServiceDescription) {
      return res.status(404).json({ message: 'Service description not found' });
    }

    res.json(updatedServiceDescription.description);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createServiceDescription,
  getServiceDescriptionsByUsername,
  updateServiceDescription
};
