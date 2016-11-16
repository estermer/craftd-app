(function(){
  angular.module('craftd')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "/partials/home.html",
    });

    $urlRouterProvider.otherwise('/');

  }; //end of routes


})();
