const conta = (...args) => {
  console.log(args);
  //ao invés de usar arguments, posso usar o rest operator
  //assim consigo usar multiplos argumentos com arrow functions
};
conta("+", 1, 20, 30, 40, 50);
