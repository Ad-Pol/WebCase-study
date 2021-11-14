/* eslint-disable no-unused-vars */
import Swiper from '../../node_modules/swiper/swiper-bundle';

const slider1 = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,

  breakpoints: {
    992: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        renderBullet: function A(index, className) {
          return `<div class= ${className}> <span class="number">${index + 1}</span> <span class="band"></span></div>`
        },
      },
    },
  },
}

const slider2 = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,

  breakpoints: {
    992: {
      navigation: {
        nextEl: '.swiper-button--next-project',
        prevEl: '.swiper-button--prev-project',
      },
    },
  },
}

const swiper = new Swiper('.swiper', slider1);
const swiper1 = new Swiper('.swiper-second', slider2);
