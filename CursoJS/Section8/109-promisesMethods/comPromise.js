function Aleatorio(min, max) {
    min*= 1000; // Convertendo para milissegundos
    return Math.floor(Math.random() * (max - min + 1) + min);   
}


function Espera(msg, tempo) {
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') {
            reject('A mensagem deve ser uma string');
            return; // Para a execução da função se houver erro
        }
        setTimeout(() => { 
        resolve(msg); // Chama a função resolve quando a espera termina    
        }, tempo);
    }); //resolve = sucesso, reject = erro
   
}

//Promises.all _____________________________
//Passa um array com promises e entrega em um array, ele vai executar depois de resolver todas as promises
const promises = ['PrimeiroValor', Espera('Promise 1', 3000) , Espera("promise 2", 500), Espera('Promise 3', 4000), 'OutroValor'];

Promise.all(promises)
.then(function(valor){
     console.log(valor); // Exibe todos os valores resolvidos
    }
).catch(function(erro){
    console.error('Erro:', erro); // Exibe o erro caso ocorra   
});

//-------------------------------------

//Promise.race - A primeira que resolver, resolve a promise e será retornada
const promisesRace = [Espera('Promise 1', Aleatorio(1,3)) , Espera("promise 2", Aleatorio(1,3)), Espera('Promise 3', Aleatorio(1,3)), ];
Promise.race(promisesRace)
.then(function(valor){
     console.log(valor); // Exibe todos os valores resolvidos
    }
).catch(function(erro){
    console.error('Erro:', erro); // Exibe o erro caso ocorra   
});

