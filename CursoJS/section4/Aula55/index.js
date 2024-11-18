//Escopo léxico
const nome = "Luiz";

function falaNome() {
  const nome = "Otávio"; //vai usar Luiz pois a falaNome está no escopo lexico mais global
  console.log(nome);
}

function usaFalaNome() {
  falaNome();
}

usaFalaNome();
