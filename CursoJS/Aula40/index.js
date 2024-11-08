const frutas = ["Pera", "Maçã", "Uva"];
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otavio",
  idade: 30,
};

//nesse for ele está lendo os indices do array
for (let i in frutas) {
  console.log(frutas[i]);
}
//posso chamar o indice de qualquer coisa
for (let indice in frutas) {
  console.log(frutas[indice]);
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

//alias posso acessar um objeto pessoa assim:
const chave = "nome";
const p = pessoa[chave];
console.log(p);
