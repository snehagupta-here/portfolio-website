const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSchema = new Schema({
    profilePicUrl: { type: String },
    fullName: { type: String, required: true },
    lastName: { type: String, required: true },
    titles: [{ type: String, required: true }],
    introduction: { type: String, required: true },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
