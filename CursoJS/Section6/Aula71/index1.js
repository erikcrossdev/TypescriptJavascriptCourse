//Objetos revisão
//formando com par, chave e valor
const pessoa = {
  nome: "Luiz", //valor da chave nome é Luiz
  sobrenome: "Otavio",
};

const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Miranda";
pessoa1.idade = 30;

console.log(pessoa1.nome);

console.log(pessoa1.sobrenome);
pessoa1.falarNome = function () {
  console.log(`${this.nome} está falando`);
};
pessoa1.falarNome();
delete pessoa1.nome; //deleta uma chave
pessoa1.falarNome(); //nome é undefined, porque foi apagado

pessoa1.GetDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.GetDataNascimento());
