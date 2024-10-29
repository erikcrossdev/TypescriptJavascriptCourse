const numeros = [102, 202, 322, 444, 567, 666, 677, 88, 99];
const primeiro = numeros[0];
//Se eu quiser pegar todos os elementos desse array,
// ia ser chato criar 10 variaveis
const [primeiroNum, segundoNum, terceiroNum, quartoNum, ...resto] = numeros;

console.log(primeiro);
console.log(primeiroNum, segundoNum, terceiroNum, quartoNum);
console.log(resto);

const [um, , tres, , ...restin] = numeros;
console.log(um, tres, restin);
