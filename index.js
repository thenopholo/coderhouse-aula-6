// Simulação Empréstimo Sem Juros

let captial = parseFloat(prompt('Qual o valor do empréstimo?'));
let meses = parseInt(prompt('Em quantos meses deseja pagar?'));

// let captial = 2.345;
// let meses = 11;

function cauculoEmprestimo(captial, meses) {
    let valorParcela = (captial / meses) * 1000;
    for (let i = 1; i <= meses; i++) {
        console.log("O valor da parcela do", i, "º mês é de R$", valorParcela.toFixed(2), "reais.");
    }
}

cauculoEmprestimo(captial, meses);