const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefa = document.querySelector(".tarefas");

adicionaTarefasSalvas();

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return; //se o campo está vazio, ignora
  criaTarefa(inputTarefa.value);
});

// para pegar o keycode da tecla para pegar tecla enter
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    //13 é a tecla enter
    if (!inputTarefa.value) return; //se o campo está vazio, ignora
    criaTarefa(inputTarefa.value);
  }
});

//limpa input e coloca cursor no campo
function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus(); //um evento html de focus
}

function criaTarefa(textoInput) {
  console.log(textoInput);
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefa.appendChild(li);
  limpaInput();
  criaBotaoApagar(li); //cria o botão de apagar
  salvarTarefas();
}

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function criaBotaoApagar(li) {
  li.innerHTML += "  ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar"); //posso setar um atributo ou class assim
  botaoApagar.setAttribute("title", "Apagar tarefa?"); //cria um título no hover
  li.appendChild(botaoApagar);
}

document.addEventListener("click", function (e) {
  const el = e.target;
  //vai apagar só se conter essa classe
  if (el.classList.contains("apagar")) {
    el.parentElement.remove(); //remove o li, elemento pai;
    salvarTarefas();
  }
});
//salva tarefas no local storage do navegador.
function salvarTarefas() {
  const liTarefas = tarefa.querySelectorAll("li");
  const listDeTarefas = [];

  for (let t of liTarefas) {
    let tarefaTexto = t.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listDeTarefas.push(tarefaTexto);
  }
  //criar um json para
  const tarefasJson = JSON.stringify(listDeTarefas);
  //salva no navegador!!!
  localStorage.setItem("tarefas", tarefasJson);
}

function adicionaTarefasSalvas() {
  //pega tarefas salvas
  const tarefas = localStorage.getItem("tarefas");
  //converte de volta para um array
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
