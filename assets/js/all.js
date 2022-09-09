"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper('.swiper', (_Swiper = {
  // Optional parameters
  slidesPerView: 3,
  //套用在coverflow沒有用
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true
}, _defineProperty(_Swiper, "slidesPerView", "auto"), _defineProperty(_Swiper, "coverflowEffect", {
  rotate: 0,
  stretch: 0,
  //會造成手機版畫面slide重疊
  depth: 500,
  modifier: 1,
  slideShadows: false
}), _defineProperty(_Swiper, "pagination", {
  el: '.swiper-pagination'
}), _defineProperty(_Swiper, "navigation", {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
}), _defineProperty(_Swiper, "scrollbar", {
  el: '.swiper-scrollbar'
}), _Swiper));
$('.artwork .row').imagesLoaded().progress(function () {
  $('.artwork .row').masonry(); // 渲染整體畫面
}); // $('.masonry .row').imagesLoaded().progress(function () {
//   $('.masonry .row').masonry(); // 渲染整體畫面
// });
//# sourceMappingURL=all.js.map
