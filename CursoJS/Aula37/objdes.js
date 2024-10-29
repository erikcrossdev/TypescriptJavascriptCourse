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

//caso um campo não exista
const {
  endereco: { rua, numero, complemento = 42 },
  endereco,
} = pessoa;
console.log(rua, numero, complemento);
console.log(endereco);

const { nome: n, ...resto } = pessoa;
console.log(nome, resto);
