// Exercício 1
// Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.
let a = 1;
let b = 2;
let c = 4;

if (a + b < c){
    console.log(`A soma de ${a} + ${b} é menor que ${c}`)
} else {
    console.log(`A soma de ${a} + ${b} é maior que ${c}`)
}

// Exercício 2
// Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.
let numero = parseInt(4)
if (numero % 2 === 0){
    console.log('O número é par')
} else {
    console.log('O número é impar')
}

// Exercício 3
// Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.
let booleanTrue = true;
let booleanFalse = true;

if (booleanTrue == true && booleanFalse == true){
    console.log('Ambos são verdadeiros')
} else {
    console.log('Ambos são falsos')
}

// Exercício 4
// Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.

// Exercício 5
// Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido.
let valor1 = prompt(parseInt('Digite o primeiro número aqui'))
let valor2 = prompt(parseInt('Digite o segundo número aqui'))

if (valor1 > valor2){
    alert(`O maior valor recebido é: ${valor1}`)
} else {
    alert(`O maior valor recebido é: ${valor2}`)
}