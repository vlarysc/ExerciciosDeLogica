let produtos = [100, 250, 1.99, 14.5];
let novosProdutos = [150.99, 90, 84.99];

function formatandoProdutos(produtos) {
  var resultado = [];

  for (var i = 0; i < produtos.length; i++) {
    produtos[i] = produtos[i].toFixed(2);
    produtos[i] = produtos[i].replace(".", ",");
    produtos.push(novosProdutos);
    resultado[i] = "R$" + produtos[i];
  }

  return resultado;
}

console.log(formatandoProdutos(produtos));
