(function() {
'use strict';
// console.log('app.config connected!');

 var routerApp = angular
    .module('app', [ 'ui.router', 'control.component','learn.component' , 'profile.component'])
    .config(config);

  config.$inject = ['$stateProvider' , '$urlRouterProvider', '$locationProvider'];

  // routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // $urlRouterProvider.otherwise('/');

    // $locationProvider.html5Mode(true);
  //
  //   $stateProvider
  //   //HOME STATES AND NESTED VIEWS
  //     .state( 'control', {
  //       url: '/control',
  //       // templateUrl: 'control.template.html',
  //       component: 'control'
  //     })
  //     .state( 'learn' , {
  //       url: '/learn',
  //       // templateUrl: 'learn.template.html',
  //       component: 'learn'
  //     })
  //     .state( 'profile' , {
  //       url: '/profile',
  //       // templateUrl: 'learn.template.html',
  //       component: 'profile'
  //     });
  // });

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
