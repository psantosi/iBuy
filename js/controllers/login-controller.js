app.controller("LoginController",function(e,n,o){e.logar=function(){"admin"===e.login&&"admin"===e.senha?n.url("/produtos"):(e.mensagem="Usuario ou senha incorreta",o.open({template:"/templates/mensagem.html",className:"ngdialog-theme-default mensagem-box",scope:e}))}});