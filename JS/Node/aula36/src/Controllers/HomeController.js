class HomeController {
  static index(req, res) {
    res.render("Home", {
      title: "Home - Meu App",
      pageTitle: "Bem-vindo ao Meu App",
      description:
        "Esta é a página inicial do nosso aplicativo Express com MVC!",
      success: req.query.success,
      error: req.query.error,
    });
  }
}

module.exports = HomeController;
