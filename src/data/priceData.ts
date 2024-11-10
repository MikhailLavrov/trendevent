type PriceData = {
  title: string;
  price: number;
  measure?: string;
  category: 'decor' | 'animation' | 'present';
};

export const priceData: PriceData[] = [
  // Decor
  {
    title: 'Арки, гирлянды, стойки из воздушных шаров',
    price: 1000,
    measure: 'м',
    category: 'decor',
  },
  {
    title: 'Фотозоны из воздушных шаров',
    price: 10000,
    category: 'decor',
  },
  {
    title: 'Раздача воздушных шаров',
    price: 4500,
    category: 'decor',
  },
  {
    title: 'Сброс шаров',
    price: 6000,
    category: 'decor',
  },

  // Animation
  {
    title: 'Аниматоры и шоу-программы',
    price: 15000,
    category: 'animation',
  },
  {
    title: 'Аренда надувного батута',
    price: 20000,
    category: 'animation',
  },
  {
    title: 'Мастер-класс "готовим яблоки в карамели вместе”',
    price: 10000,
    category: 'animation',
  },
  {
    title: 'Раздача сладкой ваты',
    price: 10000,
    category: 'animation',
  },
  {
    title: 'Раздача попкорна',
    price: 10000,
    category: 'animation',
  },
  {
    title: 'Аквагрим',
    price: 5000,
    category: 'animation',
  },
  {
    title: 'Запуск салюта',
    price: 40000,
    category: 'animation',
  },

  // Present
  {
    title: 'Корпоративные подарки в деревянных ящичках',
    price: 3000,
    category: 'present',
  },
  {
    title: 'Цветочные букеты и композиции',
    price: 3500,
    category: 'present',
  },
];
