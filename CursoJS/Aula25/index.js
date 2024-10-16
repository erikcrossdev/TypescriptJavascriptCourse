/*Operadores de comparação no javascript
> maior que
>= maior que ou igual a
< menor que 
<= menor que ou igual a 
== igualdade (não é recomendado usar) (valor)
=== igualdade estrita (valor E TIPO)
!= diferente (valor) (não é recomendado usar)
!== diferente estrito (valor E TIPO)
*/
const num1 = 10;
const num2 = 11;
const comp = num1 <= num2; //true

console.log(10 > 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(10 >= 10); //Só vai false se 10 >= 11, de qualquer negativo até 10 é true

console.log(5 != "5");
console.log(5 !== "5");
