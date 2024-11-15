function soma() {
  let total = 0;
  for (let arg of arguments) {
    total += arg;
  }
  console.log(total);
}
//posso também ter os argumentos
//declarados se eu quiser
function soma(a, b, c) {
  let total = 0;
  for (let arg of arguments) {
    total += arg;
  }
  console.log(total);
}

soma(1, 2, 3, 4, 5); //posso colocar varios parametros
