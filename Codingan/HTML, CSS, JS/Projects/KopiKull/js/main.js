// Toggle class aktif
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu di klik
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("aktif");
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#ham-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("aktif");
  }
});
