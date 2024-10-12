function sum(x = 1, y = 1) {
  const result = x + y;
  return result;
  console.log("não será chamado ");
}

const result = sum(4, 4); //posso chamar de result porque a variável result é local no escopo da função
const res2 = sum();
console.log(res2); //retorna NaN, pois estou passando de parâmetro dois undefined;
console.log(sum("Erik", "Cruz")); //concatena

//console.log(result); //erro, result é uma variavel local da função
