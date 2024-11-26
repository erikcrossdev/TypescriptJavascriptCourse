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

//ou com arrow functions
const idades = pessoas.map((obj) => ({
  idade: obj.idade,
}));
console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
  obj.id = indice;
  return obj;
});
console.log(comIds);
console.log(pessoas);
