//Um usuário fazendo compras num site colocou vários produtos no carrinho.
//Os preços desses produtos estão no array seguinte: [100, 250, 1.99, 14.50].
//Crie uma função que calcule o total do valor do carrinho de compras. Imprima o resultado na tela com console.log.

var produtos = [100, 250, 1.99, 14.5];

//criar bloco de função
function somar_produtos(produtos) {
  //criar uma variavel para guardar os novos valores
  var res = 0;
  //criar um for utilizando como parametro produtos
  for (var i = 0; i < produtos.length; i++) {
    res += produtos[i];
  }
  //retornar nova variavel
  return res;
}

console.log(somar_produtos(produtos));
