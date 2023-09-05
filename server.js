const express = require('express')
const app = express();
const blogs = require('./routes/blogs')
const authRouter = require('./routes/authRouter')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000

//middleware 

app.use(express.json())

app.use('/api/v1/blogs', blogs)
app.use('/api/v1/users', authRouter)

const start = async () =>{
    try{
        await connectDB(process.env.url)
        app.listen(port, ()=>{
            console.log(`Server started listening on port ${port}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();

