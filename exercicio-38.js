var turma = [
  { nome: "Maria", nota: [8, 5, 7, 10] },
  { nome: "Manoel", nota: [7, 4, 6, 8] },
  { nome: "Renata", nota: [3, 8, 5, 7] },
  { nome: "Karis", nota: [1, 9, 8, 10] },
  { nome: "Marcelo", nota: [5, 5, 9, 9] },
];

var texto = "";

for (var i = 0; i < turma.length; i++) {
  texto +=
    "<p>Notas de " + turma[i].nome + ": " + turma[i].nota.join(", ") + "  </p>";
  var nota = turma[i].nota;
  var soma = 0;
  for (var j = 0; j < nota.length; j++) {
    soma += nota[j];
  }
  var notaMedia = soma / nota.length;
  texto +=
    "<p> A média anual de " + turma[i].nome + " é: " + notaMedia + " </p><hr> ";
}

document.querySelector("#output").innerHTML = texto;
