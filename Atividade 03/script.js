// Atividade - Javascript: Operadores Aritméticos
// Exercício 1
// Declare uma variável chamada num1 e atribua a ela o valor 5. Em seguida, declare uma variável chamada num2 e atribua a ela o valor 10. Adicione as duas variáveis e imprima o resultado no console.
let num1 = 5;
let num2 = 10;
console.log(num1 + num2)

// Exercício 2
// Declare uma variável chamada pi e atribua a ela o valor de 3.14. Em seguida, declare uma variável chamada raio e atribua a ela o valor 5. Calcule o comprimento da circunferência com base no raio e imprima o resultado no console. (dica: multiplique o raio pelo valor de pi e pelo numero dois)
let pi = 3.14;
let raio = 5;
let comprimento = 2 * pi * raio;
console.log(comprimento.toFixed(1))

// Exercício 3
// Declare uma variável chamada temperatura e atribua a ela o valor 30. Em seguida, converta a temperatura de Celsius para Fahrenheit e imprima o resultado no console. (dica: Multiplique a temperatura por nove, após isso divida esse valor por cinco e adicione trinta e dois para converter de Celsius para Fahrenheit)
let temperatura = 30;
let celsiusToFahrenheit = (30 * 9) / 5 + 32
console.log(celsiusToFahrenheit)

// Exercício 4
// Declare uma variável chamada nota1 e atribua a ela o valor 7. Em seguida, declare uma variável chamada nota2 e atribua a ela o valor 9. Calcule a média das duas notas e imprima o resultado no console.
let nota1 = 7;
let nota2 = 9;
let resultado = (nota1 + nota2) / 2
console.log(resultado)

// Exercício 5
// Declare uma variável chamada largura e atribua a ela o valor 10. Em seguida, declare uma variável chamada comprimento e atribua a ela o valor 20. Calcule a área da retângulo e imprima o resultado no console
let largura = 10;
let comprimento2 = 20;
let area = largura * comprimento2
console.log(area)

// Exercício 6
// Declare uma variável chamada salarioBruto e atribua a ela o valor 5000. Em seguida, calcule e imprima o salário líquido, considerando um desconto de 10% para impostos.
let salarioBruto = 5000;
let descontoPorcentagem = 10;
let descontoSalario = salarioBruto * (descontoPorcentagem / 100);
let salarioLiquido = salarioBruto - descontoSalario;
console.log(salarioLiquido)

// Exercício 7
// Declare uma variável chamada horasTrabalhadas e atribua a ela o valor 40. Em seguida, declare uma variável chamada valorHora e atribua a ela o valor 50. Calcule o salário bruto de uma pessoa e imprima o resultado no console.
let horasTrabalhadas = 40;
let valorHora = 50;
let salario = horasTrabalhadas * valorHora
console.log(salario)