var produtos = new Array(
  "Pão",
  "Presunto",
  "Mussarela",
  "Salame",
  "Leite",
  "Aveia"
);

/* var output = document.querySelector("#output");

output.innerHTML = produto; */

function mostrarProdutos(produtos) {
  var produto = "";
  for (var i = 0; i < produtos.length; i++) {
    produto = produto + "produto " + (i + 1) + ": " + ` ${produtos[i]} <br>`;
  }
  return (output.innerHTML = produto);
}

console.log(mostrarProdutos(produtos));
