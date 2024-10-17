/*
Or vai retornar o primeiro valor verdadeiro
*/

//console.log(0 || false || null || "Luiz otavio" || true);

//posso usar isso para um site usar uma cor padrão OU a escolhida pelo usuário
let corUsuario = null;
let corPadrao = corUsuario || "red"; //cor padrão é red

//ao invés de um if:
console.log(corPadrao);
corUsuario = "fuxia";
corPadrao = corUsuario || "red"; //cor padrão é red
//veja que a cor padrão só muda de vermelho se o usuário escolher alguma cor
console.log(corPadrao);
