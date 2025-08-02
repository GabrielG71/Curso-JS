const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes.js");

const PORT = 3000;

app.use("/", routes);

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: false,
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/Views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("http://localhost:3000");
});
