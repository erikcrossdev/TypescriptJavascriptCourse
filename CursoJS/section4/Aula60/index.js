//Funcção construtura -> objectos
//functions factory -> objetos
//Construturas -> Pessoa (new)
//É um "molde" para criar um objeto
//Precisa da palavra new

function Pessoa(nome, sobrenome) {
  this.nome = nome; //variavel publica
  this.sobrenome = sobrenome; //variavel publica

  const CPF = 234234; //variavel privada

  const metodoInterno = function () {
    //metodo privado
    console.log("função privada ", CPF);
  };

  this.metodo = function () {
    console.log(this.nome + " meu metodo");
    metodoInterno();
  };
}

//new cria um objeto vazio e já retorna, perceba que Pessoa não precisa de um retorno de um objeto

const p1 = new Pessoa("Luiz", "Miranda"); //precisa da palavra new
const p2 = new Pessoa("Erik", "Cruz");
console.log(p2.nome);
p2.metodo();
