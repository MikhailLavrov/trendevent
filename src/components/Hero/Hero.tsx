import c from './Hero.module.css';
import HERO_IMAGE from '../../assets/hero_img.webp';

export const HeroComponent = () => {
  return (
    <section className={c.hero}>
      <div className={`${c.hero__container} container`}>
        <div className={c.hero__textWrapper}>
          <p className={c.hero__text}>Украшаем шарами важные мероприятия</p>
        </div>
        <div className={c.hero__imageWrapper}>
          <img width={200} src={HERO_IMAGE} alt="Спецпредложение" />
        </div>
      </div>
    </section>
  );
};
