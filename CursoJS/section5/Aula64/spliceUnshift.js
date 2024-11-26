//             -5        -4       -3       -2      -1
//              0         1        2        3       4
const nomes = ["Mary", "James", "Laura", "Angela", "Eddy"];

const add = nomes.splice(0, 0, "Maria", "Pyramid Head"); //Remove primeiro elemento
console.log(add); //retorna um array porque posso remover mais de um elemento
console.log(nomes);
