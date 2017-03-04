(function() {
  'use strict';
  angular
    .module("app"  , ['ngMaterial'])
    .module('MyApp', ['ngMaterial'])
      .run(function() {
      console.log("My App is ready!")
}());
