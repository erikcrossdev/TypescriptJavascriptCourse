const pessoas = [
  { nome: "Lucia", idade: 30 },
  { nome: "Enzo", idade: 10 },
  { nome: "Jill", idade: 40 },
  { nome: "Leon", idade: 35 },
  { nome: "Claire", idade: 30 },
];

const pessoaMaisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor; //quando retorna o valor, ele substitui para o acumulador
});
console.log(pessoaMaisVelha);
