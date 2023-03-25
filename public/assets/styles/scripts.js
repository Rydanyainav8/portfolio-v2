//CAROUSEL
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    dots: true,
    autoplayTimeOut: 5000,
    autoplayHoverPause: true,
    autoplay: true,
    items: 3,
  });
});

//MENU-HAMBURGER
const menuHamburger = document.querySelector(".fa-bars-staggered");
const linkchild = document.querySelector(".linkchild");

menuHamburger.addEventListener("click", () => {
  linkchild.classList.toggle("mobile-menu");
});
$('.menu-btn').click(function () {
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});
//DARK-TOGGLE
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  //changement de theme
  document.body.classList.toggle("dark");
});

//SCROLLREVEAL
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 400,
});

ScrollReveal().reveal(
  ".titlePar, .titleParComp, .titleParProj, .titleParCont",
  {
    delay: 500,
    origin: "left",
  }
);

ScrollReveal().reveal(".image", {
  delay: 500,
  origin: "top",
});

ScrollReveal().reveal(".descri", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".lorem", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".icons .row", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".icons .row", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".text .txt", {
  delay: 500,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".barsContainer .bars", {
  delay: 500,
  origin: "left",
  interval: 200,
});
