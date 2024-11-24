const nomes = ["James", "Maria", "Angela"];
const nomes2 = new Array("James", "Mary", "Laura"); //outra forma de declarar array
nomes[2] = "Eddy";
delete nomes[2];
console.log(nomes);
//Arrays são valores por referencia
const novo = nomes;
novo.pop(); //tanto novo quando nomes perdeu o ultimo elemento!

console.log(nomes);
