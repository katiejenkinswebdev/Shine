(function() {
'use strict';

angular
  .module('control.component' , [])
  .component('control' , {
    controller: Controller,
    templateUrl: 'controls/control.template.html',
    styleUrls: 'css/control.styles.css'
  });

  function Controller() {
    const vm = this;

    vm.$onInit = onInit;
    vm.submitNewTreatment = submitNewTreatment;
    vm.treatments = [];

    function onInit(){
      console.log("we made it to Control Component onInit");
    }

    function submitNewTreatment (seconds, rating) {
      console.log("submitNewTreatment triggered!");
      var treatment = {seconds:seconds, rating:rating};
      console.log(treatment);
      console.log(treatment.seconds);
      console.log({seconds});
    }

    // Initialize collapse button nav bar
    $(".button-collapse").sideNav();

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

  }//end of Controller
}());
