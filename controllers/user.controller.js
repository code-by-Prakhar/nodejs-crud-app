const User = require("../models/user.model");

const createUser = async(req,res)=>{
   try {
     const {name,email,number,city} = req.body;
 
     if(!name || !email || !number || !city){
         return res.status(400).json({error: 'All fields are required.'});
     }
 
     const newUser = await User.create({
         name,
         email,
         number,
         city
     })
 
     res.status(201).json({user: newUser});
   } catch (error) {
    console.log(error)
    res.status(500).json({error:"internal server error",message:error.message})
   }
}

const readUser = async(req,res)=>{
    try {
    const userData = await User.find({});
    res.status(200).json({user:userData})
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async(req,res)=>{
    try {
        const id = req.params.id;
        console.log(id);
        const {name,email,number,city} = req.body;
        
        if(!name ||!email ||!number ||!city){
            return res.status(400).json({error: 'All fields are required.'});
        }

        const updatedUser = await User.findByIdAndUpdate(id,{name,email,number,city},{new:true})

        res.status(200).json({user: updatedUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal server error",message:error.message})
    }
}

const deleteUser = async(req,res) =>{
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.status(200).json({message: "User deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error",message:error.message})
    }
}

module.exports = {createUser,readUser,updateUser,deleteUser };