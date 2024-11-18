function duplica(n) {
  return n * 2;
}
function triplica(n) {
  return n * 3;
}
function quadriplica(n) {
  return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//Ou posso utilizar:

function criaMultiplicador(mult) {
  return function (n) {
    return n * mult;
  };
}

const duplicacao = criaMultiplicador(2);
const triplicacao = criaMultiplicador(3);
const quadriplicacao = criaMultiplicador(4);

console.log(duplicacao(2));
console.log(triplicacao(2));
console.log(quadriplicacao(2));
