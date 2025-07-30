const pessoa = new Object();

pessoa.nome = "Gabriel";
pessoa.idade = 18;
pessoa.estado = "SP";

pessoa.falar = function (n, i, e) {
  console.log(`Eu sou ${n}, tenho ${i} anos e moro no estado de ${e}.`);
};

pessoa.falar(pessoa.nome, pessoa.idade, pessoa.estado);

function produto(nome, preco, estoque) {
  (this.nome = nome),
    (this.preco = preco),
    Object.defineProperty(this, "estoque", {
      enumerable: true,
      writable: true,
      value: estoque,
      configurable: true,
    });
}

const p1 = new produto("Ventilador", 13, 9);

console.log(p1);
