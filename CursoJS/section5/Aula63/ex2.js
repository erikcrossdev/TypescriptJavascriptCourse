const nomes = ["James", "Maria", "Angela"];

const novo = [...nomes]; //copia o array
novo.pop(); //tanto novo quando nomes perdeu o ultimo elemento!

console.log(novo);
console.log(nomes);

console.log(nomes.length); //tamanho do array
console.log(nomes.pop()); //remove e retorna o elemento removido
console.log(nomes);

//remove o primeiro elemento e ordena o array
const removido = nomes.shift();
console.log(removido);
console.log(nomes);
