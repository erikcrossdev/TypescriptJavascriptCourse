function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
  //não vamos criar métodos aqui, vamos criar métodos dentro do prototype da função!
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * percentual) / 100;
};

const prod1 = new Produto("Camiseta", 50);
prod1.aumento(100);
console.log(prod1);
prod1.desconto(25);
console.log(prod1);

//Obj litera
const p2 = {
  nome: "Caneca",
  preco: 15,
};

//p2 não terá aumento e desconto a não ser que:
Object.setPrototypeOf(p2, Produto.prototype); //Agora vou setar o proto para o mesmo proto de Produto
console.log(p2);
p2.aumento(10);
console.log(p2);

//criando um produto e já associar o proto
const p3 = Object.create(Produto.prototype);
console.log(p3); //cria um produto vazio, sem as chaves nome e preco
//para setar as chaves/atributos eu teria:
p3.preco = 113;
p3.aumento(10);
console.log(p3); //agora tenho preco

//criando um produto e já associar o proto, e também as chaves!
const p4 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "Camisola",
  },
});
console.log(p4); //cria um produto vazio, sem as chaves nome e preco
//para setar as chaves/atributos eu teria:
p4.desconto(25);
console.log(p4); //agora tenho preco
