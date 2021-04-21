let produtos = [100, 250, 1.99, 14.5];

function somaProdutos(produtos) {
  var total = 0;
  for (var i = 0; i < produtos.length; i++) {
    total += produtos[i];
  }
  return total;
}

console.log(`R$ ${somaProdutos(produtos)}`);
