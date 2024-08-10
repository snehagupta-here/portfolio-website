const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        
        const uri = 'mongodb://127.0.0.1:27017/admin';
       
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('DB Connected');
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
};

module.exports = connectDB;