var app = angular.module('ibuy', ['ngRoute', 'diretivas', 'ngDialog'])
  .config(['$routeProvider', '$locationProvider', 'BASE_HREF', function ($routeProvider, $locationProvider, BASE_HREF) {

    $routeProvider.when('/login', {
      templateUrl: BASE_HREF + '/templates/login.html',
      controller: 'LoginController'
    });

    $routeProvider.when('/produtos', {
      templateUrl: BASE_HREF + '/templates/produtos.html',
      controller: 'ProdutosController'
    });

    $routeProvider.when('/finalizar-pedido', {
      templateUrl: BASE_HREF + '/templates/finalizar-pedido.html',
      controller: 'FinalizarPedidoCotroller'
    });

    $routeProvider.otherwise({ redirectTo: '/login' });
  }])
    .constant('BASE_HREF', '/iBuy');