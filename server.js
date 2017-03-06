'use strict';

//express server setup
const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv').config();
let port = process.env.PORT || 3000;

//johnny-five setup
const five = require('johnny-five');
let myBoard = new five.Board();

// parse application/x-www-form-urlencoded
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, '/./', 'node_modules')));

const treatments = require('./routes/treatments');
app.use('/api/treatments',treatments);

const users = require('./routes/users');
app.use('/api/users', users);

//wildcard route
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

//pubnub setup
var pubnub = require('pubnub').init({
  publish_key: 'pub-c-c38b69e7-3a86-4037-939b-98aa303bd887',
  subscribe_key: 'sub-c-45239d26-ff7d-11e6-8ce0-0619f8945a4f',
  ssl:
  true,
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

module.exports = app;
