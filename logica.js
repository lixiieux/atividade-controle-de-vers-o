function calcularIMC() {
    // Obter os valores de peso e altura dos inputs
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Verificar se os valores são válidos
    if (peso > 0 && altura > 0) {
        // Calcular o IMC
        let imc = peso / (altura * altura);

        // Exibir o IMC
        document.getElementById('imc').textContent = `Seu IMC é: ${imc.toFixed(2)}`;

        // Categorizar o IMC
        let categoria = "";
        if (imc < 18.5) {
            categoria = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            categoria = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidade";
        }

        // Exibir a categoria
        document.getElementById('categoria').textContent = `Categoria: ${categoria}`;
    } else {
        // Alerta se os valores inseridos forem inválidos
        alert("Por favor, insira valores válidos para peso e altura.");
    }
}
