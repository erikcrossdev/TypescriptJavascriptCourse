const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
while (i < numeros.length) {
  if (numeros[i] % 2 === 0) {
    i++;
    continue;
  }
  //mostra apenas os números ímapres, quando for um par, vai para o próximo elemento

  if (numeros[i] === 7) {
    console.log("Achei o numero 7");
    break;
  }
  console.log(numeros[i]);
  i++;
}
