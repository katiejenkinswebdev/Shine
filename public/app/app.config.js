(function() {
'use strict';
// console.log('app.config connected!');

 angular
    .module('app', [])
    .config(config)
  //
  // config.$inject = ['$stateProvider' , '$urlRouterProvider', '$locationProvider'];
  //
  // function config($stateProvider, $urlRouterProvider, $locationProvider){
  //
  // $locationProvider.html5Mode(true);
  //
  // $stateProvider
  //   .state({
  //     name: 'postMessage',
  //     url: '/',
  //     component: 'postMessage',
  //   })
  //   .state({
  //     name: 'updatePost',
  //     url: '/:id',
  //     component: 'updatePost'
  //   });
  // }
}());
