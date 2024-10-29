//Atribuição via desestruturação com Objetos
const pessoa = {
  nome: "Erik",
  sobrenome: "Cruz",
  idade: 29,
  endereco: {
    rua: "eu nem sei",
    numero: 666,
  },
};
//console.log(pessoa);

const { nome: n = "" } = pessoa; //igual a: const nome = pessoa.nome; n vira um alias, o nome da variavel
console.log(n);
const { nome = "Não tem", sobrenome, idade } = pessoa; //Não tem vira o valor padrão
console.log(nome, sobrenome, idade);
