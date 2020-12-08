const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const authRoute = require("./routes/auth");
const authToken = require("./middlewares/authToken");
const cors = require("cors");

//create express instance
const App = express();
App.use(express.urlencoded({ extended: false }));

//this cors module adds a header to the request allowing communication with the server
App.use(cors());

//body-parser configuration
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));

//Middleware
App.use(authToken);

//Routes
App.use("/users", userRoutes);
App.use("/auth", authRoute);

//export app to use in server
module.exports = App;
