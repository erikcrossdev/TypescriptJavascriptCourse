let num1 = 1;
let num2 = 2.5;
console.log(num1.toString() + num2); //Converte para string só para mostrar, não muda o valor da variavel
console.log(typeof num1); //veja que num1 segue sendo um number.
//para alterar para string teria que fazer:
//num1 = num1.toString();
//console.log(typeof num1); //veja que num1 segue sendo um number.
num1 = 10;
console.log(num1.toFixed(2)); //mostra duas casas decimais
console.log(num1.toFixed()); //retira as casas decimais

num1 = 10;
console.log(Number.isInteger(num1)); //retorna se o número é int ou float
let temp = num1 * "olá";
console.log(Number.isNaN(temp)); //retorna se é Nan

num2 = 0.7;
num1 = 0.1;

num2 += num1;
num2 += num1;
num2 += num1;

//console.log(num2);
//num2 = parseInt(num2.toFixed(2)); //converte /0.9999999 para inteiro

//ou converter para trabalhar com int
num1 = 0.7;
num2 = 0.1;

num1 = (num1 * 100 + num2 * 100) / 100;
num1 = (num1 * 100 + num2 * 100) / 100;
num1 = (num1 * 100 + num2 * 100) / 100;
console.log(num1);

console.log(Number.isInteger(num1));
