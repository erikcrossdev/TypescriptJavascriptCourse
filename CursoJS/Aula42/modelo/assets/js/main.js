const paragrafos = document.querySelector(".paragrafos");

//Node list não é um array, mas podemos usar um for classico e percorrer como um array
const ps = paragrafos.querySelectorAll("p"); //pega todas as tags p dentro da class 'paragrafos'

const estilosBody = getComputedStyle(document.body); //pega os estilos do body
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "white";
}
