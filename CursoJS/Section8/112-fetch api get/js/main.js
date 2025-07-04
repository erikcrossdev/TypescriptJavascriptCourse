
//adiciona o evento de click para os links
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); //verifica se o elemento clicado é um link
    
    if(tag === 'a'){
        e.preventDefault(); //previne o comportamento padrão do link
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href'); //pega o atributo href do link
        console.log(href);
        const response = await fetch(href); //faz a requisição para o servidor
        if(response.status !== 200) {
            throw new Error('Erro 404: Página não encontrada');
        } 
        const html = await response.text(); //pega o conteúdo da resposta
        carregaResultado(html); //chama a função que carrega o resultado
    } catch(error) {
        console.error(error); // Exibe o erro caso ocorra
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response; //adiciona o conteúdo da resposta na div resultado
    console.log(response); // Exibe a resposta no console
}
