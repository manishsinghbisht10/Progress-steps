const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("nexy");
const circle = document.querySelectorAll(".circle");

let active = 1;

next.addEventListener("click", function () {
  active++;
  if (active > circle.length) {
    active = circle.length;
  }
  console.log(active);
  update();
});

prev.addEventListener("click", function () {
  active--;
  if (active < circle.length) {
    active = 1;
  }
  console.log(active);
  update();
});

function update() {
  circle.forEach((circle, idx) => {
    if (idx < active) {
      circle.classList.add("active");
    } else {
      circle.classList.add("active");
    }
  });
}
