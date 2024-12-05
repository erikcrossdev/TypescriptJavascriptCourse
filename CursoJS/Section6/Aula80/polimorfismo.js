//classe base
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log("Saldo insuficiente! ");
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Agencia/Conta: ${this.agencia} / ${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)} `
  );
};
//criar conta corrente
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); //usa o 'construtor' da conta
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente; //usa o constructor de conta corrente

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

//Conta poupança
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo); //usa o 'construtor' da conta
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca; //usa o constructor de conta corrente

console.log("Conta base");
const conta1 = new Conta(11, 22, 10); //cria conta com 10 reais
conta1.depositar(11); //fica com 21 reais
conta1.sacar(5); //fica com 16 reais
conta1.sacar(17); //não pode sacar, só mostra
console.log("Conta corrente");
const contaCorrente = new ContaCorrente(23, 45, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);
console.log("Conta poupança");
const contaPoupanca = new ContaPoupanca(1, 23, 233);
contaPoupanca.depositar(10);
contaPoupanca.sacar(250);
