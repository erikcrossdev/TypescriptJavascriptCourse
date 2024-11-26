const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//map usa o array e o modifica em um novo array, map vai ter sempre o mesmo tamanho do array original
//serve apenas para modificar os valores e retorná-los a um novo array
console.log(numeros);
const numDobro = numeros.map((valor) => valor * 2);
console.log(numDobro);
