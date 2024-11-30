const produto = { nome: "Caneca", preco: 1.9 };
//retorna propriedades do objeto, como value, writable, configurable, enumerable

console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
