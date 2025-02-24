const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    number:{
        type: Number,
        required: true,
    },
    city:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;