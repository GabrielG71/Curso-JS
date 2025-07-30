class FormValidator {
  constructor(form) {
    this.form = form;
    this.fields = {};
    this.errors = {};
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this.form);
    this.fields = Object.fromEntries(formData.entries());
    this.errors = {};

    this.clearErrors();
    this.validateFields();

    if (Object.keys(this.errors).length > 0) {
      this.displayErrors();
    } else {
      this.success();
    }
  }

  validateFields() {
    const { nome, sobrenome, cpf, user, senha, resenha } = this.fields;

    for (let key in this.fields) {
      if (!this.fields[key].trim()) {
        this.errors[key] = "Este campo é obrigatório.";
      }
    }

    if (user && !/^[a-zA-Z0-9]+$/.test(user)) {
      this.errors.user = "Usuário deve conter apenas letras e números.";
    }

    if (user && (user.length < 3 || user.length > 12)) {
      this.errors.user = "Usuário deve ter entre 3 e 12 caracteres.";
    }

    if (senha && (senha.length < 6 || senha.length > 12)) {
      this.errors.senha = "Senha deve ter entre 6 e 12 caracteres.";
    }

    if (senha && resenha && senha !== resenha) {
      this.errors.senha = "As senhas não coincidem.";
    }

    if (cpf && !this.validateCPF(cpf)) {
      this.errors.cpf = "CPF inválido.";
    }
  }

  clearErrors() {
    const errorSpans = this.form.querySelectorAll("[data-error]");
    errorSpans.forEach((span) => (span.innerText = ""));
  }

  displayErrors() {
    for (const field in this.errors) {
      const span = this.form.querySelector(`[data-error="${field}"]`);
      if (span) span.innerText = this.errors[field];
    }
  }

  success() {
    this.form.innerHTML = "<p>Usuário Cadastrado!</p>";
  }

  validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += +cpf[i] * (10 - i);
    let dig1 = 11 - (soma % 11);
    if (dig1 > 9) dig1 = 0;
    if (dig1 !== +cpf[9]) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += +cpf[i] * (11 - i);
    let dig2 = 11 - (soma % 11);
    if (dig2 > 9) dig2 = 0;

    return dig2 === +cpf[10];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  new FormValidator(form);
});
