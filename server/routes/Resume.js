const express = require('express');
const multer = require('multer');
const router=express.Router();
const Resume=require('../models/resume');
// Multer configuration
const upload = multer();

// Upload route
router.post('/', upload.single('pdf'), async (req, res) => {

  const{username}=req.body;

    Resume.findOne({ userId }, async(err, userData) => {
          if (err) {
            console.error('Error finding user data:', err);
            res.status(500).send('Error finding user data');
            return;
          }


          if (!req.file) {
            return res.status(400).send('No file uploaded.');
          }
          //assigning values
          try {    
            const fileData = {
              data: req.file.buffer,
              contentType: req.file.mimetype,
              filename: req.file.originalname
            };
          //creating data entry
            if(!userData){
              await Resume.create(fileData);
              console.log('File uploaded successfully:', fileData.filename);
              res.send('File uploaded successfully.');
            }
            else{
              const u=Resume.findById(userId)
              await u.updateOne(fileData);
              console.log('File uploaded successfully:', fileData.filename);
              res.send('File uploaded successfully.');
            }
          } catch (error) {
            console.error('Error uploading file:', error);
            res.status(500).send('Error uploading file.');
          }
    })
});

module.exports=router;