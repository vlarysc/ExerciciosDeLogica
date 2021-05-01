//Ao exibir os valores do carrinho de compras do usuário, eles não estão sendo formatados corretamente na tela,
//corrija esse problema colocando R$ na frente de cada valor. Crie um for retornando cada valor formatado corretamente,
//utilize o mesmo array de valores do exercício anterior. Imprima o resultado na tela com console.log.

var produtos = [3.9, 25.5, 100.99, 4.5];

function somar_produtos(produtos) {
  var res = [];

  for (var i = 0; i < produtos.length; i++) {
    produtos[i] = produtos[i].toFixed(2);
    produtos[i] = produtos[i].replace(".", ",");
    res[i] = `R$ ${produtos[i]}`;
  }

  return res;
}

console.log(somar_produtos(produtos));
