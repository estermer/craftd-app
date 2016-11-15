(function(){
  app.module('craftd')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "/partials/home.html",
    })
    .state('favorites', {
      url: '/favorites',
      templateUrl: "/partials/favorites.html",
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .state('add', {
      url: '/add',
      templateUrl: "/partials/add.html",
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .state('show', {
      url: '/show',
      params: {
        item: null
      },
      templateUrl: "/partials/show.html",
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .state('edit', {
      url: '/edit',
      params: {
        item: null
      },
      templateUrl: "/partials/edit.html",
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .state('register', {
      url: '/register',
      templateUrl: "/partials/register.html",
    })
    .state('user', {
      url: '/user',
      templateUrl: "/partials/user.html",
      controller: 'MainCtrl',
      controllerAs: 'main'
    });

    $urlRouterProvider.otherwise('/');

  }; //end of routes


})();
