function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    //getter

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //setter
    set nomeCompleto(valor) {
      valor = valor.split(" "); //quebra no espaço e transforma o array
      this.nome = valor.shift(); //retorna o primeiro elemento e remove da lista
      this.sobrenome = valor.join(" "); //pega o resto da lista e coloca no array
    },
    fala: function (assunto) {
      return `${this.nome} está falando ${assunto}.`;
    },
    pesoFunc: function () {
      return this.peso;
    },
    peso: p,
    altura: a,
    //cria um getter
    get IMC() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otavio", 1.8, 80);
const p2 = criaPessoa("Erik", "Cruz", 1.6, 60);
console.log(p1.fala("falando sobre JS"));
console.log(p2.IMC);
console.log(p2.nomeCompleto);
p2.nomeCompleto = "João Paulo";
console.log(p2.nomeCompleto);
