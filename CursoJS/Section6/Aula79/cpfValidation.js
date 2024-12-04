function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, ""); //remove tudo que não for numero
    },
  });
}
ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false; //retorna falso se cpfLimpo está vazio
  if (this.cpfLimpo.length !== 11) return false; //retorna se tem menos de 11 digitos
  if (this.isSequencia()) return false; //cpfs não podem ser 111.111.111-11

  const cpfParcial = this.cpfLimpo.slice(0, -2); //remove os dígitos verificadores do final
  const digito1 = this.criaDigito(cpfParcial); //recupera o primeiro digito verificador
  const digito2 = this.criaDigito(cpfParcial + digito1); //recupera o segundo digito verificador

  const novoCPF = cpfParcial + digito1 + digito2;
  console.log(novoCPF);
  return novoCPF === this.cpfLimpo; //compara os cpfs gerados
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;

  let total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); //repete o primeiro caractere 11 vezes
  return sequencia === this.cpfLimpo; //se meu cpf for igual ao primeiro caractere repetido 11 vezes, então é uam sequencia
};

const cpf = new ValidaCPF("705.484.450-52");
console.log(cpf.cpfLimpo);
console.log(cpf.valida());

const cpf2 = new ValidaCPF("111.111.111-11");
console.log(cpf2.cpfLimpo);
console.log(cpf2.valida());
