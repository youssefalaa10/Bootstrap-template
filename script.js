document.querySelectorAll(".dropdown-submenu").forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    element.querySelector(".dropdown-menu").classList.add("show");
  });
  element.addEventListener("mouseleave", function () {
    element.querySelector(".dropdown-menu").classList.remove("show");
  });
});

var a = document.querySelectorAll(".nav-link");
a.forEach(function (element) {
  element.addEventListener("click", function () {
    a[0].classList.remove("active")
    a.classList.add("active");
  });
});
