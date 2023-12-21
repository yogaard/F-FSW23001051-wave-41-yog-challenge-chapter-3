const navbarNav = document.querySelector(".navbar-nav");
// ketika menu klik
document.querySelector("#hamburgermenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click dimanapun menu hilang
const hamburger = document.querySelector("#hamburgermenu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
