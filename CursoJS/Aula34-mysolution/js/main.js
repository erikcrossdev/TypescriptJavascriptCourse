const h1 = document.querySelector(".container h1"); //pega o h1 da class container
let date = new Date();
h1.innerHTML = `${getDiaSemana(date.getDay())}, 
${date.getDate()} de ${getMonth(date.getMonth())} de
${date.getFullYear()} <br />
${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}
`;

function getDiaSemana(dia) {
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-Feira";
    case 2:
      return "Terça-Feira";
    case 3:
      return "Quarta-Feira";
    case 4:
      return "Quinta-Feira";
    case 5:
      return "Sexta-Feira";
    case 6:
      return "Sábado";
    default:
      return "Eita";
  }
}

function getMonth(m) {
  switch (m) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
      return "Eita";
  }
}

function getNomeMes(nMes){
  const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'julho'
    , 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  return mes[nMes];
}

function getDiaSemana(nSem){
  const semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta'
    , 'sabado'];
  return semana[nSem];
}


function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
