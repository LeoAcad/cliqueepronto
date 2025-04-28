// Smooth scroll para o botão de voltar ao topo
document.addEventListener("DOMContentLoaded", function () {
  const topoBtn = document.querySelector(".topo");

  topoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
