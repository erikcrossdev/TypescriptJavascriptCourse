//factory functions / constructor functions /classes
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
//new cria um objeto vazio
const p1 = new Pessoa("Luiz", "Miranda");
const p2 = new Pessoa("Diana", "Miranda");

const p3 = {};
p3.nome = "Mary";
console.log(p1);
console.log(p2);
console.log(p3);
p2.nome = "Daniel"; //sim, o OBJETO é const, mas eu posso alterar seus parametros
console.log(p2);
