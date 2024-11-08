import c from './About.module.css';
import { CallbackForm } from '../CallBackForm/CallBackForm';

const textTitle = 'О компании';

const textContent = [
  'Мы создаем креативные композиции из воздушных шаров, оригинальные фотозоны и оформления для мероприятий Гатчины, Гатчинского района и Ленинградской области.',
  'В наших оформлениях мы следуем принципам сохранения традиционных семейных ценностей, уважения к исторической памяти и укрепления культурного кода нашей страны.',
  'Мы сотрудничаем с Администрациями, Домами культуры и предприятиями нашего города и всегда используем нестандартный подход к декору праздников.',
  'Мы оформляем мероприятия на территории Гатчинского, Волосовского, Тосненского, Ломоносовского районов Ленинградской области и в Санкт-Петербурге.'
];

export const AboutComponent = () => {
  return (
    <section className={c.about} id='services'>
      <div className={`${c.about__container} container`}>
        <div className={c.about__textWrapper}>
          <h2 className={c.about__headerTitle}>{textTitle}</h2>
          <p className={c.about__headerSubtitle}>
            {textContent.map((line, index) => (
              <span key={index}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
        <CallbackForm />
      </div>
    </section>
  )
}
