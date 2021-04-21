var sinais = ["verde", "amarelo", "vermelho"];

setInterval(function () {
  for (var i = 0; i < sinais.length; i++) {
    var cor = 0;
    sinais[i] = sinais[i];
    cor = sinais[i];
    switch (cor) {
      case "verde":
        console.log("Ande");
        break;
      case "amarelo":
        console.log("Preste atenção");
        break;
      case "vermelho":
        console.log("Pare!");
    }
  }
}, 1000);
