var output = document.querySelector("#output");

var mensagem = "";

for (var i = 0; i < 1001; i++) {
  mensagem += "i: " + i + "<br>";
}

output.innerHTML = mensagem;
