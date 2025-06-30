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

Espera('Frase 1', Aleatorio(1, 3))
.then(resposta => {
    console.log(resposta);
    return Espera('Frase 2', Aleatorio(1, 3)).then(
        resposta2=>{
            console.log(resposta2); 
            return Espera(666, Aleatorio(1, 3)).then( //força o reject com parâmetro inválido
                resposta3 => {
                    console.log(resposta3); 
                }
            ); 
        }
    ); 
})
.catch(e => {
    console.error('Erro:', e); // Exibe o erro caso ocorra
}); //Then chama no resolve, catch no reject

console.log('Isso será exibido primeiro!');

