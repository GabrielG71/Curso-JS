const num = Number(window.prompt("Digite um número:"));
let rq = Math.sqrt(num);
let int = Number.isInteger(num);
let nan = Number.isNaN(num);
let cima = Math.floor(num);
let baixo = Math.ceil(num);
let dois = num.toFixed(2);

document.getElementById("num").innerText = `Seu número é: ${num}`;
document.getElementById("rq").innerText = `Raiz quadrada: ${rq}`;
document.getElementById("int").innerText = `${num} é inteiro: ${int}`;
document.getElementById("nan").innerText = `É NaN: ${nan}`;
document.getElementById("cima").innerText = `Arredondando para cima: ${cima}`;
document.getElementById("baixo").innerText = `Arredondando para baixo: ${baixo}`;
document.getElementById("dois").innerText = `Com duas casas decimais: ${dois}`;