try {
  console.log("Abri o arquivo");
  console.log(a); //simulando erro
  console.log("Manipulei o arquivo");
  console.log("Fechei o arquivo");
} catch (error) {
  console.log("tratando o erro");
} finally {
  console.log("Sempre é executado, dando sucesso ou erro");
}
