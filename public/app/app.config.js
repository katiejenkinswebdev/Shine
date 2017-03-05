(function() {
'use strict';
// console.log('app.config connected!');

 angular
    .module('app', [ 'ui.router', 'control.component','learn.component'])
    .config(config);

  config.$inject = ['$stateProvider' , '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'control',
        url: '/',
        component: 'control',
      })
    .state({
      name: 'learn',
      url: '/:id',
      component: 'learn'
    });
  }
}());
