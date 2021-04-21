var largura = prompt("Digite a Largura");
largura = parseFloat(largura);
var altura = prompt("Digite a altura");
altura = parseFloat(altura);

function areaAlert(largura, altura) {
  alert(calcularArea(largura, altura));
}
function areaOutput(largura, altura) {
  var output = document.querySelector("#output");
  output.innerHTML = calcularArea(largura, altura);
}

function calcularArea(largura, altura) {
  return largura * altura;
}
