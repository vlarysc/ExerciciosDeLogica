let valores = [1, 2, 3, 4, 5];

function dobro(valores) {
  for (var i = 0; i < valores.length; i++) {
    valores[i] = valores[i] * 2;
  }

  return valores;
}

console.log(dobro(valores));
