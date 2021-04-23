var sorteados = numerosSorteados();
var output = document.querySelector("#output");
var msg = "";

msg += "<h2>Números sorteados:  </h2>";
msg += "<h4>" + sorteados.join(", ") + "</h4>";

var meusNumeros = [10, 7, 11, 55, 23, 46];

for (var i = 0; i < meusNumeros.length; i++) {
  msg += "<p>" + meusNumeros[i] + ": ";
  if (sorteados.indexOf(meusNumeros[i]) === -1) {
    msg += "Errou";
  } else {
    msg += "Acertou";
  }
  msg += "</p>";
}

output.innerHTML = msg;

function numerosSorteados() {
  var sorteados = [];
  function sorteio() {
    return Math.floor(Math.random() * 60);
  }

  while (sorteados.length < 6) {
    //criar uma variavel para receber o laço
    var resultado = sorteio();
    //condição para testar o indexof(sorteado) se ele é indentico -1
    if (sorteados.indexOf(resultado) === -1) {
      //caso seja verdadeiro sorteados para receber sorteado
      sorteados.push(resultado);
    }
    console.log(resultado);
  }
  return sorteados;
}
