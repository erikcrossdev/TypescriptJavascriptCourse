function funcao(a, b) {
  // aqui caso b não for passado como parametro
  b = b || 0; //b é b ou zero, agora zero é o valor default
  console.log(a + b);
}

function funcao2(a, b = 0) {
  console.log(a + b);
}

function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao(2);
funcao2(2);
funcao2(2, 10);
funcao3(2, undefined, 20); //assume b como default
//null não funciona, tem que ser undefined
