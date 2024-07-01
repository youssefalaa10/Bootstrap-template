window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  if (window.scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

function mobileNavToogle() {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavToggleBtn.classList.toggle("bi-list");
  mobileNavToggleBtn.classList.toggle("bi-x");
}
mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll("#navmenu a").forEach((navmenu) => {
  navmenu.addEventListener("click", () => {
    if (document.querySelector(".mobile-nav-active")) {
      mobileNavToogle();
    }
  });
});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
  navmenu.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentNode.classList.toggle("active");
    this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
    e.stopImmediatePropagation();
  });
});

/**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", aosInit);

/**
 * Init swiper sliders
 */
function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
    );

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

window.addEventListener("load", initSwiper);
