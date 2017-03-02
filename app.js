'use strict';

//express server setup
const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

//johnny-five setup
const five = require('johnny-five');
let myBoard = new five.Board();

app.use(express.static(__dirname + '/public'));

///////PUBNUB TESTING/////////
var pubnub = require('pubnub').init({
  publish_key: 'pub-c-c38b69e7-3a86-4037-939b-98aa303bd887',
  subscribe_key: 'sub-c-45239d26-ff7d-11e6-8ce0-0619f8945a4f'
});

var channel = 'buzzers';

myBoard.on('ready', function() {
  var buzzer1 = new five.Led(3);
  var buzzer2 = new five.Led(6);

  pubnub.subscribe({
    channel: channel,
    message: function(m) {
      if(m.blink === true) {
        myBoard.wait(null, function(){
          buzzer1.pulse(750);
        });
        myBoard.wait(750, function(){
          buzzer2.pulse(750);
        });
      } else {
        buzzer1.stop();
        buzzer1.off();
        buzzer2.stop();
        buzzer2.off();
      }
    },
    error: function(err) {console.log(err);}
  });

});


/////////TESTING/////////
// app.get('/app.js', function (req, res){
//   //call function within here
//   // buzzerOn();
//   console.log(res.send("GET request working from server"));
//   // myBoard.buzzerOn();
//   // res.send(buzzerOn());
// });


  // //constructor function to create new board
  // function BoardController(myBoard){
  //   this.myBoard = myBoard;
  //
  //   this.boardOn =
  //     myBoard.on("ready" , function() {
  //       console.log("Arduino is ready!");
  //       //must define buzzer here
  //       let buzzer1 = new five.Led(3);
  //       // this.buzzer1 = new five.Led(3);
  //       // let buzzer2 = new five.Led(6);
  //     });
  //
  //   // this.buzzer1 = new five.Led(3);
  //   // this.boardOn.buzzer1 = buzzer1;
  //   // this.myBoardOn.buzzer2 = new five.Led(6);
  //
  //   this.buzzerOn =
  //     function buzzerOn(){
  //
  //       //buzzer1
  //       myBoard.wait(null, function() {
  //         // pulse for 1 second
  //         this.buzzer1.pulse(1000);
  //         // myBoard.this.buzzer1.pulse(1000);
  //         // myBoard.buzzer1.pulse(1000);
  //       });
  //   //
  //   //     //buzzer2
  //   //     myBoard.wait(1000, function() {
  //   //       //pulse for 1 second
  //   //       // this.buzzer2.pulse(1000);
  //   //     });
  //   //
  //   //     //turn off buzzer after 10 seconds
  //   //     myBoard.wait(10000, function() {
  //   //       this.buzzer1.stop().off();
  //   //       // this.buzzer2.stop().off();
  //   //     });
  //     };
  // }
  //
  // myBoard = new BoardController (myBoard);
  //
  // // this.boardOn();
  // myBoard.boardOn();
  // myBoard.buzzerOn();
  //
  // //previous code before constructor
  // // myBoard.on("ready" , function() {
  // //   console.log("Arduino is ready!");
  // //
  // //   let buzzer1 = new five.Led(3);
  // //   let buzzer2 = new five.Led(6);
  // //
  // //     function buzzerOn(){
  // //       //buzzer1
  // //       myBoard.wait(null, function() {
  // //         // pulse for 1 second
  // //         // buzzer1.pulse(1000);
  // //       });
  // //
  // //       //buzzer2
  // //       myBoard.wait(1000, function() {
  // //         //pulse for 1 second
  // //         // buzzer2.pulse(1000);
  // //       });
  // //
  // //       //turn off buzzer after 10 seconds
  // //       myBoard.wait(10000, function() {
  // //         buzzer1.stop().off();
  // //         buzzer2.stop().off();
  // //       });
  // //     }
  // //
  // //     //turn on Buzzer
  // //     buzzerOn();
  // //
  // //     function buzzerOff(){
  // //       myBoard.wait(10000, function(){
  // //         buzzer1.stop().off();
  // //         buzzer2.stop().off();
  // //       });
  // //     }
  // //
  // //     //turn off Buzzer
  // //     buzzerOff();
  // //
  // //   });//end of myBoard

//express server listening on port
app.listen(port, function (){
  console.log("Listening on port", port);
});
