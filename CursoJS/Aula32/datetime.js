let data = new Date(); //Cria a data na hora atual datetime now
console.log(data.toString());

//mês começa do 0, janeiro.
//ano, mês, dia, hora, minuto, segundo, milésimo de segundo
data = new Date(2019, 3, 20, 15, 14, 27, 5000); //20 de abril de 2019 as 15:14:32, pq mandamos os milésimos de segundos
console.log(data.toString());

data = new Date(2019, 3, 20, 15); //20 de abril de 2019 as 15:00:00, omite segundos e minutos
console.log(data.toString());

data = new Date("2014-04-20 20:20:59.100");
console.log(data.toString());
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); //pois começa do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia semana", data.getDay()); //0 domingo, 6 sábado
console.log(Date.now()); //milésimos de segundos da data atual
