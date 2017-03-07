(function() {
'use strict';

angular
  .module('login.component', ['ui.router'])
  .component('login' , {
    controller: Controller,
    templateUrl: 'login/login.template.html',
    styleUrls: 'css/login.styles.css'
  });

  Controller.$inject = ['$http'];

  function Controller($http) {
    const vm = this;

    vm.$onInit = onInit;
    vm.logIn = logIn;

    function onInit(){
      console.log("we made it to Login Component onInit");
    }

    function logIn(name, password){
      console.log("logIn function triggered");
      var user = {name:name , password:password};

      $http.post('/api/users', user)
        .then(response => {
          // console.log(response.data);
          // vm.users.push(user);
          // delete vm.user;
        });
    }
  }
}());
