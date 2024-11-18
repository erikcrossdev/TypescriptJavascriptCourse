// retorno de funções
//retonar um valor e termina a função

function soma(a, b) {
  return a + b;
}
function soma2(a, b) {
  console.log(a + b); //função sem retorno
}
/*
document.addEventListener("click", function () {
  document.body.style.backgroundColor = "red"; //função sem retorno
});*/
function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
//posso criar funções em hierarquia:
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo); //retorna a função falaResto, a variável olaMundo é uma função!
console.log(olaMundo("mundo!")); // como olaMundo é uma função, posso chamar ela (falaResto);

const pessoa = criaPessoa("Erik", "Cruz"); //retorna uma pessoa com nome e sobrenome
console.log(pessoa.nome, pessoa.sobrenome);
let result = soma(5, 2);
console.log(result);
result = soma2(5, 2);
console.log(result); //undefined, porque soma2 não tem retorno
