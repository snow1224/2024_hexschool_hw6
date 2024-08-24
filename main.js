import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 24,
        }
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    scrollbar: {
        el: ".swiper-scrollbar"
      },
      keyboard: {
        enabled: true,
      },
      fadeEffect: {
        crossFade: true
      }
  });

  document
    .querySelector(".prepage")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var currentPage = swiper.activeIndex;
      swiper.slideTo(currentPage-1, 0);
      
    });
  document
    .querySelector(".nextpage")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var currentPage = swiper.activeIndex;
      swiper.slideTo(currentPage+1, 0);
    });
  
