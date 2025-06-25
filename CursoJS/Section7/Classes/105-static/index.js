class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

     //método de instância
    aumentarVolume(){
        this.volume +=2;
    }
    
     //método de instância
    diminuirVolume(){
        this.volume -=2;
    }

    //método da classe, estático
    static trocaPilha(){
        //console.log("Troca todas as pilhas de todo mundo");
        console.log(this.volume);
    }

    static soma(x, y){
        return x +y;
    }

    static ReturnThis(){
        console.log(this); //this nesse caso será a classe!
    }

   
}

/*
 function teste(){
     console.log(this);   
 }*/

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);
console.log(Math.random());// random é uma função estática também! 
console.log(ControleRemoto.soma(4,1));
ControleRemoto.ReturnThis();
//teste(); //o This nesse caso será o objeto global do javascript!