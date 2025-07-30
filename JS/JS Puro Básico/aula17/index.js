frutas = ["ma", "ca", "da", "mia"];

for (index in frutas) {
  console.log(frutas[index]);
}

pessoa = {
  nome: "Cláudio",
  idade: "7",
  esporte: "Quick ball aquático / Futelargas",
};

console.log("\n");

for (json in pessoa) {
  console.log(json);
}

let { nome } = pessoa;

console.log(`Nome: ${nome}`);

console.log("\n");

const time = "Santos";

for (letras of time) {
  console.log(`A segunda letra de ${time} é: ${time[1]}`);
}
