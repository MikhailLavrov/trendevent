import c from './Intro.module.css';

const textTitle = 'О компании';

const textContent = [
  'Мы создаем креативные композиции из воздушных шаров, оригинальные фотозоны и оформления для мероприятий Гатчины, Гатчинского района и Ленинградской области.',
  'В наших оформлениях мы следуем принципам сохранения традиционных семейных ценностей, уважения к исторической памяти и укрепления культурного кода нашей страны.',
  'Мы сотрудничаем с Администрациями, Домами культуры и предприятиями нашего города и всегда используем нестандартный подход к декору праздников.',
  'Мы оформляем мероприятия на территории Гатчинского, Волосовского, Тосненского, Ломоносовского районов Ленинградской области и в Санкт-Петербурге.'
];

export const IntroComponent = () => {
  return (
    <section className={c.intro} id='services'>
      <div className={`${c.intro__container} container`}>
        <div className={c.intro__header}>
          <h2 className={c.intro__headerTitle}>{textTitle}</h2>
          <p className={c.intro__headerSubtitle}>
            {textContent.map((line, index) => (
              <span key={index}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
