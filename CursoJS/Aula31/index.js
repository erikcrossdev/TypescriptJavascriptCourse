//condicao ? quando true executa isso : quando false executa isso
//Exemplo, se um usuário tem mais de 1000 pontos ele é um user VIP
const pontuacaoUser = 1001;

if (pontuacaoUser >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Common user");
}

//OU podemos encurtar o código com um ternário em uma única linha de código

const nivelUser = pontuacaoUser >= 1000 ? "Usuário VIP" : "Common user";
console.log(nivelUser);

//OU podemos usar o operador OU
//podemos usar a fallback
let corUsuario = null;
let corPadrao = corUsuario || "Preta";
console.log(corPadrao);

//caso a cor usuario tiver um valor, ela será mostrada
corUsuario = "Red";
corPadrao = corUsuario || "Preta";
console.log(corPadrao);
