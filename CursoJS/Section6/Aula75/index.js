//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa("Luiz", "O."); //Pessoa = Função construtura
const pessoa2 = new Pessoa("Maria", "A."); //Pessoa = Função construtura

console.dir(pessoa1);
console.dir(pessoa2);
