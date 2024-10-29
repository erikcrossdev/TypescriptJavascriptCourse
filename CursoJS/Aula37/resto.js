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

const { nome: n, ...resto } = pessoa;
console.log(n, resto);
