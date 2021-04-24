var notas = [
  [5, 4, 6, 8],
  [6, 5, 7, 10],
  [3, 2, 3, 4],
  [7, 5, 4, 9],
];

var texto = "";
var mediaAnual = 0;

for (var i = 0; i < notas.length; i++) {
  console.log(notas[i]);

  texto +=
    "<p> Notas do " +
    (i + 1) +
    "° Bimestre: " +
    notas[i].join(", ") +
    "  </p> ";

  var bimestre = 0;
  for (var j = 0; j < notas[i].length; j++) {
    console.log(notas[i][j]);
    bimestre += notas[i][j];
  }
  var bimestre = bimestre / notas[i].length;
  mediaAnual += bimestre;
  texto += "<p> A média do " + (i + 1) + "° é: " + bimestre + " </p><hr> ";
}

mediaAnual = mediaAnual / notas.length;
texto += "<p> <h1> A média anual é: " + mediaAnual + " <h1> </p>";
console.log("bimestre", bimestre);

document.querySelector("#output").innerHTML = texto;
