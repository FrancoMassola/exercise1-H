const mongoose = require('mongoose');

//create a user schema
const userSchema = new mongoose.Schema({
    //object configuration
    userName: {
        type: String,
        unique: true,
        required: true 
    },
    userPassword: {
        type: String,
        unique: true,
        required: true 
    }
});
//create and export User model 
const user = mongoose.model('User',userSchema);
module.exports = user;