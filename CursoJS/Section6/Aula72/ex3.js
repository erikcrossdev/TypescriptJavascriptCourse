//define property - define properties
//vamos deixar apenas a propriedade estoque como freeze
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //para ele ser mostrado
      value: nome, //para mostrar o valoe, e não mostrar undefined
      writable: true, //agota ela é readonly e só pode ser alterada no construtor
      configurable: true, //se pode reconfigurar, mudar o valor ou remover a chave
    },
    preco: {
      enumerable: true, //para ele ser mostrado
      value: estoque, //para mostrar o valoe, e não mostrar undefined
      writable: true, //agota ela é readonly e só pode ser alterada no construtor
      configurable: true, //se pode reconfigurar, mudar o valor ou remover a chave
    },
    estoque: {
      enumerable: false, //para ele ser mostrado
      value: estoque, //para mostrar o valoe, e não mostrar undefined
      writable: true, //agota ela é readonly e só pode ser alterada no construtor
      configurable: true, //se pode reconfigurar, mudar o valor ou remover a chave
    },
  });
}
const p1 = new Produto("Camisa da Poly Pocket", 20, 3);
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}
