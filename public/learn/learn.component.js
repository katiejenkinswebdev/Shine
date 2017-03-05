(function() {
'use strict';

angular
  .module('learn.component', [])
  .component('learn' , {
    controller: Controller,
    templateUrl: 'learn/learn.template.html',
    styleUrls: 'css/learn.styles.css'
  });

  function Controller() {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){
      console.log("we made it to Learn Component onInit");
    }

    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }
}());
