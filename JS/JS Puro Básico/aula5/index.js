// Calculadora de fórmula de Bhaskára

var a = 1;
var b = -2;
var c = -2;

let delta = (b ** 2) - 4 * a * c;
let x1 = (-b + (delta ** 0.5)) / (2 * a);
let x2 = (-b - (delta ** 0.5)) / (2 * a);

console.log("X1 =", x1);
console.log("X2 =", x2);