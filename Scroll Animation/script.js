const boxex = document.querySelectorAll(".box");

window.addEventListener("scroll", checkPosition);

checkPosition();

function checkPosition() {
  const breakPoint = (window.innerHeight * 4) / 5;

  boxex.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);

    if (boxTop < breakPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
