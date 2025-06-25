class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado =false;
    }
    ligar() {
        if(this.ligado){
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }
    desligar(){
          if(!this.ligado){
            console.log(this.nome + ' já está desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //chama o construtor da classe pai!!
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
     constructor(nome, temWifi) {
        super(nome); //chama o construtor da classe pai!!
        this.temWifi = temWifi;
    }
    /*
    ligar(){
        super.ligar();
        console.log("Você deu override no método ligar!");
    }*/
   
}

const d1 = new DispositivoEletronico('Smartphone');
const s1 = new Smartphone('Samsung', 'preto', 'Galaxy');
const t1 = new Tablet('Samsung', true);
t1.ligar();
console.log(d1);
console.log(s1);
console.log(t1);