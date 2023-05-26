window.addEventListener("DOMContentLoaded", function() {
  const slidesContainer = document.querySelector(".slides-container");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let slideWidth = slides[0].offsetWidth;
  let currentIndex = 0;
  let intervalId;

  function goToSlide(index) {
    slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
  }

  function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    goToSlide(currentIndex);
  }

  function startCarousel() {
    intervalId = setInterval(goToNextSlide, 3000); // Cambia de slide cada 3 segundos (ajusta el valor según tus necesidades)
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  prevBtn.addEventListener("click", function() {
    stopCarousel();
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    goToSlide(currentIndex);
    startCarousel();
  });

  nextBtn.addEventListener("click", function() {
    stopCarousel();
    goToNextSlide();
    startCarousel();
  });

  // Ajusta el ancho de los slides al tamaño de la ventana
  function resizeSlides() {
    slideWidth = slides[0].offsetWidth;
    goToSlide(currentIndex);
  }

  window.addEventListener("resize", resizeSlides);

  // Inicia el carrusel automático al cargar la página
  startCarousel();
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


