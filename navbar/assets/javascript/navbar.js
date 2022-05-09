const burger = document.getElementById("burgerOpen");
const navbar = document.getElementById("nav-items");
const burger_closed = document.getElementById("burgerClose");

burger.addEventListener("click", openNavbar);
burger_closed.addEventListener("click", closedNavbar);

function openNavbar() {
  burger.style.display = "none";
  burger_closed.style.display = "block";
  navbar.style.display = "block";
}

function closedNavbar() {
  burger.style.display = "block";
  burger_closed.style.display = "none";
  navbar.style.display = "none";
}
