exports.index = (req, res) => {
  if (req.session.user) return res.redirect("/");
  res.render("login", {
    csrfToken: req.csrfToken(),
    errors: req.flash("errors"),
    success: req.flash("success"),
  });
};

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errors = [];

    // Validações
    if (!email || !validator.isEmail(email)) {
      errors.push("E-mail inválido");
    }

    if (!password || password.length < 6) {
      errors.push("Senha deve ter pelo menos 6 caracteres");
    }

    // Verifica se usuário já existe
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      errors.push("Este e-mail já está cadastrado");
    }

    if (errors.length > 0) {
      req.flash("errors", errors);
      return res.redirect("/login");
    }

    // Cria hash da senha
    const salt = bcryptjs.genSaltSync();
    const passwordHash = bcryptjs.hashSync(password, salt);

    // Cria o usuário
    const user = new User({
      email: email.toLowerCase(),
      password: passwordHash,
    });

    await user.save();

    req.flash("success", "Conta criada com sucesso! Faça seu login.");
    res.redirect("/login");
  } catch (error) {
    console.error("Erro no registro:", error);
    req.flash("errors", ["Erro interno do servidor. Tente novamente."]);
    res.redirect("/login");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errors = [];

    // Validações básicas
    if (!email || !validator.isEmail(email)) {
      errors.push("E-mail inválido");
    }

    if (!password) {
      errors.push("Senha é obrigatória");
    }

    if (errors.length > 0) {
      req.flash("errors", errors);
      return res.redirect("/login");
    }

    // Busca usuário no banco
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      req.flash("errors", ["E-mail ou senha incorretos"]);
      return res.redirect("/login");
    }

    // Verifica senha
    const passwordMatch = bcryptjs.compareSync(password, user.password);
    if (!passwordMatch) {
      req.flash("errors", ["E-mail ou senha incorretos"]);
      return res.redirect("/login");
    }

    // Cria sessão
    req.session.user = {
      id: user._id,
      email: user.email,
    };

    req.flash("success", "Login realizado com sucesso!");
    res.redirect("/dashboard"); // ou a página que você quiser redirecionar
  } catch (error) {
    console.error("Erro no login:", error);
    req.flash("errors", ["Erro interno do servidor. Tente novamente."]);
    res.redirect("/login");
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erro ao destruir sessão:", err);
      return res.redirect("/");
    }
    res.redirect("/login");
  });
};
