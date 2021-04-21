var nota1 = prompt("Digite a primeira nota");
nota1 = parseInt(nota1);
var nota2 = prompt("Digite a segimda nota");
nota2 = parseInt(nota2);

var media = (nota1 + nota2) / 2;

if (nota1 > 0 && nota2 > 0 && media > 5) {
  alert("Parabéns você foi aprovado");
} else {
  alert("Lamentamos, mas você foi reprovado");
}
