import slick from 'slick-carousel';
import $ from 'jquery';

$('.slick-team').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        slidesToShow: 4,
      },
    },
  ],
  nextArrow: '<a class="control control--next"><p class="text">&#x45;</p></a>',
  prevArrow: '<a class="control control--prev"><p class="text">&#x44;</p></a>',
});

$('.slick-quote').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
      },
    },
  ],
  nextArrow: '<a class="control control--next"><p class="text">&#x45;</p></a>',
  prevArrow: '<a class="control control--prev"><p class="text">&#x44;</p></a>',
});

$('.slick-partners').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        slidesToShow: 4,
      },
    },
  ],
  nextArrow: '<a class="control control--next"><p class="text">&#x45;</p></a>',
  prevArrow: '<a class="control control--prev"><p class="text">&#x44;</p></a>',
});

console.log(slick)
