const mongoose = require('mongoose');

const LetterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add your name']
    },
    age: {
        type: Number,
        required: [true, 'Please add your age']
    },
    pic: {
        type: String
    },
    isNice: {
        type: String,
        required: [true, 'Please tell if you were nice']
    },
    message: {
        type: String,
        required: [true, 'Please write a message']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Letter', LetterSchema);