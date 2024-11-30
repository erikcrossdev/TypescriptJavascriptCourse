const produto = { nome: "Caneca", preco: 1.9 };

const copia = Object.assign({}, produto, { material: "porcelana" }); //copia tudo dentro de produto
produto.nome = "Camisola";
copia.preco = 35.5;

console.log(produto);
console.log(copia);
