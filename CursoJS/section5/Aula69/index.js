//retorne a soma do  dobro de todos os pares
//1 - filtrar pares com filter
//2 - dobrar os valores com map
//3- somar os valores com reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter(function (valor) {
    return valor % 2 === 0;
  })
  .map(function (valor) {
    return valor * 2;
  })
  .reduce(function (acumulador, valor) {
    return acumulador + valor;
  });

console.log(numerosPares);

//convertendo para arrow function

const numerosParesShort = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor);
console.log(numerosParesShort);
