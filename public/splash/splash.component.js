(function() {
'use strict';

angular
  .module('splash.component', ['ui.router'])
  .component('splash' , {
    controller: Controller,
    templateUrl: 'splash/splash.template.html',
    styleUrls: 'css/splash.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
      console.log("we made it to Splash Component onInit");
    }
  }
}());
