function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

const peso = 70; // Exemplo de peso em kg
const altura = 1.75; // Exemplo de altura em metros
console.log(`IMC: ${calcularIMC(peso, altura).toFixed(2)}`);
