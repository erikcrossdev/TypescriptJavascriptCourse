const produto = { nome: "Caneca", preco: 1.9 };
console.log(produto);
const outraCoisa = produto;
outraCoisa.preco = 3.5;
const copia = { ...produto, material: "Porcelana" };
produto.nome = "Camisola";
copia.preco = 35.5;

console.log(produto);
console.log(outraCoisa);
console.log(copia);
