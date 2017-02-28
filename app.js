'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const server = require('http').Server(app);
const io = require('socket.io')(server);
var myBoard;

myBoard = new five.Board();

app.use(express.static(__dirname + '/public'));

myBoard.on("ready" , function() {
  console.log("Arduino is ready!");
});

// Listen to the web socket connection
  io.on('connection', function(client) {
    client.on('join', function(handshake) {
      console.log(handshake);
    });
  });

app.listen(port, function (){
  console.log("Listening on port ", port);
});
