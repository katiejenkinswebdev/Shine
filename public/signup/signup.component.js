(function() {
'use strict';

angular
  .module('signup.component', ['ui.router'])
  .component('signup' , {
    controller: Controller,
    templateUrl: 'signup/signup.template.html',
    styleUrls: 'css/signup.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;
    vm.submitSignup = submitSignup;
    vm.users = [];

    function onInit(){
      console.log("we made it to Sign Up Component onInit");
    }

    function submitSignup (name, password) {
      console.log("Sign Up submitted");

      var user = {name:name , password:password};
      console.log(user);

      $http.post('/api/users', user)
        .then(response => {
          console.log(response.data);
          vm.users.push(user);
          delete vm.user;
        });
    }
  }
}());
