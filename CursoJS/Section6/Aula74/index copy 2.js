const produto = { nome: "Caneca", preco: 1.9 };

const copia = { nome: produto.nome, preco: produto.preco };
copia.nome = "Faca";
console.log(produto);
console.log(copia);
