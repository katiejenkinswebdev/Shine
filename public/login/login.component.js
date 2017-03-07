(function() {
'use strict';

angular
  .module('login.component', ['ui.router'])
  .component('login' , {
    controller: Controller,
    templateUrl: 'login/login.template.html',
    styleUrls: 'css/login.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
      console.log("we made it to Login Component onInit");
    }
  }
}());
