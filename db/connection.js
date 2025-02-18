const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/user')
    .then(()=>{
        console.log("database connection established");
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDB;