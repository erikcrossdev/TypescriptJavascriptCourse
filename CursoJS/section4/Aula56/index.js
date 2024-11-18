function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}
const funcao = retornaFuncao();
console.dir(funcao); // tem acesso a 3 diretórios, ao global, retorno da função e retornaFuncao.
