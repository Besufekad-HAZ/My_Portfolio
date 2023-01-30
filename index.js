// JS code goes here
const hamburger = document.querySelector(".hamburger");
const mob__nav = document.querySelector(".mob__nav__menu");
const nv__section = document.querySelector(".nv__section");
const hamburger2 = document.querySelector(".mob__nav__menu .hamburger2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mob__nav.classList.toggle("active");
  nv__section.classList.toggle("active");
});

document.querySelectorAll(".nv__item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger.style.display = "block";
    mob__nav.classList.toggle("active");
  })
);
