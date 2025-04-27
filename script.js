// script.js

// Mostrar botão de voltar ao topo
const topoButton = document.querySelector('.topo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topoButton.style.display = 'block';
  } else {
    topoButton.style.display = 'none';
  }
});

// Voltar ao topo ao clicar
topoButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
