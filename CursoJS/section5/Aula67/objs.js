const pessoas = [
  { nome: "Lucia", idade: 30 },
  { nome: "Enzo", idade: 10 },
  { nome: "Jill", idade: 40 },
  { nome: "Leon", idade: 35 },
  { nome: "Claire", idade: 30 },
];
console.log(pessoas);
const nomes = pessoas.map((valor) => valor.nome);
console.log(nomes);
const idades = pessoas.map((valor) => valor.idade);
console.log(idades);
//deleta a chave nome do objeto
const idadesSnome = pessoas.map(function (obj) {
  delete obj.nome;
  return obj;
});
console.log(idadesSnome);

const idadesSnome2 = pessoas.map(function (obj) {
  return { idade: obj.idade };
});
console.log(idadesSnome2);

//ou com arrow functions
const idades3 = pessoas.map((obj) => ({
  idade: obj.idade,
}));
console.log(idades3);
