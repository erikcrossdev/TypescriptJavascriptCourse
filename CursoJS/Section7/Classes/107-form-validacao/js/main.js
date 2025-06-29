class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario'); //seleciona pela class formulario
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); //chama a função handleSubmit passando o evento como parâmetro
        }); //função de callback para o evento submit do formulário   
    }

    handleSubmit(e) {
        e.preventDefault(); //previne o comportamento padrão do formulário
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        
        if(camposValidos && senhasValidas){ 
            alert('Formulário enviado'); 
            this.formulario.submit(); 
        }else{
            console.log('Formulário não enviado'); 
        }
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){ //seleciona todos os elementos com a classe error-text
            errorText.remove(); //remove os elementos com a classe error-text
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')){ //seleciona todos os campos com a classe validar
            const label = campo.previousElementSibling.innerText; //pega o elemento anterior ao campo, que é o label
           if(!campo.value){
                this.CriaErro(campo, `Campo "${label}" não pode estar vazio`);
           }
           if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid =false;
           } 
           if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid =false;
           } 
        }
        return valid; 
    }

    CriaErro(campo, msg) {        
        const div = document.createElement('div'); //cria um elemento div
        div.innerHTML = msg; 
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); //insere a div após o campo        
     }

     validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value); //cria uma instância da classe ValidaCPF passando o valor do campo
        if(!cpf.validaCPF()){
            this.CriaErro(campo, 'CPF inválido');
            return false; 
        }
        return true; 
     }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12){
            this.CriaErro(campo, `"Usuário" precisa ter entre 3 e 12 caracteres`);
            valid = false;
        }
        if(!usuario.match(/[a-zA-Z0-9]+/g)){ //checa qualquer letras ou numeros
            this.CriaErro(campo, `"Usuário" deve conter apenas letras e/ou números`);
            valid = false;
        }
        return valid; 
    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha'); //seleciona o campo senha
        const repetirSenha = this.formulario.querySelector('.repetir-senha'); //sele

        if(senha.value !== repetirSenha.value || senha.value === ''){
            this.CriaErro(senha, `Campos "Senha" e "Repetir Senha" precisam ser iguais`);
            this.CriaErro(repetirSenha, `Campos "Senha" e "Repetir Senha" precisam ser iguais`);
            valid = false;
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            this.CriaErro(senha, `Senha precisa ter entre 6 e 12 caracteres`);
            this.CriaErro(repetirSenha, `Senha precisa ter entre 6 e 12 caracteres`);
            valid = false;
        }
        return valid;
    }
}

const valida = new ValidaFormulario();