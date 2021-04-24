var nComputador = "";
var nJogador = "";
var minhaEscolha = "";

function sortear(max) {
  return Math.floor(Math.random() * max);
}

function play() {
  if (!nJogador) {
    throw new Error("Precisa de um número");
  } else if (isNaN(nJogador)) {
    throw new Error("Precisa de um número");
  } else if (nJogador === undefined) {
    throw new Error("Apenas números");
  } else {
    nJogador = document.querySelector("#Numero").value;
    nComputador = sortear(5);
    minhaEscolha = document.querySelector('input[type="radio"]:checked').value;
    nJogador = parseInt(nJogador);
    var total = nJogador + nComputador;
    var resultado = total % 2 === 0 ? "Par" : "Ímpar";
    verificarResultado(resultado);
  }
}

function verificarResultado(resultado) {
  if (minhaEscolha === resultado) {
    alert("Você ganhou!");
  } else {
    alert("O Computador Ganhou!");
  }
}
