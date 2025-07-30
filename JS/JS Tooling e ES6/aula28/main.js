class Cachorro {
  constructor(raca, idade) {
    this.raca = raca;
    this.idade = idade;
  }

  falar() {
    console.log(
      `Esse cachorro é da raça ${this.raca} e tem ${this.idade} anos.`
    );
  }
}

const Jorginho = new Cachorro("Dalmata", 12);

Jorginho.falar();
