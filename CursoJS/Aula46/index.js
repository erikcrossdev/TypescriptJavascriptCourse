//Escreva uma função chamada ePaisagem que recebe dois argumentos,
//largura e altura de uma imagem (number).
//Retorne true se a imagem estiver em modo paisagem

function ePaisagem(altura, largura) {
  return largura >= altura;
}
//ou com arrow function
const Paisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));
