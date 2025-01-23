
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Ajoute un effet automatique de défilement des slides (optionnel)
setInterval(() => {
    nextSlide();
}, 5000); // Change toutes les 5 secondes



  document.addEventListener("DOMContentLoaded", function() {
    const ratingCircle = document.querySelector(".rating-circle");
    const ratingInner = document.querySelector(".rating-circle__inner");
    const ratingValue = parseFloat(ratingInner.textContent);

    let ratingClass = "";
    if (ratingValue >= 9) {
      ratingClass = "rating-10";
    } else if (ratingValue >= 8) {
      ratingClass = "rating-8";
    } else if (ratingValue >= 7) {
      ratingClass = "rating-7";
    } else if (ratingValue >= 6) {
      ratingClass = "rating-6";
    } else if (ratingValue >= 5) {
      ratingClass = "rating-5";
    } else if (ratingValue >= 4) {
      ratingClass = "rating-4";
    } else if (ratingValue >= 3) {
      ratingClass = "rating-3";
    } else if (ratingValue >= 2) {
      ratingClass = "rating-2";
    } else if (ratingValue >= 1) {
      ratingClass = "rating-1";
    } else {
      ratingClass = "rating-0";
    }

    ratingCircle.classList.add(ratingClass);
    ratingInner.classList.add(ratingClass);
  });


  // ...existing code...
// ...existing code...