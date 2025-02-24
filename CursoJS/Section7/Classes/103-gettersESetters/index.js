
const _velocidade = Symbol('velocidade');
class Carro{

    constructor(nome){
        this.nome = nome;
        this[_velocidade]=0;
    }
    get velocidade(){
        console.log("GETTER");
        return this[_velocidade];
    }
    set velocidade(valor){
        console.log("SETTER");
        if(typeof valor !== 'number') return;
        if(valor>=100 || valor<=0 ) return;
        this[_velocidade] = valor;
    }
    acelerar(){
        if(this[_velocidade] >=100){
            return;
        }
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade] --;
    }
}

const c1 = new Carro('Fusca');

for(let i =0 ; i<=200;i++){
    c1.acelerar();
}
c1.acelerar();

c1.velocidade = 1500; //Agora não consigo editar
c1.velocidade = 99; //veja que eu utilizo o setter como se ele fosse uma variável!
console.log(c1);
console.log(c1.velocidade); //usa o getter
