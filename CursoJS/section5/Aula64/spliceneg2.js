//             -5        -4       -3       -2      -1
//              0         1        2        3       4
const nomes = ["Mary", "James", "Laura", "Angela", "Eddy"];

console.log(nomes);
//simula pop
const element = nomes.splice(-2, Number.MAX_VALUE); //remove os dois ultimos elementos
console.log(element); //retorna um array porque posso remover mais de um elemento
console.log(nomes);
