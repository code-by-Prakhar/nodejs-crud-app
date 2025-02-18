const express = require('express');
const { createUser,readUser, updateUser,deleteUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("user router")
})

router.post('/create',createUser)
router.get('/read',readUser)
router.patch('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

module.exports = router