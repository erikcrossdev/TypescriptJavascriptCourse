const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
let a3 = a1 + a2;
console.log(a3); //Não funciona para concatenar os arrays :/
//para isso use o cancat
a3 = a1.concat(a2, [7, 8, 9], "Texto");
console.log(a3);

//ou usando o spread operator
