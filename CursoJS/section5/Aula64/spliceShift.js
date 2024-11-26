//             -5        -4       -3       -2      -1
//              0         1        2        3       4
const nomes = ["Mary", "James", "Laura", "Angela", "Eddy"];

const removidos = nomes.splice(0, 1); //Remove primeiro elemento
console.log(removidos); //retorna um array porque posso remover mais de um elemento
console.log(nomes);
