const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//define data schema
const UserSchema = new Schema({
    //add settings, the name and password must be unique and always required
    name: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
});

//execute action before a specific method on userController
UserSchema.pre('save',function(next){
    //the password is hashed
    bcrypt.genSalt(10).then(salts =>{
        bcrypt.hash(this.password,salts).then(hash =>{
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

module.exports = mongoose.model('User', UserSchema);
