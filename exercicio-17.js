var ano = 1004;
ano = parseFloat(ano);

function tabuada(ano) {
  while (ano <= 2017) {
    document.write(ano + "<br>");
    ano = ano + 4;
  }
  return;
}

console.log(tabuada(ano));
