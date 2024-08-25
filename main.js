import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  keyboard: {
    enabled: true,
  },
  fadeEffect: {
    crossFade: true,
  },
});


document.querySelector(".prepage").addEventListener("click", function (e) {
  e.preventDefault();
  var currentPage = swiper.activeIndex - 1;
  
  swiper.slideTo(currentPage, 0);
});
document.querySelector(".nextpage").addEventListener("click", function (e) {
  e.preventDefault();
  var currentPage = swiper.activeIndex + 1;

  swiper.slideTo(currentPage, 0);
});

// Select the node that will be observed for mutations
const targetNode = document.querySelector(".swiper-pagination");

// 初始化頁數
var page = document.querySelector(".page");
      page.innerHTML = targetNode.innerHTML;

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true};

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      var page = document.querySelector(".page");
      page.innerHTML = targetNode.innerHTML;
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

/**
 * 熱門文章的swiper
 */
var swiper = new Swiper(".mobileSwiper", {
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
    }
  }
});