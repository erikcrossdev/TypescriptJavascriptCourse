const nome = "ROMA ";
const nomes = ["Roma", "Veneza", "Florença"];

//quando queremos o indice, queremos incrementar mais coisas ou o incremento ser mais de 1
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
//
for (let i in nome) {
  console.log(nome[i]);
}

for (let valor of nome) {
  console.log(valor);
}

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
//Porém, não consigo usar for of para objetos :/
/*
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otavio",
  idade: 30,
};

for (let val of pessoa) {
  console.log(val);
}*/
