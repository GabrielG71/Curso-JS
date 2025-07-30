const num = [2, 5, 10, 12, 15];

const numFiltrado = num.filter((valor) => {
  return valor % 2 == 0;
});

console.log(numFiltrado);

const pessoas = [
  { Nome: "Gabriel", Idade: 18 },
  { Nome: "Adriano", Idade: 54 },
  { Nome: "Isabella", Idade: 21 },
  { Nome: "Júlia", Idade: 19 },
];

const pessoasFilter = pessoas.filter((valor) => {
  if (valor.Idade < 20) {
    return valor.Nome;
  }
});

console.log(pessoasFilter);

num.forEach((element) => {
  console.log(element);
});
