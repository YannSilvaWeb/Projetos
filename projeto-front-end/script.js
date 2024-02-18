// Função para atualizar a data
function atualizarData() {
  // Pega o elemento que contém a data
  const dataElement = document.querySelector('.data-ano');

  // Se o elemento for encontrado
  if (dataElement) {
    // Pega a data atual
    const dataAtual = new Date();

    // Extrai o ano da data atual
    const anoAtual = dataAtual.getFullYear();

    // Atualiza o conteúdo do elemento com o ano atual
    dataElement.textContent = anoAtual;
  }
}

// Chama a função para atualizar a data
atualizarData();


/////////////////////////////////////////////////

// Função para adicionar estilo ao header
function adicionarEstiloHeader() {
  // Pega o elemento header
  const headerElement = document.querySelector('header');

  // Se o header for encontrado
  if (headerElement) {
    // Verifica se o scroll vertical da página é maior que 0
    if (window.scrollY > 0) {
      // Adiciona a classe "scrolled" ao header
      headerElement.classList.add('scrolled');
    } else {
      // Remove a classe "scrolled" do header
      headerElement.classList.remove('scrolled');
    }
  }
}

// Adiciona um evento de scroll à janela
window.addEventListener('scroll', adicionarEstiloHeader);


/////////////////////////////////////////////////


// Idenfiticar o clique no Menu ( Scroll Interno )
const menuItems = document.querySelectorAll('.menu a');

// Vericicar o item que foi clicado e fazer referência com alvo
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 150,
  });  
  
}