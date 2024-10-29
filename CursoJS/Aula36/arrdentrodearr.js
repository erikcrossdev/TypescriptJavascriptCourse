const nums = [
  [1, 2, 3], //linha index 0
  [4, 5, 6], //linha index 1
  [7, 8, 9], //linha index 2
];

const [lista1, lista2, lista3] = nums;
const [, [, , seis]] = nums; //pega o numero 6

console.log(seis);
console.log(lista1);
console.log(lista2);
console.log(lista3);

console.log(nums[1][2]); //pega o numero 6
