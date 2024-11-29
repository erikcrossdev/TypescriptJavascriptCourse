const pessoa = {
  nome: "Luiz", //valor da chave nome é Luiz
  sobrenome: "Otavio",
};

const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Miranda";
pessoa1.idade = 30;

for (let chave in pessoa1) {
  console.log(chave);
}
for (let chave in pessoa1) {
  console.log(chave, ": ", pessoa1[chave]);
}
