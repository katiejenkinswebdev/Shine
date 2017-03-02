'use strict';

//express server setup
const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

//johnny-five setup
const five = require('johnny-five');
let myBoard = new five.Board();

app.use(express.static(__dirname + '/public'));

///////PUBNUB/////////
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
    message: function(message) {
      if(message.buzz === true) {
        myBoard.wait(null, function(){
          buzzer1.pulse(750);
        });
        myBoard.wait(750, function(){
          buzzer2.pulse(750);
        });
        //toggle for timer shutoff
        // myBoard.wait(10000, function() {
        //   buzzer1.stop().off();
        //   buzzer2.stop().off();
        // });
      } else {
        //toggle for off button
          buzzer1.stop().off();
          buzzer2.stop().off();
      }
    },
    error: function(err)
    {console.log(err);}
  });
});

//express server listening on port
app.listen(port, function (){
  console.log("Listening on port", port);
});
