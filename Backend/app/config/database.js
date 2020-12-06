//database connection settings
const mongoose = require('mongoose');
const app_config = require('./config');

//the database connection module is exported
module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        //if the connection is null
        return mongoose.connect(app_config.DB,{useNewUrlParser: true,
        useUnifiedTopology: true }).then(connection =>{
            //a connection is assigned
            this.connection = connection;
            console.log(`successful connection to the database ${app_config.DB}`);
        //in case an error is generated in the connection, it must be captured
        }).catch(error =>console.log(error));
    }
}