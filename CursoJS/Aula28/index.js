/*
    Entre 0 - 11 - Bom dia
    Entre 12 -17 - Boa tarde
    Entre 18 - 23 - Boa noite
*/

//If pode ser usado sozinho
//else precisa de uma condição if antes
//posso ter vários else if na checagem
//só por ter um else no final
//posso ter um if seguido de else

const hora = 8;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Olá!");
}
