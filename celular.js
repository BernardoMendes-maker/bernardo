const prompt = require('prompt-sync')();

// Entrada
let plano = prompt('Digite o plano (Premium, Gold ou Silver): ');

// Verificação
if (plano == 'Premium') {
    console.log('Benefícios: Internet ilimitada, ligações ilimitadas e streaming grátis.');
}
else if (plano == 'Gold') {
    console.log('Benefícios: 50GB de internet e ligações ilimitadas.');
}
else if (plano == 'Silver') {
    console.log('Benefícios: 20GB de internet e ligações ilimitadas.');
}
else {
    console.log('Plano inválido.');
}