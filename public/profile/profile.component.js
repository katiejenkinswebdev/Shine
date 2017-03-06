(function() {
'use strict';

angular
  .module('profile.component', ['ui.router'])
  .component('profile' , {
    controller: Controller,
    templateUrl: 'profile/profile.template.html',
    styleUrls: 'css/profile.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
      console.log("we made it to Profile Component onInit");

      $http.get('/api/treatments')
      .then(results => {
        // console.log(results.data);
        vm.treatments = results.data;
        console.log(results.data);
      })



    }

    // $('.carousel.carousel-slider').carousel({fullWidth: true});
  }
}());
