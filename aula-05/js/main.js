// Aula 28.12
// while, do-while, for

// Estruturas de repetição = loops = laços
//  - valor inicial (número)
//  - condição de parada (booleano)
//  - atualização do valor (incremento, decremento)

// while = enquanto
let numero = 1; // valor inicial

while (numero <= 5) {
  console.log(numero);
  numero++; // atualização
}

// do-while
console.log("--------");
let numero2 = 6;

do {
  // irá executar ao menos uma vez
  console.log(numero2);
  numero2++;
} while (numero2 < 5);

// for
// ir do 1 até 5
console.log("--------");
// valor inicial; condição; atualização

for (let cont = 1; cont <= 5; cont++) {
  console.log(`Número: ${cont}`);
}

// Array / Lista / Vetor
// Armazena múltiplos valores

let clientes = ["pedro", "adriano", "victor", "josé", "gabriel"];
// pedro(0), adriano(1), victor(2), josé(3)
let notas = [6.5, 7.8, 9.5];
// 6.5 (0), 7.8(1), 9.5(2)
let salada = ["hello", 1, true]; // diferentes tipos

// Acessar elementos (índice/index)
// ÍNDICE COMEÇA COM 0
console.log("-------");
console.log(clientes[2]);
console.log(clientes[4]);
console.log(clientes[1000]); // acima do tamanho do array
console.log(`Qt. Clientes: ${clientes.length}`);
console.log(clientes[3]);
clientes[3] = "josé almir";
console.log(clientes[3]);

// Adicionar e remover elementos
console.log("------")
let figuras = ["coração", "estrela", "joinha"];
console.log(figuras);
// pop = remove o último elemento
figuras.pop();
console.log(figuras);
figuras.pop();
console.log(figuras);
// push = inserir no final
let nomes = []; // length: 0
console.log(nomes.length);
nomes.push("carlos");
nomes.push("josé");
nomes.push("andré");
console.log(nomes);

// Repetição + Arrays
console.clear(); // limpa as mensagens anteriores

// Percorrer um array
let familia = ["joão", "carlos", "victor", "maria"];

for(let i = 0; i < familia.length; i++) {
    console.log(familia[i]);
}

// Adicionar o sobrenome "Arruda" a cada membro
for(let i = 0; i < familia.length; i++) {
    familia[i] += " arruda";
}

console.log(familia);

// Strings
console.clear();
let nome = "BATATA";
// B(0) A(1) T(2) A(3) T(4) A(5) 
console.log(nome.length); // quantos caracteres
console.log(nome[4]); // caractere no indice 4
let nomeMinusculo = nome.toLowerCase(); // minusculo
console.log(nomeMinusculo);

for(let i = 0; i < familia.length; i++) {
    // maiusculo
    familia[i] = familia[i].toUpperCase();
}

console.log(familia);
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}