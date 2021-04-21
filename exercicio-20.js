function mostrarTabuada() {
  //perguntar o numero
  let entrada = prompt("Digite um número");
  //converter o numero/
  entrada = parseInt(entrada);
  //criar variavel para indice
  var mensagem = "";
  //criar um laço
  for (var i = 0; i < 1001; i++) {
    mensagem += "i: " + entrada * i + "<br>";
    //concatenar na variavel
  }
  return (output.innerHTML = mensagem);
}

function limparTabuada() {
  mensagem = "";
  output.innerHTML = mensagem;
}
