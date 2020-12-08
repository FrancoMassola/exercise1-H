const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

//user authentication
//req name and password in body
function login(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;
  //find user by username
  User.findOne({ username: username })
    .then((user) => {
      if (!user)
        return res.status(404).send({ message: `El usuario no existe` });
      //password compare
      bcrypt
        .compare(password, user.password)
        .then((match) => {
          //implements json web tokens
          if (match) {
            payload = {
              username: user.username,
              name: user.name,
              role: user.role,
            };
            //sucessful login
            //payload and secret or private key - token generation
            jwt.sign(payload, config.Secret, function (error, token) {
              if (error) {
                res.status(500).send({ error });
              } else {
                res.status(200).send({ message: "Acceso", token });
              }
            });
          } else {
            //access denied
            res.status(200).send({ message: "Password incorrect" });
          }
        })
        .catch((error) => {
          res.status(500).send({ error });
        });
    })
    .catch((error) => res.status(500).send({ error }));
}

module.exports = login;
