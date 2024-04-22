const mongoose=require('mongoose')


const conn=mongoose.connect("mongodb://localhost:27017/flipkart")

if(conn){
    console.log("connected")
}else{
    console.log("not connected")
}

//   // Read all users
// User.find()
// .then((users) => console.log(users))
// .catch((err) => console.log(err));

// // Update a user
// User.findOneAndUpdate({ _id: '661920019d5d0c059d04dda2'}, { email: 'test123@gmail.com',fisrtName:"Raj" ,lastName:"Rana"})
// .then(() => console.log('User updated'))
// .catch((err) => console.log(err));