//require modules
const dataBase = require('./app/config/database');
const appConfig = require('./app/config/config');

const App = require('./app/app');
//connect to database
 dataBase.connect();
 //set port
 App.listen(appConfig.PORT,(error)=>{
        if(error) return console.log(error);
         console.log(`Server run on port ${appConfig.PORT}`);
     }


 );



