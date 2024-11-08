//break e continue funcionam em todos os laços, for, while, do while
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero % 2 === 0) continue;
  //mostra apenas os números ímapres, quando for um par, vai para o próximo elemento

  if (numero === 7) {
    console.log("Achei o numero 7");
    break;
  }
  console.log(numero);
}
