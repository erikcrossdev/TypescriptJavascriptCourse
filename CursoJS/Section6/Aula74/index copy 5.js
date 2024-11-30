const produto = { nome: "Caneca", preco: 1.9 };
//retorna propriedades do objeto, como value, writable, configurable, enumerable

console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let entry of Object.entries(produto)) {
  console.log(entry);
}

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
