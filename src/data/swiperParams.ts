import { Navigation } from 'swiper/modules';

export const gallerySwiperParams = {
  modules: [ Navigation ],
  navigation: true,
  slidesPerView: 3,
  spaceBetween: 25,
  centeredSlides: true,
  initialSlide: 1,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 60,
    }
  },
};
