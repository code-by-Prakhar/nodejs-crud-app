const express = require('express');
const connectDB = require('./db/connection');
const userRouter = require('./routes/user.routes')

const app = express();

const port = 3000;

connectDB();

app.use(express.json()); // parse JSON request body

app.use('/api',userRouter)

app.get('/',(req,res)=>{
    res.send("hello world")

})

app.listen(port,()=>{
    console.log(`server is started on ${port} port`)
})