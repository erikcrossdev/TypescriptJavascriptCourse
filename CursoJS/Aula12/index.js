let nome;
let querColocarNome = window.confirm("Deseja inserir seu nome?"); //retorna um bool true or false
if (querColocarNome) {
  nome = window.prompt("Digite o seu nome: ");
}
if (nome != undefined || nome != null) {
  alert(`Olá, ${nome}!`);
} else {
  alert("Grosseiro!");
}

let numero = window.prompt("Digite um numero para somar por +3: ");
alert(numero + 3);
alert(Number(numero) + 3);
