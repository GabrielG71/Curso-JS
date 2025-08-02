const express = require("express");
const router = express.Router();
const HomeController = require("./src/Controllers/HomeController.js");

router.get("/", HomeController.index);

module.exports = router;
