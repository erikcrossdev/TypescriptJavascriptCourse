//do while vai executar uma vez pelo menos
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10;
//while não vai ser executado, porque rand começa com 10, a condição já é falsa
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

rand = 10;
//Já o do while vai executar, pois ele vai checar a condição apenas no final
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
