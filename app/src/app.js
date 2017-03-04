'use strict';

//Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

export default angular
  .module('shine-app' , ['ngMaterial'])
  .run(() => {
    console.log(`Starting the 'shine-app' module`);
  });


  
