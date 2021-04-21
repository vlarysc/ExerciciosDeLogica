var livro = new Object();

livro.name = "Biblia";
livro.preco = 39.9;
livro.qtd = 392;
var output = document.querySelector("#output");
function mostrar() {
  return livro;
}

output.innerHTML = mostrar();

console.log(mostrar());
