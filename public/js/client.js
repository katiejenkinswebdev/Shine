'use strict';

// Use the same keys that you are going to use for Arduino code with Johnny-Five

var pubnub = PUBNUB.init({
  publish_key: 'pub-c-c38b69e7-3a86-4037-939b-98aa303bd887', // Use your pub key
  subscribe_key: 'sub-c-45239d26-ff7d-11e6-8ce0-0619f8945a4f' // Use your sub key
});

// Use the same channel name
var channel = 'buzzers';

var button = document.querySelector('button');

var buzzState = true;

/***
Subscribe data from all subscibers of the channel to set the button state correctly
***/
pubnub.subscribe({
  channel: channel,
  message: function(message) {
    buzzState = message.buzz; // the raw data
    buzzState = !buzzState; // toggle it to lable the button
    button.textContent = (buzzState) ? 'Buzzers On' : 'Stop Buzzers';
    console.log(buzzState);
  }
});

/*
Upon a button click, publish the data.
Arduino will subscribe it and turn on buzzers
*/
button.addEventListener('click', function(e) {
  pubnub.publish({
    channel: channel,
    message: {buzz: buzzState},
    callback: function(message) {
      console.log(message);
    }
  });

});
//
// ////////TESTING///////
// // (function() {
// //   console.log("document ready!");
// //     var on = document.getElementById("on");
// //     console.log(on);
// //
// //     var off = document.getElementById("off");
// //     console.log(off);
// //
// //     on.addEventListener("click" , function() {
// //       console.log("You clicked on!");
// //       $.ajax({
// //         url: '/app.js',
// //         type: 'GET',
// //         success: function(res){
// //           console.log(res);
// //           // alert(res);
// //         }
// //       });
// //     });
// //
// //     off.addEventListener("click" , function() {
// //       console.log("You clicked off!");
// //     });
// //
// // }());
