var entrada = prompt("Digite um número");
entrada = parseFloat(entrada);
entrou();

function entrou() {
  var tela = document.querySelector("#tela");
  tela.innerHTML = entrada;
}

function calcular(operador) {
  var valor = prompt("Digite um número");
  valor = parseFloat(valor);
  switch (operador) {
    case "+":
      entrada = entrada + valor;
      break;
    case "-":
      entrada = entrada - valor;
      break;
    case "*":
      entrada = entrada * valor;
      break;
    case "/":
      entrada = entrada / valor;
      break;
  }
  entrou();
}
