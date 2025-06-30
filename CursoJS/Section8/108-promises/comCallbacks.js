function Aleatorio(min, max) {
    min*= 1000; // Convertendo para milissegundos
    return Math.floor(Math.random() * (max - min + 1) + min);   
}

function Espera(msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg);
        if (callback) {
            callback();
        }
    }, tempo);
}

Espera('Frase 1', Aleatorio(1, 3), function(){
    Espera('Frase 2', Aleatorio(1, 3), function(){
        Espera('Frase 3', Aleatorio(1, 3)); //demora entre 1 a 3 segundos para executar
    }); //demora entre 1 a 3 segundos para executar
}); //demora entre 1 a 3 segundos para executar

