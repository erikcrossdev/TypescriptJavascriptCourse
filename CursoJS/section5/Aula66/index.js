const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

const filtered = numeros.filter((valor, indice, array) => {
  console.log(valor, indice); //faz um "for" item por item
  console.log(array); //array resultante
  return valor > 10;
});
console.log(numerosFiltrados);
