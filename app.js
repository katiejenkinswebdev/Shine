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

    //controls length of time for buzzers to pulse
    // buzzer1.pulse(1000);
    // buzzer2.pulse(1000);

    //first argument controls time for buzzers to pulse
    // this.wait(10000, function() {
    //   buzzer1.stop().off();
    //   buzzer2.stop().off();
    // });

    function buzzerOn(){
      //buzzer1
      myBoard.wait(null, function() {
        // buzzer1.pulse(1000);
        // buzzer1.stop().off();
      });
    }

    //call buzzerOn() function
    buzzerOn();


    //test this loop
    // this.loop(1000, function() {
    //   buzzer1.pulse(1000);
    //   buzzer2.stop(1000);
    // });

    //buzzer2
    // this.wait(1000, function() {
    //   // buzzer2.pulse(1000);
    //   // buzzer2.stop().off();
    // });
  });

//
//   //initial state for buzzers
//   let state = {
//     buzzer1: 0, //on: 100;
//     buzzer2: 0 //off: 0;
//   };
//   console.log(state);
//
//   //map pins to analog output
//   buzzers = new five.Board ({
//     pins: {
//       buzzer1: 3,
//       buzzer2: 6
//     }
//   });
//
//   //helper function to set state
//   let setBuzzState = function(state){
//     buzzers.buzzValue({
//       buzzer1: state.buzzer1, //on: state.on,
//       buzzer2: state.buzzer2 //off: state
//     });
//   };
//
//
// // Listen to the web socket connection
//
//   io.on('connection', function(client) {
//     client.on('join', function(handshake){
//       console.log(handshake);
//     });
//
//     //set initial state
//     setBuzzState(state);
//     console.log(state);
//
//     //every time an event is sent, listen to it & grab new value for each individual buzzer
//
//     client.on('eventName' , function(data) {
//       state.buzzer1 = data.buzzValue === 100 ? data.value : state.buzzer1;
//       state.buzzer2 = data.buzzValue === 100 ? data.value : state.buzzer2;
//
//       //set new buzz value
//       setBuzzState(state);
//
//       //socket Listening
//       client.emit('eventName', data);
//       client.broadcast.emit('eventName', data);
//     });
//
//     //turn on the buzzers
//     buzzers.on();
//   }); //end of io.on sockets
// }); //end of myBoard.on

//express server listening on port
app.listen(port, function (){
  console.log("Listening on port", port);
});
