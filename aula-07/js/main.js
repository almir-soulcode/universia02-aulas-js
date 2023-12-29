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