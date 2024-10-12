const pessoa1 = {
  nome: "Erik",
  sobrenome: "Cruz",
  idade: 29,
  dialogo: "Olá mundo",

  fala() {
    //não precisa da palavra function
    console.log(this.nome + " diz: " + this.dialogo);
  },
  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1.idade);
