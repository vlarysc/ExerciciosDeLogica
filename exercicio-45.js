//O usuário do exercício anterior decidiu acrescentar 3 livros a compra dele,
//os valores desses itens são [150.99, 90, 84.99]. Crie um for e use PUSH para acrescentar os itens no carrinho.
//Imprima o resultado na tela com console.log.

let produtos = [3.9, 25.5, 100.99, 4.5];

let nArray = [150.99, 90, 84.99];

function somar_produtos(produtos, nArray) {
  let res = produtos;
  for (let i = 0; i < nArray.length; i++) {
    res.push(nArray[i]);
  }

  for (let j = 0; j < res.length; j++) {
    res[j] = res[j].toFixed(2);
    res[j] = res[j].replace(".", ",");
    res[j] = `R$ ${res[j]}`;
  }

  return res;
}

console.log(somar_produtos(produtos, nArray));
