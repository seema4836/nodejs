const express =require('express')
const app=express()
require("./database")
const userRoute=require('./Routes/userRoute')

// create application/x-www-form-urlencoded parser

 app.use(express.urlencoded({ extended: false }));

// create application/json parser
 app.use(express.json())
app.use('/users',userRoute)


app.listen(5500,()=>{
    console.log("server is running on port no 5500")
})