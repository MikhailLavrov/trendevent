import { Navigation } from 'swiper/modules';

export const gallerySwiperParams = {
  modules: [ Navigation ],
  navigation: true,
  slidesPerView: 3,
  spaceBetween: 60,
  centeredSlides: true,
  initialSlide: 1,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
    1024: {
      spaceBetween: 120,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 120,
    }
  },
};
