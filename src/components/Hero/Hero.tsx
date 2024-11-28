import c from './Hero.module.css';
import HERO_IMAGE from '../../assets/hero_img.webp';
import { motion } from "motion/react"
import { Image } from 'antd';
import { ImagePreloader } from '../../utils/ImagePreloader/ImagePreloader';
import { IMAGE_FALLBACK } from '../../data/contactsData';

export const HeroComponent = () => {
  return (
    <section className={c.hero}>
      <div className={`${c.hero__container} container`}>
        <div className={c.hero__textWrapper}>
          <motion.p
            className={c.hero__text}
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1, transition: {delay: 0.7}}}
          >
            Украшаем шарами важные мероприятия
          </motion.p>
        </div>
        <div className={c.hero__imageWrapper}>
          <Image
            width={200}
            fallback={IMAGE_FALLBACK}
            preview={false}
            src={HERO_IMAGE}
            alt="Спецпредложение"
            placeholder={<ImagePreloader />}
          />
        </div>
      </div>
    </section>
  );
};
