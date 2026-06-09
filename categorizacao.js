const prompt = require('prompt-sync')();

// Entrada
let idade = parseInt(prompt('Digite a idade do atleta: '));

// Classificação
if (idade <= 7) {
    console.log('Categoria: Infantil A');
}
else if (idade <= 10) {
    console.log('Categoria: Infantil B');
}
else if (idade <= 13) {
    console.log('Categoria: Juvenil A');
}
else if (idade <= 17) {
    console.log('Categoria: Juvenil B');
}
else {
    console.log('Categoria: Adulto');
}