// Operadores ++incremento /--decremento

let numero = 10;
// numero = numero + 1; // valor atual + 1
numero++; // soma +1 ao valor atual
console.log(numero);
numero--; // numero = numero - 1;
numero--; // Muito usado em loops
console.log(numero);

// Operadores de atribuição
// = -> atribui
// += -> reatribui somando um valor
// -= -> reatribui subtraindo
let anoAtual = 2023;
// anoAtual = anoAtual - 15;
anoAtual -= 15; // altera anoAtual subtraindo 15
console.log(anoAtual);
anoAtual += 40; // altera anoAtual somando 40
console.log(anoAtual);

// Operadores Relacionais (booleanos)
// > - maior que
// < - menor que
// >= - maior ou igual
// <= - menor ou igual
// != - diferente
// == - igual
let n1 = 12;
let n2 = 4;

console.log(n1 > n2); // true
console.log(n1 < n2); // false
console.log(n1 >= n2); // true (12 maior que 4 ou 12 igual a 4?)
console.log(n1 <= n2); // false
console.log(n1 != n2); // true
console.log(n1 == n2); // false

console.log("Maria" != "João"); // false
console.log("João" == "João"); // true

// == -> não leva em conta tipos diferentes
// === -> estritamente igual (mesmo tipo e mesmo valor)
console.log("4" === 4);
console.log("22" !== 22);

let meuNome = "Almir";
console.log(meuNome.length); // comprimento da string

// Sintaxe = determina a estrutura e como
// formular o código

// Operadores lógicos
// && - E - AND
// || - OU - OR 
// ! - NEGAÇÃO - NOT

console.log("E", true && true); // true
console.log("E", true && false); // false
console.log("OU", true || false); // true
console.log("OU", false || false); // false
console.log("NOT", !true); // false
console.log("NOT", !false); // true

// Exemplo de operadores lógicos
let nota1 = 7.5;
let nota2 = 8.5;
let faltas = 30;

// O aluno será aprovado, se:
// média >= 7 E não tiver faltas em excesso (limite 30)
let media = (nota1 + nota2) / 2;
console.log("Média ", media);
console.log("Faltas ", faltas);

let passou = media >= 7 && faltas <= 30;
console.log("Passou de ano?", passou);

// Estrutura condicional => if/else
// Exatamente igual ao se/senão

// Concatenação (+) = montar mensagens com variáveis
// O aluno tem X de nota e Y de faltas
console.log("----------------")
console.log("Victor" + " seja bem-vindo!");

let idade = 32;
console.log("Victor tem " + idade + " anos!");

console.log("O aluno tem " + media + " de nota e " + faltas + " de faltas");

// Template string
console.log(`O aluno tem ${media} de nota e ${faltas} de ausências`);
console.log(`Victor tem ${idade} anos!`);

// Leitura de dados
// prompt = abre um popup com campo de texto
let seuNome = prompt("Digite seu nome");
alert("Bem-vindo(a) " + seuNome);

// Lê o prompt em string e converte para number
let suaIdade = Number(prompt("Digite sua idade"));
console.log(suaIdade + 30); // adição entre números

console.log("Seu nome é " + seuNome + " e sua idade é " + suaIdade);