let date = new Date(); //cria um objeto date novo, pega em milésimos de segundos em unix

console.log(date.toString());
date = new Date(0); //01/01/1970 timestamp unix ou época unix, hora zero.
console.log(date.toString());
date = new Date(-100); // antes do timestamp unix ou época unix, hora zero.
console.log(date.toString());
const tresHoras = 60 * 60 * 3 * 1000;
date = new Date(0 + tresHoras); //hora zero em GMT
console.log(date.toString());
const umDia = 60 * 60 * 24 * 1000; //adiciona 24horas
date = new Date(0 + umDia + tresHoras); //02 de janeiro de 1970 em GMT
console.log(date.toString()); //um dia a mais da hora zero
