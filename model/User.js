const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema=new Schema({
   
    fisrtName:String,
    lastName:String,
    email:String,
    Mobile:Number,
    password:String,
    registered_at:{ type: Date, default: Date.now }
})
const User = mongoose.model('User', userSchema);
module.exports=User