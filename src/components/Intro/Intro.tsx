import c from './Intro.module.css';
import LOGO_IMG from '../../assets/logo.svg';
import { contactsData, IMAGE_FALLBACK } from '../../data/contactsData';
import { Image } from 'antd';
import { ImagePreloader } from '../../utils/ImagePreloader/ImagePreloader';
import { motion } from 'motion/react';

export const IntroComponent = () => {
  return (
    <section className={c.intro}>
      <div className={`${c.intro__container} container`}>
        <motion.div 
          className={c.logoWrapper}
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1, transition: {delay: 0.5}}}
        >
          <Image
            width={250}
            height={75}
            fallback={IMAGE_FALLBACK}
            preview={false}
            src={LOGO_IMG}
            alt="Спецпредложение"
            placeholder={<ImagePreloader />}
          />
        </motion.div>
        <motion.div
          className={c.contacts}
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1, transition: {delay: 0.6}}}
        >
          <div className={c.phone}>
            <p className={c.phone__title}>Гатчина, СПб и ЛО</p>
            <a className={c.phone__number} href={`tel:${contactsData.phone}`}>{contactsData.phoneMasked}</a>
          </div>
          <div className={c.openingHours}>
            <p className={c.openingHours__text}>{contactsData.openingHours}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
