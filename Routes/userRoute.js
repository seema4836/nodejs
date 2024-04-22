const express=require('express')
const router=express.Router()
const User=require('../model/User')

// Fetch User Data
router.get('/',(req,res)=>{
    //res.send("users data fetched")
User.find()
.then((users) => {
   res.json({
      "status":"OK",
      "message":"User Data fetched success",
      "data":users
   })
})
.catch((err) => console.log(err));

 })

 //insert data
 router.post("/",(req,res)=>{
//res.send("hii")
console.log(req.body)
const newUser = new User({
   fisrtName: req.body.fname,
   lastName:req.body.lname,
   email: req.body.email,
   password:req.body.password,
   Mobile: req.body.mobile
 });
 newUser.save()
 .then((user) =>{
   res.json({
      "status":200,
      "message":"User Created Success",
      "data":user
   })
 }).catch((err) => console.log(err));

 })



 // User Login

 router.post('/login',(req,res)=>{
   //res.send("User Login Success")
   


 })


 // Change Password



 // Forgot Password


 // User profile


 module.exports = router;