//cria uma função com parametro e retorno
function saudacao(user) {
  console.log("Olarrr, " + user);
}

function saudacao1() {
  console.log("Olar");
}

function saudacao2(nome) {
  return "Olar, " + nome;
}

//chama a função
saudacao("Erik");
const variavel = saudacao1();
console.log(variavel); //vai ser undefined pq a função não tem retorno
const variavelComRetorno = saudacao2("Erik");
console.log(variavelComRetorno); //vai ser undefined pq a função não tem retorno
