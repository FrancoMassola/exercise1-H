const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    password: {
        type: String,
        unique: true,
        required: true
    },
});

module.exports = mongoose.model('User', UserSchema);
