(function() {
'use strict';
// console.log('app.config connected!');

  angular
    .module('app', [ 'ui.router', 'splash.component', 'control.component','learn.component' , 'profile.component'])
    .config(config);

  config.$inject = ['$stateProvider' , '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'splash',
        url: '/',
        component: 'splash',
      })
      .state({
        name: 'control',
        url: '/control',
        component: 'control',
      })
      .state({
        name: 'learn',
        url: '/learn',
        component: 'learn'
      })
      .state({
        name: 'profile',
        url: '/profile',
        component: 'profile'
      });
    }
}());
