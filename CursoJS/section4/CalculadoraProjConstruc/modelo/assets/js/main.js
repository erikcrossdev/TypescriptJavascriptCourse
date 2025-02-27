function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.keyCode !== 13) {
        return;
      }
      this.realizaConta();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del(el);
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
    });
  };

  this.realizaConta = (el) => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Conta inválida");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };
  this.del = (el) => (this.display.value = this.display.value.slice(0, -1));
  this.clear = () => (this.display.value = "");
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus(); //foca no display além do botao
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
