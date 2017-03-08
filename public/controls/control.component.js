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
    vm.startTreatment = startTreatment;
    vm.submitTreatment = submitTreatment;
    vm.stopTreatment = stopTreatment;
    vm.treatments = [];
    vm.showTimerModal = false;
    // vm.seconds = 0;
    // vm.updateClock = updateClock;
    // vm.clock = document.getElementById('#clockdiv');
    // vm.secondsSpan = document.getElementById('#secondsSpan');

    function onInit(){
      // console.log("we made it to Control Component onInit");

      //controls side nav slide out
      $(".button-collapse").sideNav();
    }

    function startTreatment() {
      // console.log("start treatment triggered!");

      var modal = document.getElementById('timerModal');
      modal.style.display = "block";

      vm.showTimerModal = !vm.showTimerModal;

      let pubnub = PUBNUB.init({
        publish_key: 'pub-c-c38b69e7-3a86-4037-939b-98aa303bd887',
        subscribe_key: 'sub-c-45239d26-ff7d-11e6-8ce0-0619f8945a4f',
        ssl:
        true,
      });

      let channel = 'buzzers';
      // var startButton = document.getElementById('start');
      let buzzState = true;
      console.log('buzzState start ', buzzState);

      // Subscribe data from all subscribers of the channel to set the button state correctly//
      pubnub.subscribe({
        channel: channel,
        message: function(message) {
          buzzState = message.buzz; // raw data
          // buzzState = true; // toggle to label button
          // startButton.textContent = (buzzState) ? 'Buzzers On' : 'Stop Buzzers';
          console.log('buzzState subscribe state ' , buzzState);
        }
      });

        pubnub.publish({
          channel: channel,
          message: {buzz: buzzState},
          callback: function(message) {
            // console.log(message);
          }
        });
    }

    function submitTreatment (seconds, rating) {
      // console.log("submit treatment triggered");

      var treatment = {seconds:seconds, rating:rating};
      console.log('treatment ' ,treatment);

      //change seconds to milliseconds for timeout delay
      var milliSeconds = seconds * 1000;
      console.log(milliSeconds);

      //set timeout to trigger stop function
      setTimeout(stopTreatment, milliSeconds);

      //TODO Clear out form on submit and set as untouched
      // delete vm.treatment;
      // vm.submitTreatmentForm.$setPristine();
      // vm.submitTreatmentForm.$setUntouched();

      // var clock = document.getElementById('#clockdiv');
      // var secondsSpan = document.getElementById('#secondsSpan');

      // function updateClock(seconds) {
      //   console.log(seconds);
      //   // var s = seconds;
      //   // console.log(s);
      //   // var t = milliSeconds;
      //   // console.log('timer milliseconds ', t);
      //   //
      //   // // daysSpan.innerHTML = t.days;
      //   // // hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      //   // // minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      //   // secondsSpan.innerHTML = ('0' + milliSeconds).slice(-2);
      //   //
      //   // if (t.total <= 0) {
      //   //   clearInterval(timeinterval);
      //   // }
      // }
      //
      // // updateClock();
      // // var timeinterval = setInterval(updateClock, 1000);
      // // // }
      //
      //
      // //
      // // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
      // // initializeClock('clockdiv', deadline);
      //

      $http.post('/api/treatments', treatment)
        .then(response => {
          // console.log(response.data);
          vm.treatments.push(treatment);
          delete vm.treatment;
        });
    }

    function stopTreatment(){
      console.log('stop treatment triggered');

      var modal = document.getElementById('timerModal');
      modal.style.display = "none";

      let pubnub = PUBNUB.init({
        publish_key: 'pub-c-c38b69e7-3a86-4037-939b-98aa303bd887',
        subscribe_key: 'sub-c-45239d26-ff7d-11e6-8ce0-0619f8945a4f',
        ssl:
        true,
      });

      let channel = 'buzzers';
       var stopButton = document.getElementById('stop');
      //  console.log(stopButton);

       let buzzState = false;
      //  console.log('buzzState stop ', buzzState);

     // Subscribe data from all subscribers of the channel to set the button state correctly//
     pubnub.subscribe({
       channel: channel,
       message: function(message) {
         buzzState = message.buzz; // raw data
        //  buzzState = buzzState; // toggle to label button
        //  stopButton.textContent = 'Buzzers On';
         console.log('stop subscribe state ' , buzzState);
       }
     });

       pubnub.publish({
         channel: channel,
         message: {buzz: buzzState},
         callback: function(message) {
           console.log(message);
         }
     });
   }//end stopTreatment
  }//end of Controller
}()); //end of Controller
