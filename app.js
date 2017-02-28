'use strict';

var five = require('johnny-five');
var myBoard;

myBoard = new five.Board();

myBoard.on("ready" , function() {
  console.log("Arduino is ready!");
});
