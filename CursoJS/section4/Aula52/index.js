//Declaração de função. Function hoisting, posso declarar e chamar
//ou chamar e declarar.
falaOi(); //posso chamar "falaOi" antes de declarar por causa do function hoisting
function falaOi() {
  console.log("Oii");
}

//First-class object (Objetos de primeira classe)
//function expression
//sua const pode ser uma function
const souUmDado = function () {
  console.log("Sou um dado");
};

const souOutroDado = function nomeDaFuncao() {
  console.log("Sou um dado também");
};

souUmDado();
//com isso eu posso passar callbacks e chamar funcões
function executaFunction(funcao) {
  funcao();
}
//e chamar assim
executaFunction(souUmDado);

//Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

funcaoArrow();

//dentro de um objeto, posso ter funções

const obj = {
  falar: function () {
    console.log("NPC diz: Olá");
  },
};
obj.falar();
