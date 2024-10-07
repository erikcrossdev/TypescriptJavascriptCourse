/*
Adição, concatenação 
- / * + , **
*/

const num1 = 10;
const num2 = 5;
const numString = "5";
console.log(num1 + num2); //adição
console.log(num1 + numString); //concatena 105, 10 concatenado com 5
console.log(num1 * num2); //multiplicação
console.log(num1 / num2); //divisão
console.log(num1 ** num2); //potenciação
console.log(num1 % num2); //mod, resto da divisão
console.log(num1 * num1 ** num2); //potenciação

//Precedência dos operadores:
//() parênteses
//** potencia
// * / % multiplicação divisão e mod
//+ e -

//pos incremento
let contador = 1;
contador++;
contador++;
contador--;
console.log(contador);

//pré-incremento vs pós-incremento
let cont = 1;
console.log(cont++); //Mostrará 1, pois ainda não houve o incremento
cont = 1;
console.log(++cont); //mostrará 2, pois ele já usará o valor novo

let cont2 = 1;
cont2++;
console.log(cont2); //não tem diferença de usar pós ou pré incremento.

//Incrementar mais valores
let conta = 0;
const step = 3;
conta += step;
console.log(conta);

let mult = 1;
mult *= step;
console.log(mult);

let pow = 3;
pow **= step;
console.log(pow);

const n1 = 10;
const n2 = parseInt("5"); //converte para int
const n3 = parseFloat("5.5"); //converte para float
const n4 = Number("5.5"); //converte para number
console.log(typeof n2);
console.log(n1 * n1);
