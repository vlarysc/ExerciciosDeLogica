let valores = [1, 22, 3, 14, 5];

/* function dobro(valores) {
  return Math.max(...valores);
}

/* fazer um for com um if, não usar o Math.max


/* const max = (valores) => Math.max(...valores); */

/* console.log(max(valores));  */

function dobro(valores) {
  for (var i = 0; i < valores.length; i++) {
    switch (valores) {
      case 1:
        valores[0] > valores[1] ? (valores[0] = valores[1]) : valores;
        break;
      case 1:
        valores[1] > valores[2] ? (valores[1] = valores[2]) : valores;
        break;
      case 1:
        valores[2] > valores[3] ? (valores[2] = valores[3]) : valores;
        break;
      case 1:
        valores[3] > valores[4] ? (valores[3] = valores[4]) : valores;
        break;
      case 1:
        valores[4] > valores[5] ? (valores[4] = valores[5]) : valores;
        break;
    }
  }

  return valores;
}

console.log(dobro(valores));
