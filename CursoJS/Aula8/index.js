/*
 tem anos, pesa kg
 tem de altura e seu IMC é 
 nasceu em 
*/
const nome = "Erik";
const sobrenome = "Cruz";
const idade = 29;
const peso = 58;
const altura = 1.61;
let imc = peso / (altura * altura);
let anoNasc = 1994;
/*
console.log(nome, "tem anos, pesa", peso, "kg");
console.log(nome, "tem", altura, "de altura e seu IMC é", imc);
console.log(nome, "nasceu em", anoNasc + ".");
*/
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}`);
console.log(`tem ${altura} de altura e seu IMC é ${imc}`);
console.log(`${nome} nasceu em ${anoNasc}.`);
