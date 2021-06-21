let pOne = [8, 25, 1, 19];
let pTwo = [14, 9, 22, 15];

function resultado() {
  const PlayOne = (pOne) => {
    let res = 0;

    for (let i = 0; i < pOne.length; i++) {
      res = res + pOne[i];
    }
    return res;
  };
  const PlayTwo = (pTwo) => {
    let res = 0;

    for (let i = 0; i < pTwo.length; i++) {
      res = res + pTwo[i];
    }
    return res;
  };

  if (PlayTwo > PlayOne) {
    console.log("O Vencedor é Jogador 2!");
  } else {
    console.log("O Vencedor é o Jogador 1!");
  }
}

console.log(resultado());
