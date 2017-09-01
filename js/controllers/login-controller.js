app.controller('LoginController', ['$scope', '$location', 'ngDialog', function($scope, $location, ngDialog) {

    $scope.logar = function() {

        if ($scope.login === 'admin' && $scope.senha === 'admin') {
            $location.url('/produtos')
        } else {
            $scope.mensagem = 'Usuario ou senha incorreta';
            ngDialog.open({ 
                template: '/templates/mensagem.html',
                className: 'ngdialog-theme-default mensagem-box',
                scope: $scope
            });
        }
    }
}]);