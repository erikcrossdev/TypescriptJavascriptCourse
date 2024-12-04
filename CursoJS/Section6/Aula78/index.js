//705.484.450-52
//070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x (digitos do CPF 705.484.450-52 )
10 9  8  7   6  5  4  3  2  (multiplicado por 10,9, 8, 7, 6, 5, 4, 3, 2)
70 0  40 28  48 20 16 15 0  = 237 total da soma dos digitos 

11 - (237 % 11) = 5 (primeiro digito) ( formula 11 -(total de soma de digitos multiplicaods % 11))


7x 0x 5x 4x 8x 4x 4x 5x 0x  5x 
11 10 9  8  7  6  5  4  3   2   = 284 (agora a multiplicação vai de 11 e inclui o dígito do mod no final)

11 - (284 % 11) = 2 (primeiro dígito) essa conta tem que dar 5 para se válido

-52 (5 resultado do mod e 2 resultado do mod, são os dígitos finais do CPF)
*/
//Validação de CPF
//Separado por  705.484.450-52 agora vou comparar os dígitos com o que veio do meu input
//se o digito variar, então não é um cpf válido

/*
O cpf precisa ser uma string porque pode começar com zero! 
*/

let cpf = "705.484.450-52";
let cpfDigitos = cpf.replace(/\D+/g, ""); //Remove qualquer coisa que não é número
console.log(cpfDigitos);
cpfArray = Array.from(cpfDigitos);

//converte para number!
console.log(
  cpfArray.reduce((ac, val) => ac + Number(val)),
  0
);
