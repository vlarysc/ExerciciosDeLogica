var produtos = [
  { nome: "Caneta", preco: 1.2, qtd: 20 },
  { nome: "Lápis", preco: 0.2, qtd: 55 },
  { nome: "Borracha", preco: 2.0, qtd: 20 },
  { nome: "Corretivo", preco: 5.1, qtd: 15 },
  { nome: "Mochila", preco: 120.5, qtd: 10 },
];

var output = document.querySelector("#output");

function mostrarProdutos(produtos) {
  var res = "";
  for (var i = 0; i < produtos.length; i++) {
    res +=
      "<p>Produto: " +
      produtos[i].nome +
      ", Valor: " +
      produtos[i].nome +
      ", Quantidade: " +
      produtos[i].qtd +
      "  </p>";
  }
  return res;
}

output.innerHTML = mostrarProdutos(produtos);

/* function mostrarProdutos(produtos) {
  output = "";
  for (var i = 0; i < produtos.length; i++) {
    output += document.querySelector(
      "#output"
    ).innerHTML = `Produto: ${produtos[i].nome}, Valor: ${produtos[i].preco}, Quantidade: ${produtos[i].qtd} <br> `;
  }

  return output;
}

output.innerHTML = mostrarProdutos(produtos); */
