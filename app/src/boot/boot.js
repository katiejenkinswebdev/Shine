'use strict';

import angular from 'angular';

import App from 'src/app';

/**Manually bootstrap the application when AngularJS and
  *the application classes have been loaded.
  */

  angular
    .element(document)
    .ready(function() {
      angular
      .module ('shine-app-bootstrap' , [App.shine])
      .run(() => {
        console.log("Running the starter app for Shine!!!");
      });

      let body = document.getElementsByTagName("body")[0];
      angular.bootstrap(body, ['shine-app-bootstrap']);
    });
