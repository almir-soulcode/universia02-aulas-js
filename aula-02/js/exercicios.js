// Exercício 1) Crie um trecho de código que calcula a média de 3
// notas. Crie três variáveis para representar as três notas e
// outra para guardar o resultado do cálculo;
console.log("------ Exercício 1 ------");

let nota1 = 8.6;
let nota2 = 9.5;
let nota3 = 10.0;

let media = (nota1 + nota2 + nota3) / 3;

console.log(`A média das três notas é ${media.toFixed(2)}`);

console.log("------ Exercício 2 ------");

// Exercício 2) Crie um trecho de código que calcula o IMC de uma pessoa. Crie uma
// variável para armazenar o peso em kg e uma para armazenar a altura em metros. O
// cálculo do IMC é: PESO / ALTURA ^ 2;

let peso = Number(prompt("Digite seu peso"));
let altura = Number(prompt("Digite sua altura"));
let imc = peso / altura ** 2;
alert(`Seu IMC é: ${imc.toFixed(2)}`);

// Exercício 3) Crie um trecho de código que lê a idade de uma pessoa e mostra o ano em
// que ela nasceu. O cálculo é ANO ATUAL - IDADE inserida;
console.log("------ Exercício 3 ------");

let idade = Number(prompt("Digite sua idade"));
let anoNascimento = 2023 - idade;

console.log(`Seu ano de nascimento é ${anoNascimento}`);

// Exercício 4) Crie um trecho de código que me diga quanto cobrar para vender um
// notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?
console.log("------ Exercício 4 ------");

const precoNotebook = 3000;
let desconto = precoNotebook * (25 / 100);
let precoVenda = precoNotebook - desconto;

console.log(
  `O preço de R$ ${precoNotebook} aplicado a um desconto de 25%: ${precoVenda}`
);

// Exercício 5) Escreva um programa que leia um valor em metros e o exiba no console //
// convertido em milímetros;

let valorMetros = Number(prompt("Digite o valor em metros"));
let valorMm = valorMetros * 1000;

console.log(`O valor de ${valorMetros} M em milímetros é ${valorMm}`);

// Exercício 6) Escreva um programa que leia um valor de uma temperatura em CELSIUS e 
// converte para FAHRENHEIT. O cálculo é: CELSIUS * 1,8 + 32;

let tempC = Number(prompt("Digite a temperatura em Celsius"));
let tempF = tempC * 1.8 + 32;

console.log(`A temperatura convertida é ${tempF.toFixed(2)}`);