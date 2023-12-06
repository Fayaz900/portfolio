const express = require('express')
const connectDB = require('./ConnectDb/DB')
const mainRoute = require('./Routes/Routes')
const errorHandler = require("./Middleware/errorHandler")
const cors = require('cors')


require('dotenv').config()

const app = express()

app.use(cors({
    origin:'http://localhost:5173',
}))

app.use(express.json())
app.use("/",mainRoute)
app.use(errorHandler);

const port = process.env.PORT || 8980

const startApp=async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to database');
        app.listen(port,()=>{
            console.log('server running on port 8980');
        })
        
    } catch (error) {
        console.log(error);
    } 
}


startApp()