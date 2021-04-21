var n1 = prompt("Digite um número");
n1 = parseFloat(n1);
var n2 = prompt("Digite um número");
n2 = parseFloat(n2);

function calcular(n1, n2) {
  if (n1 === undefined || n2 === undefined) {
    throw new Error("Precisa de dois números");
  }

  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Apenas números");
  }
  return n1 * n2;
}

try {
  console.log(calcular(n1, n2));
} catch (e) {
  alert(e);
}
