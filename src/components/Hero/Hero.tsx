import c from './Hero.module.css';

export const HeroComponent = () => {
  return (
    <section className={c.hero}>
      <div className={`${c.hero__container} container`}>
        <div className={c.hero__imageWrapper}>
          <img
            width={200}
            src="https://mikhaillavrov.github.io/on-balloon/static/media/1.a1d9fb9d3e39ccb50396.webp"
            alt="Спецпредложение"
          />
        </div>
      </div>
    </section>
  );
};
