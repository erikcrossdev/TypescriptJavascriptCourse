
const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText); //callback on success
        }else{
            obj.error(`Error: ${xhr.status}`); //callback on error
        }
    });
};

//adiciona o evento de click para os links
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); //verifica se o elemento clicado é um link
    
    if(tag === 'a'){
        e.preventDefault(); //previne o comportamento padrão do link
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href'); //pega o atributo href do link
    console.log(href);
    //vai mandar a request para o servidor
    request({
        method: 'GET',
        url: href,
        success(response){
            carregaResultado(response); //chama a função que carrega o resultado
        },
        error(error) {
            console.error(error); // Exibe o erro caso ocorra
        }   
    }
    );
}
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response; //adiciona o conteúdo da resposta na div resultado
    console.log(response); // Exibe a resposta no console
}