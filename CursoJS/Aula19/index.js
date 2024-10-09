const number = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML += `Seu número é <strong>${number}</strong>`;
texto.innerHTML = `<p>
    Raiz quadrada: <strong>${number ** (1 / 2)}</strong><br />
    ${number} é inteiro: <strong>${Number.isInteger(number)}</strong><br />
    ${number} é NaN: <strong>${Number.isNaN(number)}</strong><br />
    Arredondado para baixo: <strong>${Math.floor(number)}</strong><br />
    Arredondado para cima: <strong>${Math.ceil(number)}</strong><br />
    Arredondado com duas casas decimais: <strong>${number.toFixed(
      2
    )}</strong><br />
</p>`;
