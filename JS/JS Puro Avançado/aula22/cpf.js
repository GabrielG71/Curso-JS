let cpf = "50066016800";

let letra = function () {
  return cpf.length == 11;
};

let num = function () {
  return isNaN(Number(cpf));
};

if (letra() == true && num() == false) {
  console.log("É um CPF");
} else {
  console.log("Não é um CPF");
}
