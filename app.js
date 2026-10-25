const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const slideTrack = document.querySelector(".slide-track");
const dots = document.querySelectorAll(".dot");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentSlide = 0;
let autoplayTimer;
const autoplayDelay = 4000;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

function showSlide() {
  slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, index) => {
    const isActive = index === currentSlide;
    dot.classList.toggle("dot-active", isActive);
    if (isActive) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
}

function startAutoplay() {
  if (slides.length > 1 && !autoplayTimer) {
    autoplayTimer = window.setInterval(nextSlide, autoplayDelay);
  }
}

function stopAutoplay() {
  window.clearInterval(autoplayTimer);
  autoplayTimer = undefined;
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide();
  });
});

carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("mouseleave", startAutoplay);

showSlide();
startAutoplay();
