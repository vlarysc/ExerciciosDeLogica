let produtos = [100, 250, 1.99, 14.5];

function formatandoProdutos(produtos) {
  var resultado = [];

  for (var i = 0; i < produtos.length; i++) {
    produtos[i] = produtos[i].toFixed(2);
    produtos[i] = produtos[i].replace(".", ",");
    resultado[i] = "R$" + produtos[i];
  }

  return resultado;
}

console.log(formatandoProdutos(produtos));

/* function formatandoProdutos(produtos) {
  var resultado = [];
  for (var i = 0; i < produtos.length; i++) {
    resultado[i] = produtos[i].toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return resultado;
}

console.log(formatandoProdutos(produtos)); */
