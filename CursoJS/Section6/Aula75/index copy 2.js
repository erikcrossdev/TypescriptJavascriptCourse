//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

Pessoa.prototype.estouAqui = "hahahahha";

//instância
const pessoa1 = new Pessoa("Luiz", "O."); //Pessoa = Função construtura
const data = new Date(); //Pessoa = Função construtura

console.dir(pessoa1);
console.dir(data);
