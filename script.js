var peso = parseFloat(prompt("Digite seu peso:"));
var altura = parseFloat(prompt("Digite sua altura:"));

var imc;

function cauculoImc(peso, altura) {
    imc = peso / altura ** 2;
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso");
    }
    return imc;
}

console.log(cauculoImc(peso,altura));
