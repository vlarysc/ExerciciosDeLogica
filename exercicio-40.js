function Endereco(localizacao) {
  this.logradouro = localizacao.logradouro;
  this.numero = localizacao.numero;
  this.complemento = localizacao.logradouro;
  this.cep = localizacao.cep;
  this.cidade = localizacao.cidade;
  this.estado = localizacao.estado;
}

var enderecosAlunos = [
  {
    nome: "Manoel",
    id: 1,
    endereco: new Endereco({
      logradouro: "Rua Batista Tissot",
      numero: 46,
      complemento: "Casa 1",
      cep: "95090-040",
      cidade: "Caxias do Sul",
      estado: "RS",
    }),
  },
  {
    nome: "Fernando",
    id: 2,
    endereco: new Endereco({
      logradouro: "Rua do Conde",
      numero: 102,
      complemento: "Apartamento, bloco 2",
      cep: "95090-010",
      cidade: "Caxias do Sul",
      estado: "SP",
    }),
  },
  {
    nome: "Renata",
    id: 3,
    endereco: new Endereco({
      logradouro: "Rua 88",
      numero: 76,
      complemento: "Casa verde",
      cep: "49100-000",
      cidade: "São Cristovão",
      estado: "SE",
    }),
  },
  {
    nome: "Debora",
    id: 4,
    endereco: new Endereco({
      logradouro: "Rua Joel Geraldo Silva",
      numero: 109,
      complemento: "Casa 1",
      cep: "49100-000",
      cidade: "São Cristovão",
      estado: "SE",
    }),
  },
  {
    nome: "Diego",
    id: 5,
    endereco: new Endereco({
      logradouro: "Rua Firmino",
      numero: 222,
      complemento: "Pousada",
      cep: "11963-490",
      cidade: "Lençóis Paulista",
      estado: "SP",
    }),
  },
];

var texto = "";
var enderecos = [];

for (var i = 0; i < enderecosAlunos.length; i++) {
  enderecos[i] = enderecosAlunos[i].endereco;
}

for (var i = 0; i < enderecos.length; i++) {
  var endereco = enderecos[i];

  for (propriedade in endereco) {
    texto =
      texto +
      "" +
      (i + 1) +
      "° Aluno " +
      propriedade +
      ": " +
      endereco[propriedade] +
      " <br>  ";
  }
  texto = texto + "<hr>";
  document.querySelector("#output").innerHTML = texto;
}
