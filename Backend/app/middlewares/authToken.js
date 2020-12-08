const jwt = require("jsonwebtoken");
const config = require("../config/config");

//check token and permissions
module.exports = function (req, res, next) {
  if (req.path != "/api/auth/login") {
    //header Authorization Bearer "token" -- only for admin
    //token validation
    if (req.headers.authorization) {
      //get the token and separate the Bearer and "token" with a space generating an array
      let token = req.headers.authorization.split(" ")[1]; // take the only position "1" which is the token
      //decoded = token payload
      jwt.verify(token, config.Secret, function (error, decoded) {
        if (error) return res.status(403).send({ message: "invalid token" });
        if (req.method == "GET" || req.method == "POST") {
          if (decoded.role == "admin") {
            //in case of being an administrator permission is given to add and consult users
          } else
            res.status(403).send({ message: "you don't have permissions" });
        } else {
          next();
        }
      });
      next();
    } else res.status(403).send({ message: "you don't have permissions" });
  } else next();
};
