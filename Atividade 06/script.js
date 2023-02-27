// Exercício 1
// Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.
function checkNumber (number){
    if (number > 0){
        return `P`
    } else {
        return `N`
    }
}
let result = checkNumber(0)
console.log(result)

// Exercício 2
// Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.
function countNumber (number){
    return number.toString().length;
}
console.log(countNumber(1997))

// Exercício 3
// Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não maior que o segundo."
function addNumbers (valor1, valor2){
    if (valor1 > valor2){
        return valor1 + valor2
    } else {
        return `O primeiro número não é maior que o segundo.`
    }
}
console.log(addNumbers(10, 6))

// Exercício 4
// Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.
function parameters (palavra, letra){
    if (palavra[0] === letra){
        return `true`
    } else {
        return `false`
    }
}
console.log(parameters("Maria", "M"))

// Exercício 5
// Desenvolva uma função com dois parâmetros para saber se o horário corresponde com o funcionamento do /pergunta. O primeiro parâmetro deve-se chamar inicio, e o segundo deve-se chamar termino. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 18, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."
function barraPergunta (inicio, termino){
    if (inicio >= 11 && termino <= 18){
        return `"O /pergunta está em horário de funcionamento.`
    } else {
        return `"O /pergunta não está em horário de funcionamento.`
    }
}
console.log(barraPergunta(11, 18))