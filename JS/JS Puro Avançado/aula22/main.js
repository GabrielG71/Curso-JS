function Produto(nome, preco, estoqueInicial) {
  this.nome = nome;
  this.preco = preco;

  let _estoque = estoqueInicial;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return _estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("Erro: Estoque deve ser um número.");
        return;
      }
      _estoque = valor;
    },
  });
}

const p1 = new Produto("Ventilador", 13, 9);
console.log(p1.estoque);

p1.estoque = "oi";
console.log(p1.estoque);

p1.estoque = 20;
console.log(p1.estoque);
