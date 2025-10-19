document.addEventListener("DOMContentLoaded", function () {
  // Carrusel automático con indicadores
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");
  let current = 0;
  const total = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      indicators[i].classList.toggle("active", i === index);
    });
    current = index;
  }

  function nextSlide() {
    let next = (current + 1) % total;
    showSlide(next);
  }

  // Cambia de imagen cada 5 segundos
  let interval = setInterval(nextSlide, 5000);

  // Permite hacer clic en los círculos
  indicators.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      showSlide(index);
      interval = setInterval(nextSlide, 5000);
    });
  });
});
