angular.module('webapp',[
  'ngRoute',
    'home'
]).config([
  '$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
  }
]);
