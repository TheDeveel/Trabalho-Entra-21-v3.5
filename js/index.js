// Função para verificar a idade
function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = document.getElementById("resultado");

    if (idade >= 18) {
        resultado.textContent = "Você é maior de idade.";
    } else {
        resultado.textContent = "Você é menor de idade.";
    }
}

// Função para calcular a média
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const frequencia = parseFloat(document.getElementById("frequencia").value);
    const resultado = document.getElementById("resultado");

    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 6 && frequencia >= 75) {
        resultado.textContent = "Aprovado";
    } else {
        resultado.textContent = "Reprovado";
    }
}

// Função para calcular o IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    const imc = peso / (altura * altura);

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`;
}

// Função para calcular o aumento de salário
function calcularAumento() {
    const cargo = document.getElementById("cargo").value;
    const salario = parseFloat(document.getElementById("salario").value);
    const resultado = document.getElementById("resultado");

    let aumento = 0;

    switch (cargo.toLowerCase()) {
        case "gerente":
            aumento = salario * 0.05;
            break;
        case "supervisor":
            aumento = salario * 0.08;
            break;
        case "operador":
            aumento = salario * 0.09;
            break;
        default:
            aumento = salario * 0.10;
    }

    const novoSalario = salario + aumento;

    resultado.textContent = `Salário atual: R$ ${salario.toFixed(2)}\nAumento: R$ ${aumento.toFixed(2)}\nNovo salário: R$ ${novoSalario.toFixed(2)}`;
}
