class CpfValida {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, 9);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const cpfGerado = cpfParcial + digito1 + digito2;

    return cpfGerado === this.cpfLimpo;
  }

  criaDigito(parcial) {
    let soma = 0;
    let regressivo = parcial.length + 1;

    for (let char of parcial) {
      soma += regressivo * Number(char);
      regressivo--;
    }

    const resto = soma % 11;
    return resto < 2 ? "0" : String(11 - resto);
  }

  isSequencia() {
    return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
  }
}

const p1 = new CpfValida("500.660.168-00");
console.log(p1.valida());

const p2 = new CpfValida("111.111.111-11");
console.log(p2.valida());

const p3 = new CpfValida("123.456.789-00");
console.log(p3.valida());

const p4 = new CpfValida("529.982.247-25");
console.log(p4.valida());
