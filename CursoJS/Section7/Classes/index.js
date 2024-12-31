//Mesma coisa que a função construtora
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
//com classes a gente não precisa associar ao proto
    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }

}

const p1 = new Pessoa("Luiz", "Miranda");
p1.falar();
p1.beber();
const p2 = new Pessoa("Leon", "Kennedy");
p2.falar();
p2.beber();