const express=require('express');
const router=express.Router();
const Contact=require('../models/contact');

router.post('/', async (req,res) =>{
    const {email,phone,address,username}=req.body;
    const userId=username;
    Contact.findOne({ userId }, async(err, userData) => {
        if (err) {
          console.error('Error finding user data:', err);
          res.status(500).send('Error finding user data');
          return;
        }
        if(!userData){
            const postDoc = await Contact.create({
                email,
                phone,
                address,
            });
            res.json(postDoc);
        }
        else
        {
            const u=Contact.findById(userId)
            const postDoc = await u.updateOne({
                email,
                phone,
                address,
            });
            res.json(postDoc);
        }
  });
});
  module.exports=router;