for (let i = 0; i <= 5; i++) {
  console.log("Linha " + i);
}

for (let i = 2; i <= 10; i += 2) {
  console.log("É par: ", i);
}

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "Par" : "Ímpar";
  console.log(i, par);
}
