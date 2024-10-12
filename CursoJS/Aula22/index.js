//Eu posso mudar os elementos de um array sendo const, eu não posso é reatribuir!
const array = [1, 2, 3];
array.push(4); //pode
array[0] = 0; //pode
console.log(array);
//array = "batata"; //isso não pode, se eu precisar mudar, tenho que usar let
console.log(array);

//Imagina se eu tivesse muitas pessoas que tivessem alguns atributos:
const nome01 = "Erik";
const sobrenome01 = "Cruz";
const idade01 = 29;

const nome02 = "Pedro";
const sobrenome02 = "Pascal";
const idade02 = 45;
//Eu poderia fazer:
const pessao1 = {
  nome: "Erik",
  sobrenome: "Cruz",
  idade: 25,
};

console.log(pessao1.nome);
console.log(pessao1.sobrenome);
console.log(pessao1.idade);
//ou posso ter:
function criaPessoa(nome, sobrenome, idade) {
  //parametros
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}
//ou
function criaPessoaAlt(nome, sobrenome, idade) {
  //parametros
  return {
    nome,
    sobrenome,
    idade,
  };
}

function mostraPessoa(pessoa) {
  console.log(pessoa.nome);
  console.log(pessoa.sobrenome);
  console.log(pessoa.idade);
}

const pessoaNova = criaPessoa("Leo", "Brizola", 67); //argumentos
mostraPessoa(pessoaNova);
