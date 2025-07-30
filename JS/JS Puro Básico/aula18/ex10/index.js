// Escreva uma função que recebe 2 números e retorne o maior deles.

function maior(num1, num2) {
  numeros = [num1, num2];
  max = Math.max(...numeros);

  console.log(max);
}

maior(1, 2);
