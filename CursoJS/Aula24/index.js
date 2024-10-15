function MyForm() {
  const form = document.querySelector(".form"); //seleciona semelhante com o seletor css
  const objt = [];
  const result = document.querySelector(".result");
  /*
  form.onsubmit = function (evento) {
    //observa quando o form foi enviado
    evento.preventDefault(); //faz com que a página não dê refresh
    alert("Enviado!");
  };*/
  //mesma forma só que mais moderna
  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    myObjt = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    console.log(myObjt);
    objt.push(myObjt);
    console.log(objt);
    result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

MyForm();
