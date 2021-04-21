var n1 = prompt("Digite a primeira nota");
n1 = parseInt(n1);

var n2 = prompt("Digite a segunda nota");
n2 = parseInt(n2);

var media = (n1 + n2) / 2;

if (n1 === 0 || n2 === 0 || media <= 5) {
  alert("Você foi reprovado");
} else {
  alert("Aprovado");
}
