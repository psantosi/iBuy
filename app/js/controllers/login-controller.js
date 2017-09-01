app.controller('LoginController', ['$scope', '$location', 'ngDialog', 'BASE_HREF',  function($scope, $location, ngDialog, BASE_HREF) {

    $scope.logar = function() {

        if ($scope.login === 'admin' && $scope.senha === 'admin') {
            $location.url('/produtos')
        } else {
            $scope.mensagem = 'Usuario ou senha incorreta';
            ngDialog.open({ 
                template: BASE_HREF + '/templates/mensagem.html',
                className: 'ngdialog-theme-default mensagem-box',
                scope: $scope
            });
        }
    }
}]);