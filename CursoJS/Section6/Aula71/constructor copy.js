//factory functions / constructor functions /classes
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); //com freeze, nenhum objeto pode ser alterado agora
}
//new cria um objeto vazio
const p1 = new Pessoa("Luiz", "Miranda");
const p2 = new Pessoa("Diana", "Miranda");

const p3 = {};
p3.nome = "Mary";
console.log(p1);
console.log(p2);
console.log(p3);
p2.nome = "Daiane"; //sim, o OBJETO é const, mas eu posso alterar seus parametros
console.log(p2);
