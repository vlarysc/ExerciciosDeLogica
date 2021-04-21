var nota1 = prompt("Digite um número");
nota1 = parseInt(nota1);
var nota2 = prompt("Digite um número");
nota2 = parseInt(nota2);

var media = (nota1 + nota2) / 2;

function calculo(media) {
  if (media > 7) {
    console.log("Parabéns você foi aprovado");
  } else {
    console.log("Infelizmente você reprovou");
  }
  return;
}
console.log(calculo(media));
