var n = prompt("Digite um número");
n = parseFloat(n);

function tabuada(n) {
  for (var i = 0; i < 1000; i++) {
    document.write(n + `X ${i} = ${n * i} <br>`);
  }
  return;
}

console.log(tabuada(n));
