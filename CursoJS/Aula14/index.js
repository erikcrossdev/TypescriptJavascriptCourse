let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

console.log(varA, varB, varC); //should print B C A

let temp = varA;
varA = varB;
varB = temp;
//B
//A
//C

temp = varB; //A
varB = varC; //C
varC = temp; //A

console.log(varA, varB, varC); //should print B C A
//Outra solução
//Ou então:

varA = "A"; //B
varB = "B"; //C
varC = "C"; //A

temp = varA;

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC); //should print B C A

//Ou então ainda no javascript

varA = "A"; //B
varB = "B"; //C
varC = "C"; //A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC); //should print B C A
