const slides = document.querySelectorAll(".slider");
const body = document.body;
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let activeSlide = 0;

changeBackground();

leftArrow.addEventListener("click", () => {
  removeActiveClass();
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  slides[activeSlide].classList.add("active");
  changeBackground();
});

rightArrow.addEventListener("click", () => {
  removeActiveClass();
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
  changeBackground();
});

function removeActiveClass() {
  document
    .querySelectorAll(".slider")
    .forEach((slide) => slide.classList.remove("active"));
}
function changeBackground() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
