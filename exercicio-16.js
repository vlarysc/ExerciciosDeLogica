var n = prompt("Digite um número");
n = parseFloat(n);

function tabuada(n) {
  for (var i = 1; i < 1000; i++) {
    document.write(n + `X ${i} = ${n * i} <br>`);
    if (i % 10 === 0) {
      document.write("<hr>");
    }
  }
  return;
}

console.log(tabuada(n));
