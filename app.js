'use strict';

//express server setup
const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

//johnny-five setup
const five = require('johnny-five');
let myBoard = new five.Board();

app.use(express.static(__dirname + '/public'));

app.get('/app.js', function (req, res){
  //call function within here
  // buzzerOn();
  console.log(res.send("GET request working from server"));
  // myBoard.buzzerOn();
  // res.send(buzzerOn());
});

  //constructor function to create new board
  function BoardController(myBoard){
    this.myBoard = myBoard;

    this.boardOn =
      myBoard.on("ready" , function() {
      console.log("Arduino is ready!");
      this.buzzer1 = new five.Led(3);
      // this.buzzer2 = new five.Led(6);
      });

    // this.buzzer1 = myBoard.buzzer1;
    // this.buzzer1 = new five.Led(3);
    // this.myBoardOn.buzzer2 = new five.Led(6);

    // this.buzzerOn =
    //   function buzzerOn(){
    //     //buzzer1
    //     myBoard.wait(null, function() {
    //       // pulse for 1 second
    //       this.buzzer1.pulse(1000);
    //     });
    //
    //     //buzzer2
    //     myBoard.wait(1000, function() {
    //       //pulse for 1 second
    //       // this.buzzer2.pulse(1000);
    //     });
    //
    //     //turn off buzzer after 10 seconds
    //     myBoard.wait(10000, function() {
    //       this.buzzer1.stop().off();
    //       // this.buzzer2.stop().off();
    //     });
    //   };
  }

  myBoard = new BoardController (myBoard);

  // this.boardOn();
  // myBoard.buzzerOn();

  //previous code before constructor
  // myBoard.on("ready" , function() {
  //   console.log("Arduino is ready!");
  //
  //   let buzzer1 = new five.Led(3);
  //   let buzzer2 = new five.Led(6);
  //
  //     function buzzerOn(){
  //       //buzzer1
  //       myBoard.wait(null, function() {
  //         // pulse for 1 second
  //         // buzzer1.pulse(1000);
  //       });
  //
  //       //buzzer2
  //       myBoard.wait(1000, function() {
  //         //pulse for 1 second
  //         // buzzer2.pulse(1000);
  //       });
  //
  //       //turn off buzzer after 10 seconds
  //       myBoard.wait(10000, function() {
  //         buzzer1.stop().off();
  //         buzzer2.stop().off();
  //       });
  //     }
  //
  //     //turn on Buzzer
  //     buzzerOn();
  //
  //     function buzzerOff(){
  //       myBoard.wait(10000, function(){
  //         buzzer1.stop().off();
  //         buzzer2.stop().off();
  //       });
  //     }
  //
  //     //turn off Buzzer
  //     buzzerOff();
  //
  //   });//end of myBoard

//express server listening on port
app.listen(port, function (){
  console.log("Listening on port", port);
});
