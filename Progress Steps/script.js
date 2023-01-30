const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActiveCircles = 1;

next.addEventListener("click", () => {
  currentActiveCircles++;

  if (currentActiveCircles > circles.length) {
    currentActiveCircles = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActiveCircles--;

  if (currentActiveCircles < 1) {
    currentActiveCircles = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActiveCircles) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActiveCircles == 1) {
    prev.disabled = true;
  } else if (currentActiveCircles == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
