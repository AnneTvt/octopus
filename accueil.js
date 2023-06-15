const carouselCard = document.querySelector('.carousel-card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cardWidth = carouselCard.offsetWidth;

let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition += cardWidth;
  if (currentPosition > 0) {
    currentPosition = 0;
  }
  carouselCard.style.transform = `translateX(${currentPosition}px)`;
});

nextButton.addEventListener('click', () => {
  currentPosition -= cardWidth;
  const maxPosition = -(carouselCard.scrollWidth - carouselCard.offsetWidth);
  if (currentPosition < maxPosition) {
    currentPosition = maxPosition;
  }
  carouselCard.style.transform = `translateX(${currentPosition}px)`;
});