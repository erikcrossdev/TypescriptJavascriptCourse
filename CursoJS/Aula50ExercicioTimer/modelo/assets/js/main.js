const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function createHourAfterSeconds(sec) {
  const data = new Date(sec * 1000);
  return data.toLocaleTimeString("pt-BR", {
    //
    hour12: false,
    timeZone: "GMT",
  });
}

function iniciaRelogios() {
  relogio.classList.remove("pausado");
  clearInterval(timer); // Dá um clear no timer para não chamar vários timers juntos
  timer = setInterval(function () {
    segundos++; //adiciona 1 segundo a cada 1000 miliseconds
    relogio.innerHTML = createHourAfterSeconds(segundos); //formata hh/mm/ss
  }, 1000);
}
//posso pegar o listener de um elemento
iniciar.addEventListener("click", function (event) {
  iniciaRelogios();
});

//ou posso pegar o listener de todos os botões
document.addEventListener("click", function (e) {
  const element = e.target;

  if (element.classList.contains("zerar")) {
    console.log("Clicou em zerar");
    relogio.classList.add("pausado");
    clearInterval(timer); //remove timer
    segundos = 0;
    relogio.innerHTML = createHourAfterSeconds(segundos);
  }
  if (element.classList.contains("pausar")) {
    console.log("Clicou em pausar");
    clearInterval(timer); //remove timer
    relogio.classList.add("pausado");
  }
  if (element.classList.contains("iniciar")) {
    console.log("Clicou em iniciar");
  }
});
