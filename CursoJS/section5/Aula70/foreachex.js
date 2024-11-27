const a1 = [10, 20, 30];

//Foreach serve para iterar em arrays
a1.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
  console.log(array[indice]);
});

//fazendo um "reduce com forEach"
let total = 0;
a1.forEach((valor) => {
  console.log(valor);
  total += valor; ///é mais performático usar reduce!!!!
});
console.log(total);
