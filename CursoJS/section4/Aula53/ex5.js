function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}
funcao({ nome: "Luiz", sobrenome: "Otavio", idade: 30 });
conta("+", 0, 20, 30, 40, 50);
//o rest operator deve ser o ultimo parametro
