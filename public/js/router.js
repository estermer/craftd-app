(function(){
  angular.module('craftd')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "partials/home.html",
    })
    .state('register', {
      url: '/register',
      templateUrl: "/partials/register.html"
    })
    .state('login', {
      url: '/login',
      templateUrl: "/partials/login.html"
    })
    .state('search-beers', {
      url: '/search-beers',
      templateUrl: "/partials/search-beers.html",
      controller: 'BeerCtrl',
      controllerAs: 'beer'
    })
    .state('user-home', {
      url: '/user-home',
      templateUrl: "/partials/user-home.html",
      controller: 'BeerCtrl',
      controllerAs: 'beer'
    });

    $urlRouterProvider.otherwise('/');

  }; //end of routes


})();
