function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000); //chama de 1 em um segundo.
//O código vai rodar para SEMPRE!

setTimeout(function () {
  clearInterval(timer);
}, 10000); //Para o intervalo depois de 10 segundos

setTimeout(function () {
  console.log("Passou cinco segundos!");
}, 5000);
