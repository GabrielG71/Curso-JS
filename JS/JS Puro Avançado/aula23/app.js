// Básico de Class

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
  }
}

const p1 = new Pessoa("Gabriel", "Gonçalves");

p1.falar();

// Getters e Setters

class Carro {
  constructor(nome, velocidadeInicial, limiteVelocidade) {
    this._nome = nome;
    this._velocidade = velocidadeInicial;
    this._limiteVelocidade = limiteVelocidade;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    if (typeof novoNome === "string" && novoNome.length > 0) {
      this._nome = novoNome;
    } else {
      console.log("Nome inválido");
    }
  }

  get velocidade() {
    return this._velocidade;
  }

  set velocidade(valor) {
    if (valor < 0) {
      this._velocidade = 0;
    } else if (valor > this._limiteVelocidade) {
      this._velocidade = this._limiteVelocidade;
    } else {
      this._velocidade = valor;
    }
  }

  get limiteVelocidade() {
    return this._limiteVelocidade;
  }

  set limiteVelocidade(novoLimite) {
    if (novoLimite > 0) {
      this._limiteVelocidade = novoLimite;
    }
  }

  acelerar() {
    this.velocidade = this._velocidade + 1;
  }

  frear() {
    this.velocidade = this._velocidade - 1;
  }

  get status() {
    return `${this.nome} está a ${this.velocidade} km/h (limite: ${this.limiteVelocidade})`;
  }
}

const fusca = new Carro("Fusca", 3, 80);
for (let i = 0; i < 100; i++) fusca.acelerar();
console.log(fusca.status);

const corolla = new Carro("Corolla", 0, 120);
for (let i = 0; i < 130; i++) corolla.acelerar();
console.log(corolla.status);

corolla.frear();
console.log(corolla.status);
