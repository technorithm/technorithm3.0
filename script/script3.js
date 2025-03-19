// var swiper = new Swiper(".mySwiper",{

//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 1000,
//   autoplayHoverPause: true,

//   effect: "coverflow",
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     // rotate: 10,
//     stretch: 0,
//     depth: 200,
//     modifier: 1,
//     slideShadows: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });





document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
          delay: 1000, // Correct autoplay timing
          disableOnInteraction: false, // Prevents autoplay from stopping on interaction
      },
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true, // Allows pagination bullets to be clickable
      },
  });
});
