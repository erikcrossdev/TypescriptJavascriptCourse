//705.484.450-52
//070.987.720-03
class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')  
        });
        //replace(/\D+/g, '')  //remove caracteres não numéricos
    }
    IsSequence(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //pega o primeiro caracter e repete 11 vezes, se for igual ao cpfLimpo é uma sequência
    }

    gerarNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); //pega os 9 primeiros dígitos do cpf
        const digito1 = ValidaCPF.gerarDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.gerarDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2; //concatena os dígitos gerados ao cpfSemDigitos


    }
    static gerarDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica); //multiplica o número da string pelo seu índice reverso
            reverso--;
        }
        const digito = 11 - (total % 11); 
        return digito > 9 ? '0' : String(digito); //se o dígito for maior que 9, retorna 0, caso contrário retorna o dígito como string
    }
    validaCPF(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.IsSequence()) return false;
        this.gerarNovoCpf();
        //console.log(this.novoCPF);
        return this.novoCPF === this.cpfLimpo; //compara o cpf gerado com o cpf enviado
    }
}
