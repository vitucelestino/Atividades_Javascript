// Exercício 1
// Desenvolva uma função que mostre no console a frase "Hello World!".
function helloWorld (){
    return `Hello World!`
}
console.log(helloWorld())

// Exercício 2
// Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
// Requisitos:
// 100 de Entregas
// 100 de Entrevistas Técnicas
// 100 de Presença
// Se os requisitos forem atingidos, retorne "Possível monitor(a)." Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."

function monitorKenzie (entregas, entrevistas, presenca){
    if (entregas == 100 && entrevistas == 100 && presenca == 100){
        return `Possível monitor(a).`
    } else {
        return `Selecione outro(a) aluno(a).`
    }
}
console.log(monitorKenzie(100, 100, 100))

// Exercício 3
// Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.
function qualMaior (valor1, valor2, valor3){
    if (valor1 > valor2 && valor1 > valor3){
        return `O ${valor1} é o maior`
    } else if (valor2 > valor1 && valor2 > valor3){
        return `O ${valor2} é o maior`
    } else {
        return `O ${valor3} é o maior`
    }
}
console.log(qualMaior(20, 10, 5))

// Exercício 4
// Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".
// Declare as seguintes variáveis dentro da função:
// nome
// sobrenome
// idade
function nomeSobrenome (){
    let nome = 'Victor'
    let sobrenome = 'Celestino'
    let idade = 25
    return `"Meu nome é ${nome} ${sobrenome}, e tenho ${idade} anos."`
}
console.log(nomeSobrenome())