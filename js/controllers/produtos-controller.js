app.controller("ProdutosController",function(e,a,i){e.buscar="",e.carrinho=[],e.valorTotal=0,e.quantidadeTotal=0,e.openCarrinho=!1,e.produtos=[{id:1,imagem:"https://www.magodrive.com.br/Imagem/produtos/7896423421521.png",nome:"M&M",preco:"R$ 10,00",precoReal:"10",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus magna non scelerisque efficitur. Quisque eleifend cursus viverra. Ut eu massa scelerisque, viverra ipsum vel, porta dui. Nulla facilisi. Ut dapibus cursus massa, sit amet congue leo efficitur commodo. Duis sed nisl luctus, vulputate elit a, consequat nisi. Mauris gravida bibendum purus eu aliquet. Aenean orci libero, viverra ut egestas ac, auctor at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget dignissim leo, et tincidunt sem.",quantidade:1,quatidadeCarrinho:0},{id:2,imagem:"http://www.agenciadanoticia.com.br/imgsite/noticias/031063/amp-amp-7896071001175-rosquinhas-de-coco-pavesino-800g.jpg",nome:"Rosquinha de Coco",preco:"R$ 4,00",precoReal:"4",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus magna non scelerisque efficitur. Quisque eleifend cursus viverra. Ut eu massa scelerisque, viverra ipsum vel, porta dui. Nulla facilisi. Ut dapibus cursus massa, sit amet congue leo efficitur commodo. Duis sed nisl luctus, vulputate elit a, consequat nisi. Mauris gravida bibendum purus eu aliquet. Aenean orci libero, viverra ut egestas ac, auctor at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget dignissim leo, et tincidunt sem.",quantidade:1,quatidadeCarrinho:0},{id:3,imagem:"http://nortekcashandcarry-2e82.kxcdn.com/wp-content/uploads/wsi-imageoptim-coca-cola-sleek-can-cl33.jpg",nome:"Coca-Cola",preco:"R$ 5,00",precoReal:"5",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus magna non scelerisque efficitur. Quisque eleifend cursus viverra. Ut eu massa scelerisque, viverra ipsum vel, porta dui. Nulla facilisi. Ut dapibus cursus massa, sit amet congue leo efficitur commodo. Duis sed nisl luctus, vulputate elit a, consequat nisi. Mauris gravida bibendum purus eu aliquet. Aenean orci libero, viverra ut egestas ac, auctor at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget dignissim leo, et tincidunt sem.",quantidade:1,quatidadeCarrinho:0},{id:4,imagem:"http://www.naturahorta.com.br/image/cache/catalog/cestadefruta-500x500.jpg",nome:"Todas as frutas",preco:"20% de desconto",precoReal:"5",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus magna non scelerisque efficitur. Quisque eleifend cursus viverra. Ut eu massa scelerisque, viverra ipsum vel, porta dui. Nulla facilisi. Ut dapibus cursus massa, sit amet congue leo efficitur commodo. Duis sed nisl luctus, vulputate elit a, consequat nisi. Mauris gravida bibendum purus eu aliquet. Aenean orci libero, viverra ut egestas ac, auctor at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget dignissim leo, et tincidunt sem.",quantidade:1,quatidadeCarrinho:0},{id:5,imagem:"https://www.magodrive.com.br/Imagem/produtos/7896011906881.png",nome:"Arroz Blue Ville",preco:"R$ 10,00",precoReal:"10",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus magna non scelerisque efficitur. Quisque eleifend cursus viverra. Ut eu massa scelerisque, viverra ipsum vel, porta dui. Nulla facilisi. Ut dapibus cursus massa, sit amet congue leo efficitur commodo. Duis sed nisl luctus, vulputate elit a, consequat nisi. Mauris gravida bibendum purus eu aliquet. Aenean orci libero, viverra ut egestas ac, auctor at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget dignissim leo, et tincidunt sem.",quantidade:1,quatidadeCarrinho:0},{id:6,imagem:"http://emporiodacerveja.vteximg.com.br/arquivos/ids/162647-500-500/Trio-Vinhos-Frances.jpg",nome:"Vinhos",preco:"A partir de R$ 50,00",precoReal:"50",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus magna non scelerisque efficitur. Quisque eleifend cursus viverra. Ut eu massa scelerisque, viverra ipsum vel, porta dui. Nulla facilisi. Ut dapibus cursus massa, sit amet congue leo efficitur commodo. Duis sed nisl luctus, vulputate elit a, consequat nisi. Mauris gravida bibendum purus eu aliquet. Aenean orci libero, viverra ut egestas ac, auctor at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget dignissim leo, et tincidunt sem.",quantidade:1,quatidadeCarrinho:0},{id:7,imagem:"http://supermercadosnogueira.com.br/wp-content/uploads/supermercadosnogueira/2016/09/cream-cracker-fortaleza-500x500.jpg",nome:"Cream Cracker",preco:"R$ 3,00",precoReal:"3",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus magna non scelerisque efficitur. Quisque eleifend cursus viverra. Ut eu massa scelerisque, viverra ipsum vel, porta dui. Nulla facilisi. Ut dapibus cursus massa, sit amet congue leo efficitur commodo. Duis sed nisl luctus, vulputate elit a, consequat nisi. Mauris gravida bibendum purus eu aliquet. Aenean orci libero, viverra ut egestas ac, auctor at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget dignissim leo, et tincidunt sem.",quantidade:1,quatidadeCarrinho:0},{id:8,imagem:"https://mfresh.s3.amazonaws.com/uploads/product/image/avatar/27887/sadia-lasanha-frango.jpg",nome:"Lazanha de Frango",preco:"R$ 15,00",precoReal:"15",descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus magna non scelerisque efficitur. Quisque eleifend cursus viverra. Ut eu massa scelerisque, viverra ipsum vel, porta dui. Nulla facilisi. Ut dapibus cursus massa, sit amet congue leo efficitur commodo. Duis sed nisl luctus, vulputate elit a, consequat nisi. Mauris gravida bibendum purus eu aliquet. Aenean orci libero, viverra ut egestas ac, auctor at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget dignissim leo, et tincidunt sem.",quantidade:1,quatidadeCarrinho:0}],e.openDetalhes=function(i){e.produto=i,a.open({template:"/templates/detalhe-produto.html",className:"ngdialog-theme-default",scope:e})},e.adicionarCarrinho=function(i){a.close(),e.openCarrinho=!0,i.quatidadeCarrinho+=parseInt(i.quantidade);var s=!1;e.carrinho.forEach(function(e){e.id===i.id&&(s=!0)}),!1===s&&e.carrinho.push(i),atualizaTotalQuatidade()},e.toggleCarrinho=function(){e.openCarrinho=!e.openCarrinho},e.removerItem=function(a){e.carrinho.splice(a,1),atualizaTotalQuatidade()},atualizaTotalQuatidade=function(){e.valorTotal=0,e.quantidadeTotal=0,e.carrinho.forEach(function(a){e.valorTotal+=parseInt(a.precoReal)*parseInt(a.quatidadeCarrinho),e.quantidadeTotal+=a.quatidadeCarrinho})},e.finalizarPedido=function(){i.path("/finalizar-pedido")}});