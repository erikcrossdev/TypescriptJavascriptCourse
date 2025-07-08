
//Com fetch api:
/*
fetch('./pessoas.json')
    .then(resposta => { return resposta.json() }) //promisse que carrega
    .then(json => carregaElementosNaPagina(json)) //promisse que mostra na tela
    .catch(err => console.error('Erro no fetch:', err));
*/
//Com Axios:
axios('./pessoas.json').then(resposta => {
    carregaElementosNaPagina(resposta.data);
}); // Usa o data do axios para acessar o JSON

function carregaElementosNaPagina(json) {
    console.log(json); // Exibe o JSON no console
    const table = document.createElement('table');
    for (let pessoa of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table); // Adiciona a tabela ao elemento com a classe 'resultado'
}


