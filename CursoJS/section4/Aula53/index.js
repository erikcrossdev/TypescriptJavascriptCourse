function funcao() {
  console.log("Oie");
  console.log(arguments); //posso pegar os argumentos
  //mesmo se a função não os pede
  console.log(arguments[0]);
}
funcao("Valor"); //Posso passar parâmetro mesmo se a função não pede
//O javascript tá nem aí
funcao("Valor", 1, 2); //posso colocar varios parametros
