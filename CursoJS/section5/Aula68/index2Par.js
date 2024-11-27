//Agora quero filtrar apenas os pares, mas veja que se eu não passar um valor inicial, ele vai
//começar do 5, que é impar!
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor, array) {
  if (valor % 2 === 0) acumulador += valor; //filtrando pares para adicionar no total
  return acumulador;
}); //errado, vai inicializar com 5 que é impar
console.log(total);

const totalPar = numeros.reduce(function (acumulador, valor, array) {
  if (valor % 2 === 0) acumulador += valor; //filtrando pares para adicionar no total
  return acumulador;
}, 0); //errado, vai inicializar com 5 que é impar
console.log(totalPar);
