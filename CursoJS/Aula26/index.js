/*Operadores lógicos
&& ->AND - E --> tudo precisa ser true
|| -> OR - OU
! -> NOT - não
*/

let expressaoAND = true && true && true && true;
let expressaoOR = true || false || false || false;
let expressaoNOT = !(false && true && true);
console.log(expressaoAND); //true, porque tudo é true
console.log(expressaoOR); //true, porque tem uma true
console.log(expressaoNOT); //true, porque negou false um not.

expressaoAND = true && true && false;
expressaoOR = false || false || false;
expressaoNOT = !(false || true);

console.log(expressaoAND); //false, porque tem um false
console.log(expressaoOR); //false, porque tudo é false
console.log(expressaoNOT); //false, porque true negou com not.

//Exemplo hardcoded
const usuario = "luiz";
const senha = "12345";

const vailogar = usuario === "luiz" && senha === "12345";
console.log(vailogar);

//negação
console.log(!!true); //dupla negação volta o valor original.
