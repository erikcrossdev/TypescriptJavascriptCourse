//reduce é bem versátil, pode ser usada para reduzir o array a um elemento.
//Com reduce eu poderia somar todos os elementos do meu array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  console.log(acumulador, valor); //tenho que retornar e acumular
  return acumulador;
});
