var dias = new Array(
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
);

var hoje = new Date();

var diaSemana = hoje.getDay();

alert(`Seja muito bem vindo! Hoje é ${dias[diaSemana]}`);
