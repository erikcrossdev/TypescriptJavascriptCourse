//Objetos revisão
//formando com par, chave e valor
const pessoa = {
  nome: "Luiz", //valor da chave nome é Luiz
  sobrenome: "Otavio",
};

console.log(pessoa.nome); //nome é uma chave
console.log(pessoa["nome"]); //nome é uma chave, também é outra forma de acessar, posso acessar de forma dinamica
console.log(pessoa.sobrenome); //sobrenome é outra chave

//ou ainda
const chave = "sobrenome";
console.log(pessoa[chave]);
