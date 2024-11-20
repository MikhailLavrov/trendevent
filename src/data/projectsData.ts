import IMG_1 from '../assets/projects/1.webp';
import IMG_2 from '../assets/projects/2.webp';
import IMG_3 from '../assets/projects/3.webp';
import IMG_4 from '../assets/projects/4.webp';
import IMG_5 from '../assets/projects/5.webp';
import IMG_6 from '../assets/projects/6.webp';

interface Projects {
  title: string;
  description: string;
  image: string;
};

export const projectsData: Projects[] = [
  {
    title: 'Праздничные мероприятия в Ленинградской области',
    description: 'Цель проекта — сделать мероприятия в Ленинградской области яркими и запоминающимися благодаря креативному оформлению шарами и созданию современных фотозон.',
    image: IMG_1,
  },
  {
    title: 'Открытие объектов социальной инфраструктуры',
    description: 'Проект направлен на оформление объектов социальной инфраструктуры, включая открытие детских спортивных площадок, школ, детских садов и других спортивных объектов. Яркие украшения воздушными шарами акцентируют внимание на открытии новых или реконструированных объектов.',
    image: IMG_2,
  },
  {
    title: 'Государственные праздники России',
    description: 'Проект направлен на украшение мероприятий в цветах триколора, что способствует не только эстетическому оформлению, но и укреплению патриотических и исторических ценностей, а также созданию атмосферы единства и гордости за свою страну.',
    image: IMG_3,
  },
  {
    title: 'День Победы',
    description: 'Проект предполагает оформление мероприятий воздушными шарами в цветах Георгиевской ленты (чёрный с оранжевым), что символизирует сохранение исторической памяти и уважение к подвигам предков.',
    image: IMG_4,
  },
  {
    title: 'Год семьи',
    description: 'Проект направлен на сохранение семейных ценностей и традиций через оформление мероприятий воздушными шарами. Символичные композиции из шаров с лебедями напоминают о любви, верности и создании крепкой семьи. Розовые и голубые шары отсылают к биркам в роддомах, символизируя начало новой жизни и преемственность поколений.',
    image: IMG_5,
  },
  {
    title: 'Сохранение традиционных семейных ценностей',
    description: 'Проект направлен на сохранение традиционных семейных ценностей. Мы оформляем мероприятия воздушными шарами и создаём фотозоны для детских и семейных праздников, проходящих в нашем регионе, чтобы дети и родители смогли надолго сохранить в памяти приятные моменты, проведённые вместе.',
    image: IMG_6,
  },
];