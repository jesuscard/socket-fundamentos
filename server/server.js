const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http')  

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = esta es la comunicación del backend
module.exports.io = socketIO (server);
require('../server/sockets/sockect');




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});