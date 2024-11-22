//Função com lazy evaluation

function* geradora1() {
  //Codigo qualquer
  yield "Valor 1";
  //Codigo qualquer
  yield "Valor 2";
  //Codigo qualquer
  yield "Valor 3";
}

function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

function* geradora3() {
  yield 1;
  yield 2;
  yield 3;
}
function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g1 = geradora1();
const g2 = geradora2(); //cuidado que g2 é inifito, então não coloque em um for
const g4 = geradora4();

for (let valor of g1) {
  console.log(valor);
}

for (let valor of g4) {
  console.log(valor);
}

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
