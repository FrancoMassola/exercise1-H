const User = require('../models/user');
const bcrypt = require('bcrypt');

//pass name and password as parameters
function login(req,res) {
    let username = req.body.username;
    let password = req.body.password;
    //find user by username
    User.findOne({username: username})
    .then(user =>{
        if(!user) return res.status(404).send({message: `El usuario no existe`});
        
        bcrypt.compare(password,user.password)
            .then(match =>{
                if(match) return res.status(200).send({message: "Acceso"});
                return res.status(200).send({message: "Password incorrect"});

            }).catch(error =>{res.status(500).send({error});
        
        });
    }).catch(error => res.status(500).send({error}));
}

module.exports =  login;