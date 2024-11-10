import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import './GallerySwiper.css';
import c from './GallerySection.module.css';
import { galleryData } from '../../data/galleryData';
import { gallerySwiperParams } from '../../data/swiperParams';
import { ImagePreloader } from '../../utils/ImagePreloader/ImagePreloader';

export const GallerySection = () => {

  const gallerySlides = galleryData.map((image, index) => (
    <SwiperSlide className='gallery__slide' key={index}>
      <div className={c.gallery__imageWrapper}>
        <Image
          src={image}
          preview={false}
          placeholder={<ImagePreloader />}
        />
      </div>
    </SwiperSlide>
  ));

  return (
    <section className={c.gallery} id='portfolio'>
      <div className={`container ${c.gallery__container}`} style={{overflow: 'hidden'}}>
        <h2 className={c.gallery__title}>
          Наши работы
        </h2>
        <div className={c.gallery__content}>
          <Swiper 
            {...gallerySwiperParams} 
            className='gallery__slider'
          >
            {gallerySlides}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
