// script.js - Funcionalidades da landing page Chefito

document.addEventListener('DOMContentLoaded', function () {
  // Scroll suave para âncoras internas
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  linksInternos.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const alvo = document.querySelector(this.getAttribute('href'));
      if (alvo) {
        alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Animação simples ao entrar na viewport
  const elementosAnimados = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
      }
    });
  }, { threshold: 0.1 });
  elementosAnimados.forEach(secao => observer.observe(secao));

  // Carrossel genérico com autoplay e navegação
  function iniciarCarrossel(id) {
    const track = document.getElementById(id);
    const slides = track.querySelectorAll('.carousel-slide');
    let index = 0;

    const atualizar = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    const next = () => {
      index = (index + 1) % slides.length;
      atualizar();
    };

    const prev = () => {
      index = (index - 1 + slides.length) % slides.length;
      atualizar();
    };

    document.querySelectorAll(`.next[data-target="${id}"]`).forEach(btn => btn.addEventListener('click', next));
    document.querySelectorAll(`.prev[data-target="${id}"]`).forEach(btn => btn.addEventListener('click', prev));

    setInterval(next, 5000); // autoplay a cada 5 segundos
  }

  iniciarCarrossel('revendedor-carousel');
  iniciarCarrossel('blusas-carousel');
});

// Carrossel paquistanesas

 document.addEventListener('DOMContentLoaded', function () {
    function iniciarCarrossel(id) {
      const track = document.getElementById(id);
      const slides = track.querySelectorAll('.carousel-slide');
      let index = 0;

      const atualizar = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
      };

      const next = () => {
        index = (index + 1) % slides.length;
        atualizar();
      };

      const prev = () => {
        index = (index - 1 + slides.length) % slides.length;
        atualizar();
      };

      document.querySelectorAll(`.next[data-target="${id}"]`).forEach(btn => btn.addEventListener('click', next));
      document.querySelectorAll(`.prev[data-target="${id}"]`).forEach(btn => btn.addEventListener('click', prev));

      setInterval(next, 5000); // autoplay a cada 5 segundos
    }

    iniciarCarrossel('paquistanesas-carousel');
  });
// feedbacks 
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("feedback-carousel");
  const track = carousel.querySelector(".feedback-track");

  let isPaused = false;

  carousel.addEventListener("click", function () {
    isPaused = !isPaused;
    track.style.animationPlayState = isPaused ? "paused" : "running";
  });
});
