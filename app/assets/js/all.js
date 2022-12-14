$(function () {
  console.log('Hello Bootstrap5');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,//套用在coverflow沒有用
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    //會造成手機版畫面slide重疊
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },




  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


$('.artwork .row').imagesLoaded().progress(function () {
  $('.artwork .row').masonry(); // 渲染整體畫面
});


// $('.masonry .row').imagesLoaded().progress(function () {
//   $('.masonry .row').masonry(); // 渲染整體畫面
// });