// Exercício 1) Vá do 1 até o 99 e
// mostre apenas os valores ímpares;

// 1º forma
console.log("------ Exercício 1 ------");
for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

// 2º forma
for (let i = 1; i <= 99; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercício 2) Conte de 50 até 75;
console.log("------ Exercício 2 ------");

// 1º forma
for (let i = 50; i <= 75; i++) {
  console.log(i);
}

let cont = 50;

// 2º forma
while (cont <= 75) {
  console.log(cont);
  cont++;
}

// Exercício 3) Faça a tabuada do 5;
console.log("------ Exercício 3 ------");

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Exercício 4) Crie um array com 7
// números. Percorra e indique qual o
// maior número deles;
console.log("------ Exercício 4 ------");

let numeros = [10, -2, 0, 350, 701, 8, 99];

// vamos supor que o primeiro é o maior
let maior = numeros[0];

// percorremos do indíce 1 até o final
for(let i = 1; i < numeros.length; i++) {
    // se o número do array for maior que
    // nossa suposição
    if(numeros[i] > maior) {
        // o tal número é considerado o maior
        // temporariamente
        maior = numeros[i]; 
    }
}
// Até o final do loop teremos o maior
console.log(`O maior número do array é: ${maior}`);

// Exercício 5) Crie um array de
// frutas. Percorra e mostre o
// tamanho do nome de cada fruta;
console.log("------ Exercício 5 ------");

let frutas = ["Banana", "Maçã", "Uva", "Abacaxi"];

for(let i = 0; i < frutas.length; i++) {
    console.log(`${frutas[i]} tem ${frutas[i].length} caracteres`);
}

// Exercício 6) Leia do prompt 4
// números. Insira cada número
// digitado em um array e exiba a
// média desses 4 números digitados.
console.log("------ Exercício 6 ------");

let notas = [];

for(let i = 0; i < 4; i++) {
    const entradaNota = Number(prompt("Digite uma nota"));
    notas.push(entradaNota);
}

let agregado = 0;

for(let i = 0; i < notas.length; i++) {
    agregado += notas[i];
}

let media = agregado / notas.length;

console.log(`A média das notas é ${media.toFixed(2)}`)