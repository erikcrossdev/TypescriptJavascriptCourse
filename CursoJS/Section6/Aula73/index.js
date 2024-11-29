//Getters e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivate = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //para ele ser mostrado
    configurable: true, //se pode reconfigurar, mudar o valor ou remover a chave
    //Não preciso do value e nem writeable, visto que eu vou usar um getter e setter
    get: function () {
      return estoquePrivate;
    },
    set: function (valor) {
      if (typeof valor != "number") {
        throw new TypeError("Tipo inválido");
      }
      estoquePrivate = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}

const p1 = new Produto("Camisa da Poly Pocket", 20, 3);
console.log(p1);
console.log(p1.estoque); //usa o getter
p1.estoque = 50;
//p1.estoque = "faaf"; //erro
const c1 = criaProduto("Camiseta My Little Pony");
console.log(c1);
c1.nome = "Baby metal";
console.log(c1.nome);
