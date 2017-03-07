(function() {
'use strict';

angular
  .module('logout.component', ['ui.router'])
  .component('logout' , {
    controller: Controller,
    templateUrl: 'logout/logout.template.html',
    styleUrls: 'css/logout.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
      console.log("we made it to Logout Component onInit");
    }
  }
}());
