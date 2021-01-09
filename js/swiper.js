if (window.matchMedia("(min-width:768px)").matches) {
    var swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true
      }
    });
  } else {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true
      }
    });
  }