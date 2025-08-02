class Cachorro {
  constructor(raca, cor, idade) {
    this.raca = raca;
    this.cor = cor;
    this.idade = idade;
  }

  latir() {
    console.log("auauauauauau");
  }

  cachorres() {
    console.log(
      `É um cachorro da raça ${this.raca}, que tem a cor: ${this.cor} e possui ${this.idade} anos.`
    );
  }
}

module.exports = Cachorro;
