(function() {
'use strict';

angular
  .module('signup.component', ['ui.router'])
  .component('signup' , {
    controller: Controller,
    templateUrl: 'signup/signup.template.html',
    styleUrls: 'css/signup.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
      console.log("we made it to Sign Up Component onInit");
    }
  }
}());
