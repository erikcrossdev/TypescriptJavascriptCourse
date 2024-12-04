//Ex: e-commerce que vende camisetas e caneca
//produto pode ter aumento de preço e desconto
//camisa pode ter cor
//caneca tem material (porcelana, plástico), por exemplo
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};
//Especializar Camiseta
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); //Chama a Produto.
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); //Cria um objeto vazio de prototype e diz que ele é um produto
Camiseta.prototype.constructor = Camiseta; //linka o construtor com o de Camiseta, não produto

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Generico", 0.5);
const camiseta = new Camiseta("Regata Nirvana", 40, "Preta");
console.log(camiseta);
console.log(produto);
camiseta.aumento(10); //usa a versão sobrescrita que usa porcentagem!
console.log(camiseta);

const caneca = new Caneca("Caneca Hello kitty", 20, "Porcelana", 5);
console.log(caneca);
console.log(caneca.estoque);
console.estoque = 10;
console.log(caneca);
