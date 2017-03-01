'use strict';

//nwjs process.stdin fix to use with johnny-five
// nw.require("nwjs-j5-fix").fix();

//express server setup
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

//johnny-five setup
const five = require('johnny-five');
var myBoard = new five.Board();

//sockets testing
// const server = require('http').Server(app);
// const io = require('socket.io')(server);

let buzzers = null;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
});

myBoard.on("ready" , function() {
  console.log("Arduino is ready!");
  // led initial test
  // var led = new five.Led(13);
  //   led.blink(500);

  let buzzer1 = new five.Led(3);
  let buzzer2 = new five.Led(6);

    function buzzerOn(){
      //buzzer1
      myBoard.wait(null, function() {
        //pulse for 1 second
        // buzzer1.pulse(1000);
      });

      //buzzer2
      myBoard.wait(1000, function() {
        //pulse for 1 second
        // buzzer2.pulse(1000);
      });

      //turn off buzzer after 10 seconds
      myBoard.wait(10000, function() {
        buzzer1.stop().off();
        buzzer2.stop().off();
      });
    }

    //invoke buzzerOn() function
    buzzerOn();

    function buzzerOff(){
      myBoard.wait(10000, function(){
        buzzer1.stop().off();
        buzzer2.stop().off();
      });
    }

    //invoke buzzerOff() function
    buzzerOff();
  });

//express server listening on port
app.listen(port, function (){
  console.log("Listening on port", port);
});
