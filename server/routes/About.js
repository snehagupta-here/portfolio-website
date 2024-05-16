const express=require('express');
const router=express.Router();
const About=require('../models/About');
// const multer=require('multer');
// const uploadmiddleware = multer({dest:'uploads/'});
// const fs = require('fs');

router.post('/', (req,res) =>{
        
        const username=req.body;
        const userId=username;

        
    About.findOne({ userId }, async(err, userData) => {
        if (err) {
          console.error('Error finding user data:', err);
          res.status(500).send('Error finding user data');
          return;
        }

        if(!userData){
            const {bio,skills,services,achievements}=req.body;
                console.log('no file uploaded');
                const postDoc = await About.create({
                    bio,
                    skills,
                    services,
                    achievements,
                });
                res.json(postDoc);
            }
        else{
            const {bio,skills,services,achievements}=req.body;
            const u=About.findById(userId);
                console.log('no file uploaded');
                const postDoc = await u.updateOne({
                    bio,
                    skills,
                    services,
                    achievements,
                });
                res.json(postDoc);
            }
    });

  });


  module.exports=router;
