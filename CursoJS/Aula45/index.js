//Escreva uma função que recebe 2 numeros e retorne o maior deles
//my solution
function Greater(num1, num2) {
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
}

function GreaterV2(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}

function Greaterv3(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
//ou com arrow function
const Max = (x, y) => {
  return x > y ? x : y;
};

//ou com arrow function
const MaxV2 = (x, y) => (x > y ? x : y);

const maior = Greater(3, 5);
console.log(maior);
