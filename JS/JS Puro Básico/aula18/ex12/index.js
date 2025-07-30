// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número não é divisivel por 3 e 55 = Próprio Número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function checkNum(num) {
  if (isNaN(num)) {
    console.log("Não é um número.");
  } else {
    if (num >= 0 && num <= 100) {
      if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz");
      } else if (num % 3 != 0 && num % 5 != 0) {
        console.log(num);
      } else if (num % 3 == 0 && num % 5 != 0) {
        console.log("Fizz");
      } else if (num % 3 != 0 && num % 5 == 0) {
        console.log("Buzz");
      }
    } else {
      console.log("Não está entre 0 a 100.");
    }
  }
}

checkNum(15); // FizzBuzz → divisível por 3 e 5
checkNum(9); // Fizz     → divisível apenas por 3
checkNum(10); // Buzz     → divisível apenas por 5
checkNum(7); // 7        → não divisível por 3 nem por 5
checkNum("130"); // Use a função com números de 0 a 100
checkNum("abc"); // Não é um número
