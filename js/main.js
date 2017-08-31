var app = angular.module('ibuy', ['ngRoute', 'diretivas', 'ngDialog'])
    .config(['routeProvider', 'locationProvider', function($routeProvider, $locationProvider){
        // $locationProvider.html5Mode(true);

        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });

         $routeProvider.when('/produtos', {
            templateUrl: 'templates/produtos.html',
            controller: 'ProdutosController'
        });

        $routeProvider.when('/finalizar-pedido', {
            templateUrl: 'templates/finalizar-pedido.html',
            controller: 'FinalizarPedidoCotroller'
        });

        $routeProvider.otherwise({redirectTo: '/login'});
    }]);