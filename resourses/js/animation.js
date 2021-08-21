console.warn("hey from animation.js");






// slider of costumers
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
    slidesPerView: 3,
      spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },

});