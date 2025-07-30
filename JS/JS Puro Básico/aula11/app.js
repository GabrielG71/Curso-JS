function create(a, b, c, d){
    return { a, b, c, d}
}

document.addEventListener("DOMContentLoaded", () => {
    const pessoas = [];
    
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let nome = document.getElementById("nome").value;
        let sobrenome = document.getElementById("sobrenome").value;
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;

        const pessoa = create(nome, sobrenome, peso, altura);

        pessoas.push(pessoa);

        const pessoaDiv = document.createElement("div");
        pessoaDiv.innerHTML = `
            Nome: ${pessoa.a} <br>
            Sobrenome: ${pessoa.b} <br>
            Peso: ${pessoa.c} <br>
            Altura: ${pessoa.d} <br>
            <hr>
        `;

        div.appendChild(pessoaDiv);


        console.log(pessoas);

        form.reset();
    })

})