//             -5        -4       -3       -2      -1
//              0         1        2        3       4
const nomes = ["Mary", "James", "Laura", "Angela", "Eddy"];

console.log(nomes);
//simula pop
const element = nomes.splice(-1, 1); //Remove ultimo elemento
console.log(element); //retorna um array porque posso remover mais de um elemento
console.log(nomes);
