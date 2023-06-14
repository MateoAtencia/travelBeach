// --Menu responsive--

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header__barra .navBar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 50) {
    document.querySelector(".header__barra").classList.add("active");
  } else {
    document.querySelector(".header__barra").classList.remove("active");
  }
};
// --end menu responsive--

// Evento de items menu
$(document).ready(function () {
  $(window).on("scroll load", function () {
    $("section, main").each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");

      if (top >= offset && top < offset + height) {
        $(".navBar a").removeClass("active");
        $(".navBar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });
});
