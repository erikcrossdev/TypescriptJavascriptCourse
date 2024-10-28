const h1 = document.querySelector(".container h1"); //pega o h1 da class container
let date = new Date();

const options = { dateStyle: "full", timeStyle: "short" };

h1.innerHTML = date.toLocaleString("pt-BR", options);
