function Aleatorio(min, max) {
    min*= 1000; // Convertendo para milissegundos
    return Math.floor(Math.random() * (max - min + 1) + min);   
}

//Espera só simula uma espera
function Espera(msg, tempo) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('A mensagem deve ser uma string. Caiu no erro ');
                return; // Para a execução da função se houver erro
            }
            resolve(msg.toUpperCase() + ' - Passei na promise'); // Chama a função resolve quando a espera termina
            return;
        }, tempo);
    }); //resolve = sucesso, reject = erro
   
}

/*
//Usa promise como se fosse síncrono, de forma encadeada
Espera('Fase 1', Aleatorio(0, 3))
.then(valor => {
    console.log(valor);
    return Espera('Fase 2', Aleatorio(0, 3));
}).then(valor => {
    console.log(valor);
    return Espera('Fase 3', Aleatorio(0, 3));
}).then(valor => {
    console.log(valor);
}
).catch(erro => {
    console.error('Erro:', erro); // Exibe o erro caso ocorra
});
//Porém, o código acima é bem verboso...
*/

//COM ASYNC E AWAIT
async function executa() {
    try{
        const fase1 = Espera('Fase 1', 1);
        console.log(fase1); // Exibe o resultado da fase 1 como pendente
        setTimeout(() => {
            console.log('Fase 1 resolvida', fase1); // Exibe o resultado da fase 1 após 1.1 segundos
        }, 1300);
        console.log(fase1); // Exibe o resultado da fase 1
        const fase2 = await Espera('Fase 2', Aleatorio(0, 3)); //força erro, pois espera uma string
        console.log(fase2); // Exibe o resultado da fase 2
        const fase3 = await Espera('Fase 3', Aleatorio(0, 3));
        console.log(fase3); // Exibe o resultado da fase 3
        console.log('Terminou na :', fase3);
    }catch(erro) {
        console.error('Erro:', erro); // Exibe o erro caso ocorra
    }
}

executa();
