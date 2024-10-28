const date = new Date();
const diaSemana = date.getDay();
let diaSemanaTexto;

function getDiaSemanaTexto() {}

if (diaSemana === 0) {
  diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
  diaSemanaTexto = "Segunda-Feira";
} else if (diaSemana === 2) {
  diaSemanaTexto = "Terça-Feira";
} else if (diaSemana === 3) {
  diaSemanaTexto = "Quarta-Feira";
} else if (diaSemana === 4) {
  diaSemanaTexto = "Quinta-Feira";
} else if (diaSemana === 5) {
  diaSemanaTexto = "Sexta";
} else if (diaSemana === 6) {
  diaSemanaTexto = "Sabado";
} else {
  diaSemanaTexto = "Eita";
}

console.log(diaSemanaTexto);
//Ou com switch
switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda-Feira";
    break;
  case 2:
    diaSemanaTexto = "Terça-Feira";
    break;
  case 3:
    diaSemanaTexto = "Quarta-Feira";
    break;
  case 4:
    diaSemanaTexto = "Quinta-Feira";
    break;
  case 5:
    diaSemanaTexto = "Sexta-Feira";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;
  default:
    diaSemanaTexto = "Eita";
    break;
}

function getDiaSemana(dia) {
  switch (dia) {
    case 0:
      return (diaSemanaTexto = "Domingo");
    case 1:
      return (diaSemanaTexto = "Segunda-Feira");
    case 2:
      return (diaSemanaTexto = "Terça-Feira");
    case 3:
      return (diaSemanaTexto = "Quarta-Feira");
    case 4:
      return (diaSemanaTexto = "Quinta-Feira");
    case 5:
      return (diaSemanaTexto = "Sexta-Feira");
    case 6:
      return (diaSemanaTexto = "Sábado");
    default:
      return (diaSemanaTexto = "Eita");
  }
}

console.log(getDiaSemana(diaSemana));
