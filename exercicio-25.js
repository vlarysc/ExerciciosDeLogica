var n2 = prompt("Digite um número");
n2 = parseFloat(n2);
entrou(n2);

function iniciarCalculo(operador) {
  var n1 = document.querySelector("#output").innerHTML;

  var n2 = prompt("Digite outro número");
  n2 = parseFloat(n2);

  var msg = calcular(operador, n1, n2);

  entrou(msg);
}
function entrou(mensagem) {
  var tela = document.querySelector("#output");
  tela.innerHTML = mensagem;
}

function calcular(operador, n1, n2) {
  var numeroCalculado = null;
  switch (operador) {
    case "+":
      numeroCalculado = n1 + n2;
      break;
    case "-":
      numeroCalculado = n1 - n2;
      break;
    case "*":
      numeroCalculado = n1 * n2;
      break;
    case "/":
      numeroCalculado = n1 / n2;
      break;
  }
  return numeroCalculado;
}
