let nome = "Luiz";
//let nome = "Otavio"; //Erro, nao pode redeclarar let

//com var, dá para redeclarar sim, por isso, evite var
var nome2 = "Pedro";
var nome2 = "Lucia";

const verdadeira = true;
if (verdadeira) {
  //maaaas let tem escopo de bloco, então eu poderia redeclará-la em um bloco
  let nome = "Pedro";
  console.log(verdadeira, nome);
  var nome2 = "Ronaldo";
  console.log(nome2);
}
//ou dentro de outro bloco assim
{
  //Ele vai buscar primeiro a variável dentro do bloco mais interno
  //Se o javascript não encontrar, ele vai procurar nos blocos mas externos.
  let nome = "Diogo";
  var nome2 = "Juan";
  console.log(nome);
}
console.log(nome2);

var sobrenome = "Cruz";
function falaOi() {
  console.log(sobrenome);
  if (verdadeira) {
    let nome3 = "joão";
    var sobrenome2 = "Sauro";
  }
  //console.log(nome3); //erro, let tá fora do escopo
  console.log(sobrenome2); //Com var eu consigo!
}
falaOi();

console.log(pais);

var pais = "Australia";
