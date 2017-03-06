(function() {
'use strict';

angular
  .module('control.component' , ['ui.router'])
  .component('control' , {
    controller: Controller,
    templateUrl: 'controls/control.template.html',
    styleUrls: 'css/control.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;
    vm.submitNewTreatment = submitNewTreatment;
    vm.stopTreatment = stopTreatment;
    vm.treatments = [];

    }//end of Controller

    function onInit(){
      console.log("we made it to Control Component onInit");
    }

    function submitNewTreatment (seconds, rating) {
      console.log("submitNewTreatment triggered!");

      let pubnub = PUBNUB.init({
        publish_key: 'pub-c-c38b69e7-3a86-4037-939b-98aa303bd887',
        subscribe_key: 'sub-c-45239d26-ff7d-11e6-8ce0-0619f8945a4f',
        ssl:
        true,
      });

      let channel = 'buzzers';

      var startButton = document.getElementById('start');
      console.log(startButton);

      let buzzState = true;
      console.log(buzzState);

      // // Subscribe data from all subscribers of the channel to set the button state correctly
      //
      pubnub.subscribe({
        channel: channel,
        message: function(message) {
          buzzState = message.buzz; // raw data
          buzzState = true; // toggle to label button
          startButton.textContent = (buzzState) ? 'Buzzers On' : 'Stop Buzzers';
          console.log(buzzState);
        }
      });

        pubnub.publish({
          channel: channel,
          message: {buzz: buzzState},
          callback: function(message) {
            console.log(message);
          }
        });

      // var treatment = {seconds:seconds, rating:rating};
      // console.log('treatment ' ,treatment);
      //
      // $http.post('/api/treatments', treatment)
      //   .then(response => {
      //     console.log(response.data);
      //     // vm.treatments.push(treatment);
      //     // delete vm.treatment;
      //   });
    }

    function stopTreatment(){
      console.log('clicking stop treatment');

      let pubnub = PUBNUB.init({
        publish_key: 'pub-c-c38b69e7-3a86-4037-939b-98aa303bd887',
        subscribe_key: 'sub-c-45239d26-ff7d-11e6-8ce0-0619f8945a4f',
        ssl:
        true,
      });

      let channel = 'buzzers';
       var stopButton = document.getElementById('stop');
       console.log(stopButton);

       let buzzState = false;
       console.log(buzzState);

       // // Subscribe data from all subscribers of the channel to set the button state correctly
       //
       pubnub.subscribe({
         channel: channel,
         message: function(message) {
           buzzState = message.buzz; // raw data
           buzzState = false; // toggle to label button
           stopButton.textContent = (buzzState) ? 'Buzzers On' : 'Stop Buzzers';
           console.log(buzzState);
         }
       });

         pubnub.publish({
           channel: channel,
           message: {buzz: buzzState},
           callback: function(message) {
             console.log(message);
           }
         });
    }


//declare variables at top
//move code into button to submit post

//TODO translate into angular
// var pubnub = PUBNUB.init({
//   publish_key: 'pub-c-c38b69e7-3a86-4037-939b-98aa303bd887',
//   subscribe_key: 'sub-c-45239d26-ff7d-11e6-8ce0-0619f8945a4f',
//   ssl:
//   true,
// });
//
// var channel = 'buzzers';
//
// var button = document.querySelector('button');
//
// var buzzState = true;
//
// // Subscribe data from all subscribers of the channel to set the button state correctly
//
// pubnub.subscribe({
//   channel: channel,
//   message: function(message) {
//     buzzState = message.buzz; // raw data
//     buzzState = !buzzState; // toggle to label button
//     button.textContent = (buzzState) ? 'Buzzers On' : 'Stop Buzzers';
//     console.log(buzzState);
//   }
// });
//
// // Upon a button click, publish the data. Arduino will subscribe it and turn on buzzers
//
// button.addEventListener('click', function(e) {
//   pubnub.publish({
//     channel: channel,
//     message: {buzz: buzzState},
//     callback: function(message) {
//       console.log(message);
//     }
//   });
// });


}()); //end of Controller
