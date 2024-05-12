const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const uploadmiddleware = multer({dest:'uploads/'});
const Hero = require('./models/Hero.js');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const About = require('./models/About.js');
const fs = require('fs');
const contact = require('./models/contact');
const serv=require('./models/Services');
const testimonials = require('./models/Testimonials');
const work= require('./models/Work');
const User = require('./models/User')

const app = express();
const PORT = process.env.PORT || 5000;

//token salt generator
const salt= bcrypt.genSaltSync(10);
const tokensalt = 'AnonymousShad0w8';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/adminApp', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Define routes
const heroRouter = require('./routes/hero');
const contactRouter = require('./routes/contact');


app.use('/api/hero', heroRouter);
app.use('/api/contact', contactRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

//register function
app.post(''/*register form name */, async(req,res)=>{
    const {username,password} =req.body;
    try{
        const userDoc= await User.create({
        username,
        email,
        password,
        });
        res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);
    }
});

//login function
app.post(''/*login form name */, async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const pk = bcrypt.compareSync(password,userDoc.password);
    if(pk){
        //logged in
        jwt.sign({username, id:userDoc._id}, tokensalt, {}, (err,token) =>{         //assigning a token to the user if logged in
            if(err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        });
    }
    else{
        res.status(400).json('wrong credentials');
    }
})


// hero profile uploading
app.post(''/*the page from where the file is to be uploaded-fronted*/,uploadmiddleware.single(''/*the fieldname in the form */), async (req,res) =>{
    const {originalname,path,} = req.file;
    const part = originalname.split('.');
    const ext = part[part.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
        const {fullname,lastname,title,intro}=req.body;
        const postDoc = await Hero.create({
            //require the data in form and assign it here to store in the database
            profilePicUrl:newPath,
            fullName: fullname/*name from form */,
            lastName: lastname/*name from form */ ,
            titles: title/*title from form */,
            introduction: intro/*paragraph from form */,
        });
        res.json(postDoc);
});

app.post(''/*form name from where the services data has to be taken*/ , async (req,res) =>{
    const {token} = req.cookies;
    jwt.verify(token, tokensalt, {}, async (err,info) =>{
        if(err) throw err;
        const {bio,skills,achievments,services} = req.body;
        const postDoc = await abt.create({
            bio: bio,
            skills:skills,
            achievment:achievments,
            services:services,
            resume:resume,
        });
        res.json(postDoc);
    });
});

app.post(''/*form name from where the contact data has to be taken*/ , async (req,res) =>{
    const {token} = req.cookies;
    jwt.verify(token, tokensalt, {}, async (err,info) =>{
        if(err) throw err;
        const {email,phone,address} = req.body;
        const postDoc = await contact.create({
            email:email,
            phone:phone,
            address:address,
        });
        res.json(postDoc);
    });
});

app.post(''/*form name from where the services data has to be taken*/ , async (req,res) =>{
    const {token} = req.cookies;
    jwt.verify(token, tokensalt, {}, async (err,info) =>{
        if(err) throw err;
        const {des,services} = req.body;
        const postDoc = await serv.create({
            description:des,
            services:services,
        });
        res.json(postDoc);
    });
});

app.post(''/*form name from where the testimonials data has to be taken*/ , async (req,res) =>{
    const {token} = req.cookies;
    jwt.verify(token, tokensalt, {}, async (err,info) =>{
        if(err) throw err;
        const {author,company,position,testimonial} = req.body;
        const postDoc = await testimonials.create({
            author:author,
            company:company,
            position:position,
            testimonial:testimonial,
        });
        res.json(postDoc);
    });
});

app.post(''/*form name from where the work data has to be taken*/ , async (req,res) =>{
    const {token} = req.cookies;
    jwt.verify(token, tokensalt, {}, async (err,info) =>{
        if(err) throw err;
        const {projects} = req.body;
        const postDoc = await work.create({
            projects:projects
        });
        res.json(postDoc);
    });
});

