app.controller('LoginController', function($scope, $location) {

    $scope.logar = function() {

        if ($scope.login === 'admin' && $scope.senha === 'admin') {
            $location.url('/produtos')
        } else {
            console.log('não');
        }
    }
});