//capturar evento de submit
const form = document.querySelector("#form");
//previne o submit do form
form.addEventListener("submit", function (e) {
  //e = event
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  console.log(inputPeso);
  const inputAltura = e.target.querySelector("#altura");
  console.log(inputAltura);

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  console.log(peso, altura);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura Inválida", false);
    return;
  }
  const imc = getIMC(peso, altura);
  const nivel = getNivelIMC(imc);

  const msg = `Seu imc é ${imc}: ${nivel}`;
  setResultado(msg, true);

  console.log(imc, nivel);
});

function getIMC(peso, altura) {
  return (peso / altura ** 2).toFixed(2); //duas casas decimais
}

function getNivelIMC(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  //Podemos usar if ao invés de else if porque como usamos return assim que ele cair
  //em uma condição ele vai sair da função e não há risco de cair em outro if
  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}

function criaTagP() {
  const p = document.createElement("p"); //cria uma tag p
  return p;
}
//addiciona um elemento dentro do html
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaTagP();
  if (isValid) {
    p.classList.add("paragrafo-resultado"); //adiciona uma class para o paragrafo
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = msg;
  resultado.append(p);
}
