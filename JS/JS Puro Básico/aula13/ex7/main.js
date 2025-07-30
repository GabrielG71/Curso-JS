document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form_imc");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = parseFloat(
      document.getElementById("peso").value.replace(",", ".")
    );
    const altura = parseFloat(
      document.getElementById("altura").value.replace(",", ".")
    );
    const resultadoElement = document.getElementById("final");

    resultadoElement.className = "resultado-imc";

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultadoElement.innerHTML = "Altura ou Peso Inválidos";
      resultadoElement.classList.add("invalido");
      return;
    }

    const alturaMetros = altura > 3 ? altura / 100 : altura;

    const imc = peso / (alturaMetros * alturaMetros);
    const imcFormatado = imc.toFixed(2);

    let classificacao;
    let tipoClassificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      tipoClassificacao = "abaixo-peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
      tipoClassificacao = "normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
      tipoClassificacao = "sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade grau 1";
      tipoClassificacao = "obesidade-1";
    } else if (imc < 40) {
      classificacao = "Obesidade grau 2";
      tipoClassificacao = "obesidade-2";
    } else {
      classificacao = "Obesidade grau 3";
      tipoClassificacao = "obesidade-3";
    }

    resultadoElement.innerHTML = `
      <strong>Seu IMC: ${imcFormatado}</strong><br>
      Classificação: ${classificacao}
    `;
    resultadoElement.classList.add(tipoClassificacao);
  });
});
