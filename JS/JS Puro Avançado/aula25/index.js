function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function enviarMensagem(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      return reject("Erro!!!!");
    }
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, tempo);
  });
}

async function executarMensagem() {
  try {
    await enviarMensagem("Frase1", rand(1, 3));
    await enviarMensagem("Frase2", rand(1, 3));
    await enviarMensagem("Frase3", rand(1, 3));
    console.log("Passou nos testes!");
  } catch (error) {
    console.log("Erro!!!");
  }
}

executarMensagem();
