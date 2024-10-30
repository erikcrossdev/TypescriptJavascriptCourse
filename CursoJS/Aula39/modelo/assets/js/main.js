const elementos = [
  { tag: "p", texto: "Lorem ipsum" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag); //cria o elemento com a tag
  tagCriada.innerText = texto;
  //ou
  //let textCriado = document.createTextNode(texto);
  //tagCriada.appendChild(textCriado);
  div.appendChild(tagCriada); //adiciona o elemento criado na div
}

container.appendChild(div);
