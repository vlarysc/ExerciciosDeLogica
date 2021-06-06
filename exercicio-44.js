//O usuário do exercício anterior decidiu acrescentar 3 livros a compra dele,
//os valores desses itens são [150.99, 90, 84.99]. Crie um for e use PUSH para acrescentar os itens no carrinho.
//Imprima o resultado na tela com console.log.

var produtos = [3.9, 25.5, 100.99, 4.5];

var nArray = [150.99, 90, 84.99];

function somar_produtos(produtos) {
  var res = [];
  res = parseFloat(res);

  for (var i = 0; i < produtos.length; i++) {
    produtos[i] = produtos[i].toFixed(2);
    produtos[i] = produtos[i].replace(".", ",");
    produtos.push(nArray);
    res[i] = `R$ ${produtos[i]}`;
  }

  return res;
}

console.log(somar_produtos(produtos));
