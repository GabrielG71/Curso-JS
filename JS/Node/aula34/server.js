const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Primeiro Server</h1>
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    <a href="/contato">Contato</a>
    `);
});

app.post("/", (req, res) => {
  res.send(`
        Fórmulário recebido
        <a href="/">Home</a>
        `);
});

app.get("/contato", (req, res) => {
  res.send(`
        Contato
        <a href="/">Home</a>
        `);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!");
  console.log("Acesse por: http://localhost:3000");
});
