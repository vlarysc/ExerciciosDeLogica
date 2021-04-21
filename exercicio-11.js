var Jogador1 = prompt("Jogador 1, Digite um número");
Jogador1 = parseInt(Jogador1);
var Jogador2 = prompt("Jogador 2, Digite um número ");
Jogador2 = parseInt(Jogador2);

if (Jogador1 === Jogador2) {
  alert("Empate");
} else {
  var sorteio = parseInt(Math.random(Jogador1, Jogador2) * 2);

  if (sorteio === 0) {
    if (Jogador1 > Jogador2) {
      alert("Vitória do jogador 1");
    } else {
      alert("Vitória do jogador 2");
    }
  } else {
    if (Jogador1 < Jogador2) {
      alert("Vitória do jogador 1");
    } else {
      alert("Vitória do jogador 2");
    }
  }
}
