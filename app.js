'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const server = require('http').Server(app);
// const io = require('socket.io')(server);
var myBoard;

myBoard = new five.Board();

app.use(express.static(__dirname + '/public'));

myBoard.on("ready" , function() {
  console.log("Arduino is ready!");
});

// Listen to the web socket connection

  // io.on('connection', function(socket) {
  //     socket.on('new message', function(message){
  //         io.emit('new message', message);
  //     });
  //     console.log('Someone has entered the chat room!');
  // });

//express server listening on port
app.listen(port, function (){
  console.log("Listening on port", port);
});
