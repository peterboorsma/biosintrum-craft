export function swiperConfig() {

const projects = new Swiper('.project-slider', {
    a11y: {
      prevSlideMessage: 'Vorige slide',
      nextSlideMessage: 'Volgende slide',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    slidesPerView: 1.1,
    spaceBetween: 10,
  //  pagination: {
  //    el: ".swiper-pagination",
  //    clickable: true,
  //  },
    breakpoints: {
      481: {
        slidesPerView: 1.25,
        spaceBetween: 20,
      },
  
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 60,
      },
    },
});

const news = new Swiper('.news-slider', {
    a11y: {
      prevSlideMessage: 'Vorige slide',
      nextSlideMessage: 'Volgende slide',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    slidesPerView: 1.1,
    spaceBetween: 10,
  //  pagination: {
  //    el: ".swiper-pagination",
  //    clickable: true,
  //  },
    breakpoints: {
      481: {
        slidesPerView: 1.25,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.25,
        spaceBetween: 20,
      },  
      1024: {
        slidesPerView: 3.25,
        spaceBetween: 60,
      },
    },
});

}