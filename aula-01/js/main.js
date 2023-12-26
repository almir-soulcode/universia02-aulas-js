console.log("Arquivo Main!");

// Comentário de linha
/*  Comentário
    de
    múltiplas
    linhas
*/

// Aspas duplas => texto
console.log(50 + 9);
console.log(70 / 3);

// Variável => containers que guardam valores
// Tipos de dados => dinamicos

// Declarar variável (let)
let idade;
idade = 19; // Operador de atribuição

// Declaração + Atribuição
let proximoAno = 2024;

// camelCase => salarioFuncionario
// snake_case => salario_funcionario
console.log(idade);
console.log(proximoAno);
proximoAno = 2025; // reatribuição / modificar / alterar
console.log(proximoAno);

// tipo number => inteiros e decimais
let preco = 7.5;

// tipo string => texto
let primeiroNome = "João";
let sobrenome = "Pereira";
sobrenome = "Gomes";

console.log(sobrenome);

// tipo booleano => verdadeiro(true)/falso(false)
let booleano = true;
booleano = false;

// constantes = nunca mudam de valor
const pi = 3.14;
// pi = 9.5 // não funciona

// O que terá dentro desta variável?
// undefined = indefinido (valor ausente)
let variavel;
console.log(variavel);

// Objeto (chave, valor)
let pessoa = { nome: "João", idade: 29, email: "joao@email.com", empregado: true };
console.log(pessoa.nome);

// Array (lista)
let jogadores = ["Pelé", "Ronaldo", "Romário", "Messi", "CR7"];
let notas = [10.0, 6.5, 4.0, 8.0, 7.9];
let sopa = [1, "hello", true]; // posso misturar os tipos

// Operadores aritméticos
// + soma
// - subtração
// * multiplicação
// / divisão
// ** potência
// % resto da divisão

let n1 = 12;
let n2 = 4;

console.log("Soma: ", n1 + n2);
console.log("Sub: ", n1 - n2);
console.log("Mult: ", n1 * n2);
console.log("Div: ", n1 / n2);
console.log("Pot: ", 2 ** 6);
console.log("Resto: ", n1 % n2); // 0

let precoUnitario = 17.5;
let qtd = 6;
let total = precoUnitario * qtd - 30;

console.log("Total a pagar: ", total);
