require('dotenv').config()


 const Server = require(`${__dirname}/models/server`)
 const server =  new Server();


 server.listen();    
