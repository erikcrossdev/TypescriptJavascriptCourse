/*
Tipos de dados primitivos (valores imutáveis) - Strings, number, booleans, undefined, null, (bigint, symbols)

Tipos de dados passados por referências (mutáveis) - array, Object, function
*/
let nome = "Luiz";
nome = "Otávio"; //eu mudei o nome da minha variavel, mas não o dado em si
console.log(nome);
//Como string é imutável, eu não posso fazer isso
nome[5] = "a";
console.log(nome[5]); //vai seguir mostrando o "o", porque string é imutável

//----------- Passando por cópia
let a = "A";
let b = a; //copia a para b.
console.log(a, b);

a = "outra coisa";
console.log(a, b);

//----------
let c = [1, 2, 3];
let d = c; //nesse caso, será passado por referência
let e = d;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

e.push("Luiz");

console.log(c, d, e);

//--------- copiando um array

let val = [2, 4, 6];
let valB = [...val];
valB.push(8);

console.log(val, valB);

//---------Com objetos
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otavio",
};

const pessoa1 = pessoa;

pessoa1.nome = "João";
console.log(pessoa, pessoa1);
//Copiando o objeto
const pessoa2 = { ...pessoa }; //copia o valor
pessoa2.nome = "Erik";
console.log(pessoa, pessoa1, pessoa2);
