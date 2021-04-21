var numero1 = prompt("Digite um número");
numero1 = parseInt(numero1);
var numero2 = prompt("Digite um número");
numero2 = parseInt(numero2);

var media = (numero1 + numero2) / 2;

function calculo(media) {
  if (media > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(calculo(media));
