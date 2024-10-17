/*
&& -> false && true -> false para o end não preciso ficar avaliando todas as expressões 
se eu sei que se a primeira for false o resultado será false. 
No javascript ele vai me retornar o valor false ou a ultima expressão se eu fizer isso:
*/
console.log("João" && false && "Maria");
console.log("João" && "Maria" && 0);
console.log(0 && "Maria" && "João"); //Zero é false
console.log(1 && "Maria" && "João"); //João, a ultima expressão "true"

//EM JAVASCRIPT TUDO PODE SER VARIÁVEL EM TRUE OR FALSE!
/*
falsos: 
    false
    0
    '' 
    ""
    ``
    null/undefined
    NaN
*/

console.log("Luiz" && "" && "Maria"); //'' é false, "" também e `` também

//Posso usar esse conceito para forçar uma função a não ser chamada fazendo com que
//Ela seja false e não execute

function falaOi() {
  return "Oi";
}

const vaiExecutar = "olar";
console.log(vaiExecutar && falaOi());
