angular.module('diretivas', [])
    .directive('meuHeader', function() {

        var ddo = {
            restrict: 'AE',
            templateUrl: 'js/directives/header.html'
        };

        return ddo;
    })
    .directive('meuFooter', function() {

        var ddo = {
            restrict: 'AE',
            templateUrl: 'js/directives/footer.html'
        };

        return ddo;
    })
    .directive('produto', function() {

        var ddo = {
            restrict: 'AE',
            templateUrl: 'js/directives/produto.html'
        };

        return ddo;
    });
