const navbar = document.querySelector(".navbar");
const navButton = document.querySelector(".navbar-menu-button");

window.addEventListener("scroll", function() {
  if (window.scrollY <= 20) {
    navbar.classList.remove("hidden");
    navButton.classList.add("hidden");
  } else {
    navbar.classList.add("hidden");
    navButton.classList.remove("hidden");
  }
});


navButton.addEventListener("click", function() {
    navbar.classList.toggle("hidden");
    navButton.classList.toggle("hidden");
    navButton.classList.add("paused");
  });