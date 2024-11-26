//filter vai sempre retornar um array com o mesmo tamanho de elementos ou menos elementos

const pessoas = [
  { nome: "Luiz", idade: 56 },
  { nome: "Marcio", idade: 56 },
  { nome: "Anakin", idade: 23 },
  { nome: "Paulo", idade: 34 },
  { nome: "Diego", idade: 23 },
  { nome: "Diogo", idade: 40 },
  { nome: "Luan", idade: 40 },
  { nome: "Ray", idade: 40 },
  { nome: "Paul", idade: 40 },
  { nome: "Paula", idade: 20 },
  { nome: "Maria", idade: 15 },
];

//retornar pessoas com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(function (obj) {
  return obj.nome.length >= 5;
});
console.log(pessoasComNomeGrande);

const pessoasComNomeGrandeArrow = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasComNomeGrandeArrow);

//retorna as pessoas com mais de 50 anos
const pessoasVeia = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasVeia);

//retorna pessoas que terminam com "a"
const pessoasTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(pessoasTerminaComA);
