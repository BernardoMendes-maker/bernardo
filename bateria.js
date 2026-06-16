// Importação da biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Entrada
let bateria = parseFloat(prompt('Digite sua bateria'));

//Verificação

if (bateria >= 75 && bateria <= 100) {
    console.log('Sua saúde do celular está ótima');

}
   
if(bateria >=50 && bateria <= 74) {
    console.log('Sua saúde do celular está boa')

}

if(bateria >=25 && bateria <=49) {
    console.log('Sua saúde do celular está ok')
}

if(bateria >=15 && bateria <= 24) {
    console.log('Sua saúde do celular está ruim')
}

if(bateria >=5 && bateria <= 14) {
    console.log('Sua saúde do celular está pessima')
}