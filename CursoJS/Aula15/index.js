let myString = 'Um "texto"'; //para colocar " " dentro do texto
console.log(myString);
myString = 'Um "texto"'; //para colocar " " dentro do texto
console.log(myString);
myString = "Barra invertida \\"; //para colocar \ dentro do texto
console.log(myString);

//Textos são indexadas.
console.log(myString[3]); //terceira letra da string
console.log(myString.charAt(30)); //posso sair do range da string sem retornar erro
console.log(myString.concat("con", "cat"));

//pesquisar index
console.log(myString.indexOf("Barra")); //retorna o index, ou -1 se não retornar.
console.log(myString.indexOf("Barra", 3)); //procura apartir do indice 3
console.log(myString.match(/[a-z]/g)); //retorna todas letras minusculas, g coloca em array
console.log(myString.match(/[a-z]/)); //retorna todas letras minusculas, g coloca em array
console.log(myString.search(/i/)); //procura o caractere i e retorna o index com expressões regulares
console.log(myString.replace("\\", ":)")); //troca um caractere por outro
myString = "O rato roeu a roupa do rei de roma.";
console.log(myString.replace(/r/, "R")); //troca apenas o primeiro r
myString = "O rato roeu a roupa do rei de roma.";
console.log(myString.replace(/r/g, "R")); //troca TODOS os r
console.log(myString.length); //tamanho da string
console.log(myString.slice(2, 6)); //pega a string rato
console.log(myString.slice(-5)); //pega a string "roma."
console.log(myString.slice(myString.length - 5)); //pega a string "roma."
console.log(myString.slice(myString.length - 5, myString.length - 1)); //pega a string "roma"
console.log(myString.substring(myString.length - 5, myString.length - 1)); // também retorna "roma"

console.log(myString.split(" ")); // splita em arrays no caractere indicado
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
