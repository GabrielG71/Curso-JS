function mostrarHora() {
  const data = new Date();
  return data.toLocaleTimeString("pt-BR");
}

setInterval(() => {
  console.log(mostrarHora());
}, 1000);

setTimeout(() => {
  console.log("JS");
}, 4000);
