(function() {
'use strict';

angular
  .module('learn.component', ['ui.router'])
  .component('learn' , {
    controller: Controller,
    templateUrl: 'learn/learn.template.html',
    styleUrls: 'css/learn.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
      console.log("we made it to Learn Component onInit");
      $(document).ready(function(){
        $('.collapsible').collapsible();
 });
    }

    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }
}());
