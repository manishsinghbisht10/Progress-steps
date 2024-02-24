const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
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
  if (active < 1) {
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
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";

  if (actives.length === 1) {
    prev.disabled = true;
  } else if (actives.length === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
