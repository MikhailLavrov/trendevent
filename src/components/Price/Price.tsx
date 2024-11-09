import { priceData } from '../../data/priceData';
import c from './Price.module.css';

export const PriceComponent = () => {
  const groupedPriceData = priceData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof priceData>);

  return (
    <section className={c.price} id='price'>
      <div className={`${c.price__container} container`}>
        <h2 className={c.price__header}>Наши услуги и цены</h2>
        <div className={c.price__innerContainer}>
          <div className={c.price__listContainer}>
            <div className={c.price__listWrapper}>
              {Object.entries(groupedPriceData).map(([category, items]) => (
                <div className={c.price__categoryWrapper} key={category}>
                  <p className={c.price__subtitle}>
                    {category === 'decor' ? 'Оформление воздушными шарами' 
                    : category === 'animation' ? 'Детям на праздник' 
                    : 'Подарки/Флористика'}
                  </p>
                  <ul className={c.price__list}>
                    {items.map((item, i) => (
                      <li className={c.price__item} key={i}>
                        <p className={c.price__itemTitle}>{item.title}</p>
                        <span className={c.price__dots}></span>
                        <p className={c.price__itemPrice}>
                          от {item.price.toLocaleString('ru-RU')} р.
                          {item.measure && <span>/{item.measure}</span>}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={c.price__imageWrapper}>
            <img
              width={200}
              src='https://polet-normalnuj.ru/wp-content/uploads/2020/09/IMG_2373-600x724.jpg'
              alt="Cleaning"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
