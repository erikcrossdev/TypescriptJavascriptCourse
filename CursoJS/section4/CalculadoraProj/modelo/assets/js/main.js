function criaCalculadora() {
  //factory function, retorna um objeto
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },
    clearDisplay() {
      this.display.value = "";
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1); //apaga um caractere
    },
    realizaConta() {
      //eval pode ser perigoso para injetar valores, cuidad
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta invalida");
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;
          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText); //O this aqui vai ser o document '~'
          }
          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }
          if (el.classList.contains("btn-del")) {
            this.apagaUm();
          }
          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
          }
        }.bind(this)
      ); //agora com o bind, usar this vai referenciar a calculadora, não document
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
