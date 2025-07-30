const data = new Date();
const dia_da_semana_num = data.getDay();
let dia_da_semana = "";
const dia = data.getDate();
const mes_num = data.getMonth();
let mes = "";
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();

switch (dia_da_semana_num) {
  case 0:
    dia_da_semana = "domingo";
    break;
  case 1:
    dia_da_semana = "segunda-feira";
    break;
  case 2:
    dia_da_semana = "terça-feira";
    break;
  case 3:
    dia_da_semana = "quarta-feira";
    break;
  case 4:
    dia_da_semana = "quinta-feira";
    break;
  case 5:
    dia_da_semana = "sexta-feira";
    break;
  case 6:
    dia_da_semana = "sabado";
    break;
}

switch (mes_num) {
  case 0:
    mes = "janeiro";
    break;
  case 1:
    mes = "fevereiro";
    break;
  case 2:
    mes = "março";
    break;
  case 3:
    mes = "abril";
    break;
  case 4:
    mes = "maio";
    break;
  case 5:
    mes = "junho";
    break;
  case 6:
    mes = "julho";
    break;
  case 7:
    mes = "agosto";
    break;
  case 8:
    mes = "setembro";
    break;
  case 9:
    mes = "outubro";
    break;
  case 10:
    mes = "novembro";
    break;
  case 11:
    mes = "dezembro";
    break;
}

document.getElementById(
  "data"
).innerText = `${dia_da_semana}, ${dia} de ${mes} de ${ano} às ${hora}:${minutos}
`;
