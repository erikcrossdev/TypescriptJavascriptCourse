(function (idade, peso, altura) {
  const sobrenome = "Miranda";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criaNome("Luiz"));
  }
  falaNome();
  console.log(idade, peso, altura); //parametros no log
})(30, 80, 1.8); //argumentos
