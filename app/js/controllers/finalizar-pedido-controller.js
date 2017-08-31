app.controller('FinalizarPedidoCotroller', ['$scope', '$location', function($scope, $location) {


    $scope.valorTotal = 0;
    $scope.quantidadeTotal = 0;

    $scope.produtos = [
        {
            id: 1,
            imagem: 'https://www.magodrive.com.br/Imagem/produtos/7896423421521.png',
            nome: 'M&M',
            precoReal: 10,
            precoTotal: 10,
            quantidade: 1,
        },
        {
            id: 2,
            imagem: 'http://www.agenciadanoticia.com.br/imgsite/noticias/031063/amp-amp-7896071001175-rosquinhas-de-coco-pavesino-800g.jpg',
            nome: 'Rosquinha de Coco',
            precoReal: 4,
            precoTotal: 4,
            quantidade: 1,
        },
        {
            id: 3,
            imagem: 'http://nortekcashandcarry-2e82.kxcdn.com/wp-content/uploads/wsi-imageoptim-coca-cola-sleek-can-cl33.jpg',
            nome: 'Coca-Cola',
            precoReal: 5,
            precoTotal: 30,
            quantidade: 6,
        },
        {
            id: 4,
            imagem: 'http://www.naturahorta.com.br/image/cache/catalog/cestadefruta-500x500.jpg',
            nome: 'Todas as frutas',
            precoReal: 5,
            precoTotal: 10,
            quantidade: 2,
        },
        {
            id: 5,
            imagem: 'https://www.magodrive.com.br/Imagem/produtos/7896011906881.png',
            nome: 'Arroz Blue Ville',
            precoReal: 10,
            precoTotal: 20,
            quantidade: 2,
        },
        {
            id: 6,
            imagem: 'http://emporiodacerveja.vteximg.com.br/arquivos/ids/162647-500-500/Trio-Vinhos-Frances.jpg',
            nome: 'Vinhos',
            precoReal: 50,
            precoTotal: 50,
            quantidade: 1
        },   
        {
            id: 7,
            imagem: 'http://supermercadosnogueira.com.br/wp-content/uploads/supermercadosnogueira/2016/09/cream-cracker-fortaleza-500x500.jpg',
            nome: 'Cream Cracker',
            precoReal: 3,
            precoTotal: 18,
            quantidade: 6,
        },  
        {
            id: 8,
            imagem: 'https://mfresh.s3.amazonaws.com/uploads/product/image/avatar/27887/sadia-lasanha-frango.jpg',
            nome: 'Lazanha de Frango',
            precoReal: 15,
            precoTotal: 30,
            quantidade: 2,
        }
    ]

    $scope.produtos.forEach(function(item) {
        $scope.valorTotal += item.precoTotal;
        $scope.quantidadeTotal += item.quantidade;
    });

    $scope.voltarComprar = function() {
        $location.path('/produtos');
    }

}]);