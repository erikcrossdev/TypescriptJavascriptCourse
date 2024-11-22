//IIFE - Immediately invoked function expression
function qualquerCoisa() {
  console.log("minha função");
}
qualquerCoisa();
//uma função anonima chamada imediatamente que não toca o escopo global
(function () {
  const nome = "Luiz"; //posso proteger minha variavél do escopo global
  console.log("nome");
})(); //chamo imediatamente a mesma função
const nome = "Pedro"; // não conflita com a minha IIFE
