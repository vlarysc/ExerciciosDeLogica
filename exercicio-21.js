var entrada = prompt("Digite um número");
entrada = parseFloat(entrada);
entrou();

function entrou() {
  var tela = document.querySelector("#tela");
  tela.innerHTML = entrada;
}

function somar() {
  var valor = prompt("Digite um número");
  valor = parseFloat(valor);
  entrada = entrada + valor;
  entrou();
}
function subtrair() {
  var valor = prompt("Digite um número");
  valor = parseFloat(valor);
  entrada = entrada - valor;
  entrou();
}
function multiplicar() {
  var valor = prompt("Digite um número");
  valor = parseFloat(valor);
  entrada = entrada * valor;
  entrou();
}
function dividir() {
  var valor = prompt("Digite um número");
  valor = parseFloat(valor);
  entrada = entrada / valor;
  entrou();
}
