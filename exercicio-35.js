var sorteados = numerosSorteados();
var output = document.querySelector("#output");
var texto = "";
texto += "<h2>Números sorteados:  </h2>";
texto += "<h4>" + sorteados.join(", ") + "</h4>";
var meusNumeros = [10, 7, 11, 55, 23, 46];

for (var i = 0; i < meusNumeros.length; i++) {
  texto += "<p>" + meusNumeros[i] + ": ";
  if (sorteados.indexOf(meusNumeros[i]) === -1) {
    texto += "Errou";
  } else {
    texto += "Acertou";
  }
  texto += "</p>";
}
output.innerHTML = texto;

function numerosSorteados() {
  var sorteados = [];
  function sorteio() {
    return Math.floor(Math.random() * 60);
  }
  while (sorteados.length < 6) {
    var resultado = sorteio();
    if (sorteados.indexOf(resultado) === -1) {
      sorteados.push(resultado);
    }
  }
  return sorteados;
}
