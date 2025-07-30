const nome = window.prompt("Qual seu nome?");
let letras = (nome.trim()).length
let segunda = nome.charAt(1);
let t_ultimas = "";

if(nome.length > 3){
    t_ultimas = nome.slice(-3);
}else {
    t_ultimas = nome;
}

let palavras = nome.split(" ");
let maius = nome.toUpperCase();
let minus = nome.toLowerCase();

document.getElementById("nome").innerText = `Seu nome é: ${nome}`;
document.getElementById("letras").innerText = `Seu nome tem ${letras} letras.`;
document.getElementById("segunda").innerText = `A segunda letra do seu nome é: ${segunda}`;
document.getElementById("t-ultimas").innerText = `As ultimas três letras do seu nome são: ${t_ultimas}`;
document.getElementById("palavras").innerText = `As palavras do seu nome são: ${palavras}`;
document.getElementById("maius").innerText = `Seu nome com letras maisculas: ${maius}`;
document.getElementById("minus").innerText = `Seu nome com letras maisculas: ${minus}`;