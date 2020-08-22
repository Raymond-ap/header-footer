const buergerIcon = document.querySelector(".burgerIcon");
const links = document.querySelector(".links-wrapper");

// GET CURRENT YEAR
const currentYear = new Date().getFullYear();
document.querySelector(".year").innerHTML = currentYear;

// EVENT LISTENER
buergerIcon.addEventListener("click", toggleNav);

function toggleNav() {
  links.classList.toggle("show-links");
  buergerIcon.classList.toggle("toggle");
}
