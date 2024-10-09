let num1 = 9.54578;
let num2 = Math.floor(num1); //arredonda para baixo = 9
let ceil = Math.ceil(num1); //arredonda para cima = 10
console.log(num2);
console.log(ceil);
console.log(Math.round(num1)); //arredonda para o mais próximo, no caso 10, se fose 9.30, ia ser para 9
console.log(Math.max(1, 4, 6, 3, 9, 6, 7, 8)); //pega o maior número da sequencia = 8
console.log(Math.min(1, 4, 6, 3, 9, 6, 7, 8)); //pega o maior número da sequencia = 1

let random = Math.round(Math.random() * (10 - 5) + 5); //aleatório entre 5 e 10
console.log(random);

console.log(Math.PI); //retorna PI
console.log(Math.pow(2, 10)); //potencia
console.log(2 ** 10); //potencia  com operador

//raiz quadrada
num1 = 9;
console.log(num1 ** (1 / 2)); //3
//ou
console.log(num1 ** 0.5);

//Em javascript posso dividir por zer, o que é retorna é infinity
console.log(100 / 0);

//O javascript chega ao infinito porque ele tenta lidar com um número muito pequeno
console.log(100 / 0.0000000000000000000000000000000000000000000000001); //1e+51
console.log(
  100 /
    0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
);
Infinity;
