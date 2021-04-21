var usuarios = [
  { nome: "Manoel", email: "manoel@gmail.com" },
  { nome: "Diego", email: "diego@gmail.com" },
  { nome: "Renata", email: "renata@gmail.com" },
];

var output = document.querySelector("#output");

function chamar(usuarios) {
  var tela = "";
  for (var i = 0; i < usuarios.length; i++) {
    tela += `<p> Nome: ${usuarios[i].nome} | Email: ${usuarios[i].email} </p>`;
  }
  return (output.innerHTML = tela);
}

console.log(chamar(usuarios));
