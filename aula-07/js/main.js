// null = não encontrou o elemento
// o valor do id deve ser exatamente igual ao html
// DOCUMENT OBJECT MODEL
let tituloH1 = document.getElementById("titulo");

function alterarTitulo() {
  // conteúdo de texto
  tituloH1.innerText = "Olá, Victor!";
  // Estilos do elemento
  tituloH1.style.backgroundColor = "yellow";
  tituloH1.style.fontFamily = "Arial";
  tituloH1.style.color = "red";
  tituloH1.style.padding = "10px 5px 10px 5px";
}

// Evento = acontecimento da página (usuário ou não)
// Listener = ouvinte de eventos
// Tudo dentro do JS!
let btnAlterar = document.getElementById("btn-alterar");
btnAlterar.addEventListener("click", alterarTitulo);

// ------- SEMAFORO --------
let imgSemaforo = document.getElementById("semaforo");
let btnVermelho = document.getElementById("btn-vermelho");
let btnAmarelo = document.getElementById("btn-amarelo");
let btnVerde = document.getElementById("btn-verde");

function trocarVerde() {
  imgSemaforo.src = "https://i.ibb.co/7JgQLQ6/bErMxyc.png";
}

function trocarAmarelo() {
  imgSemaforo.src = "https://i.ibb.co/CQLBHDT/web2Gcs.png";
}

function trocarVermelho() {
  imgSemaforo.src = "https://i.ibb.co/XXn3hr6/2uQgBxp.png";
}

btnVermelho.addEventListener("click", trocarVermelho);
btnAmarelo.addEventListener("click", trocarAmarelo);
btnVerde.addEventListener("click", trocarVerde);
