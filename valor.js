const prompt = require('prompt-sync')();

// Entrada
let valor = parseFloat(prompt('Digite o valor da compra: R$ '));

let desconto = 0;
let valorFinal;

// Cálculo do desconto
if (valor > 500) {
    desconto = valor * 0.15;
}
else if (valor > 200) {
    desconto = valor * 0.10;
}

valorFinal = valor - desconto;

// Saída
console.log(`Valor da compra: R$ ${valor.toFixed(2)}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);