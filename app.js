'use strict';

var five = require('johnny-five');
var express = require('express');
var app = express();
var myBoard;

myBoard = new five.Board();

app.use(express.static(__dirname + '/public'));

myBoard.on("ready" , function() {
  console.log("Arduino is ready!");
});

app.listen('3000', function (){
  console.log("Listening on port ", 3000);
});
