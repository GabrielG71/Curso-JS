// Importações

const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// Rotas de Home

route.get("/", homeController.index);

// Rotas De Autentificação.

route.get("/login", loginController.index); // Exibe página
route.post("/register", loginController.register); // Registra
route.post("/login", loginController.login); // Loga
route.get("/logout", loginController.logout); // Desloga

module.exports = route;
