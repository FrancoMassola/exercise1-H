const user = require('../models/user');

//list users
function index(req,res) {
    user.find({})
    .then(users =>{
        //if some users exist, return response to the client with users json and server status  200
        if(users.length) return res.status(200).send({users})
        //else return server status 204, without content in json
        return res.status(204).send({message: `No content`});
        //if the search generates an error, a response with status 500 is sent, internal server error
    }).catch(error => res.status(500).send({error}));
}

//create users
function createuser(req,res) {

}


module.exports = {
    index, createuser
}