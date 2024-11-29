//define property - define properties
//vamos deixar apenas a propriedade estoque como freeze
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //para ele ser mostrado
    value: estoque, //para mostrar o valoe, e não mostrar undefined
    writable: false, //agota ela é readonly e só pode ser alterada no construtor
    configurable: false, //se pode reconfigurar, mudar o valor ou remover a chave
  });
}
const p1 = new Produto("Camisa da Poly Pocket", 20, 3);
console.log(p1);
