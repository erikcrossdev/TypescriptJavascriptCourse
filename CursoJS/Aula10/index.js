const nome = "Luiz"; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //numer
const num2 = 10.53; //number, ponto flutuante
let nomeAluno; //Undefined, não aponta para nenhum lugar da memória
let sobrenome = null; //Dado nulo, não aponta para nenhum lugar na memória
//Se você não quer definir uma variável, deixe-a como null não undefined
const aprovado = true; //true or false, valores lógicos

const a = [1, 2];
let b = a; //a e b apontam para o mesmo lugar na memória, são dados por referência, não uma cópia.

console.log(a, b);
b.push(3);
console.log(a, b);

//Já passar por valor é diferente
let c = 2;
let d = c; //o valor de c realmente foi copiado para d, não a referência e endereço da memória
console.log(c, d);

c = 3;

console.log(c, d);

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenome, sobrenome);
console.log(typeof aprovado, aprovado);

console.log(typeof a, a);
console.log(typeof b, b);
