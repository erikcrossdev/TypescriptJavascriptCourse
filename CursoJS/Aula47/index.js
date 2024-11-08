//Numero divisivel por 3 = fizz, por 5 = buzz, 3 e 5 = fizz buzz, não é divisivel, retorna no numero

function fizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz"; //Tem que checar essa condição primeiro
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Fizz";
  return numero;
}

console.log("a", fizzBuzz("a"));
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
