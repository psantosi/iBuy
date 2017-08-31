angular.module('diretivas', [])
    .directive('meuHeader', ['BASE_HREF', function() {

        var ddo = {
            restrict: 'AE',
            templateUrl: BASE_HREF + 'js/directives/header.html'
        };

        return ddo;
    }])
    .directive('meuFooter', ['BASE_HREF', function() {

        var ddo = {
            restrict: 'AE',
            templateUrl: BASE_HREF + 'js/directives/footer.html'
        };

        return ddo;
    }])
    .directive('produto', ['BASE_HREF', function() {

        var ddo = {
            restrict: 'AE',
            templateUrl: BASE_HREF + 'js/directives/produto.html'
        };

        return ddo;
    }]);
