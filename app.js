require('dotenv').config();

 const Server = require(`${__dirname}/models/Server`)
 const server = new Server();
 server.listen();    