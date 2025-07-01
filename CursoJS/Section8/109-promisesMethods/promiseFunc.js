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

function baixaPrograma(){
    const emCache = false; // Simula se o programa está em cache ou não
    if(emCache) {
        return Promise.resolve('Em cache');
    }else{
        return Espera('Baixando o programa', Aleatorio(1, 3));
    }
}

function baixaPrograma2(){
    const emCache = true; // Simula se o programa está em cache ou não
    if(emCache) {
        return Promise.reject('Rejeitou! Pagina em cache');
    }else{
        return Espera('Baixando Página', Aleatorio(1, 3));
    }
}

baixaPrograma().then(
    dados => {
        console.log(dados);
    }
).catch(e =>console.log('Erro:', e));

baixaPrograma2().then(
    dados => {
        console.log(dados);
    }
).catch(e =>console.log('Erro:', e));