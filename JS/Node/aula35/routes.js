const express = require("express");
const router = express.Router();
const Home = require("./Controllers/HomeController");

router.get("/", Home);

module.exports = router;
