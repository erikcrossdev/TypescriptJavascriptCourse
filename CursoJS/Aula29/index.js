const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log("Sim, o numero é maior ou igual a zero");
} else {
  console.log("Numero não está entre 0 e 5");
}

//ou!!!!
console.log(
  numero >= 0 && numero <= 5
    ? "Sim, o numero é maior ou igual a zero"
    : "Numero não está entre 0 e 5"
);

//ou
const texto =
  numero >= 0 && numero <= 5
    ? "Sim, o numero é maior ou igual a zero"
    : "Numero não está entre 0 e 5";

console.log(texto);

//exemplo de erro de lógica com if else

if (numero >= 0 && numero <= 5) {
  console.log("Sim, o numero é maior ou igual a zero");
} else if ("batata") {
  console.log("Quebra o else if porque essa condição é true");
} else if (numero > 5 && numero < 10) {
  console.log("Numero entre 5 e 10");
} else {
  console.log("Numero é 10");
}
