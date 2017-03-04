(function() {
  'use strict';

  angular
    .module("control.component" , [])

    .component("controlArduino" , {
      controller: Controller,
      templateUrl: "/controls/control.template.html"
    });

      function Controller() {
        const vm = this;

        vm.$onInit = onInit;

        function onInit(){
          console.log("we made it to onInit!");
        }
      }
}());
