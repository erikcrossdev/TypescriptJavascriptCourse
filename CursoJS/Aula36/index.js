//Abribuição via desestruturação
//exemplo
let a = "A";
let b = "B";
let c = "C";

const numeros = [1, 2, 3];
[a, b, c] = numeros;

//ou
//[a, b, b] = [1,2,3]; //reatribuindo os valores para 1,2,3

console.log(a, b, c);
