//ia ser ruim mudar uma lista de nomes se ela fosse assim, se eu tivesse nomes compostos, ia ser horrível...
const nomes = "Luiz Maria João";

//arrays em javascript permitem ter vários tipos de dados, mas tente deixar só um tipo de dado no array
const dados = ["luiz", 1, true, null, 6.66];
console.log(dados);

const alunos = ["luiz", "Pedro", "Maria", "Erik"];

console.log(nomes[1]); //pega a segunda letra de nomes;
console.log(alunos[1]); //Pega o elemento 1 do array

console.log(alunos[0]); //Pega o elemento 1 do array
alunos[0] = "Luiz"; //muda o primeiro elemento do array
console.log(alunos[0]); //Pega o elemento 1 do array

alunos[4] = "Otavio"; //Adiciona um elemento no array
alunos[alunos.length] = "Marcia"; //Adiciona um elemento no array
console.log(alunos[4]);
console.log(alunos[alunos.length - 1]); //Acessa o últmo elemento

//ou posso adicionar sem me preocupar com o tamanho do array

alunos.push("Leticia"); //Adiciona no final
alunos.unshift("Morgana"); //Adiciona no indice 0

console.log(alunos[alunos.length - 1]); //Acessa o últmo elemento
console.log(alunos[0]); //Acessa o últmo elemento

const removed = alunos.pop(); //remove o último elemento do array, retorna o elemento
console.log("Aluno removido: " + removed);

const removedBegin = alunos.shift(); //remove o primeiro elemento do array, retorna o elemento
console.log("Aluno removido do inicio: " + removedBegin);

console.log(alunos);

delete alunos[1]; //deixa posição vazia, removendo o elemento mas não movendo a posição no array
console.log(alunos);

console.log(alunos[50]); //retorna undefined

console.log(alunos.slice(0, 2)); //pega os 2 elementos do início do array
console.log(alunos.slice(0, -2)); //pega os elementos do array menos os 2 ultimos

console.log(typeof alunos); //é um object
console.log(alunos instanceof Array); //verifica se é um array. retorna true se sim
