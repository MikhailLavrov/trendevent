import IMG_1_1 from '../assets/projects/1/1.webp';
import IMG_1_2 from '../assets/projects/1/2.webp';
import IMG_1_3 from '../assets/projects/1/3.webp';
import IMG_1_4 from '../assets/projects/1/4.webp';
import IMG_1_5 from '../assets/projects/1/5.webp';
import IMG_1_6 from '../assets/projects/1/6.webp';
import IMG_1_7 from '../assets/projects/1/7.webp';
import IMG_1_8 from '../assets/projects/1/8.webp';
import IMG_1_9 from '../assets/projects/1/9.webp';
import IMG_2_1 from '../assets/projects/2/1.webp';
import IMG_2_2 from '../assets/projects/2/2.webp';
import IMG_2_3 from '../assets/projects/2/3.webp';
import IMG_2_4 from '../assets/projects/2/4.webp';
import IMG_2_5 from '../assets/projects/2/5.webp';
import IMG_2_6 from '../assets/projects/2/6.webp';
import IMG_2_7 from '../assets/projects/2/7.webp';
import IMG_3_1 from '../assets/projects/3/1.webp';
import IMG_3_2 from '../assets/projects/3/2.webp';
import IMG_3_3 from '../assets/projects/3/3.webp';
import IMG_3_4 from '../assets/projects/3/4.webp';
import IMG_3_5 from '../assets/projects/3/5.webp';
import IMG_3_6 from '../assets/projects/3/6.webp';
import IMG_3_7 from '../assets/projects/3/7.webp';
import IMG_4_1 from '../assets/projects/4/1.webp';
import IMG_4_2 from '../assets/projects/4/2.webp';
import IMG_4_3 from '../assets/projects/4/3.webp';
import IMG_4_4 from '../assets/projects/4/4.webp';
import IMG_4_5 from '../assets/projects/4/5.webp';
import IMG_4_6 from '../assets/projects/4/6.webp';
import IMG_5_1 from '../assets/projects/5/1.webp';
import IMG_5_2 from '../assets/projects/5/2.webp';
import IMG_5_3 from '../assets/projects/5/3.webp';
import IMG_5_4 from '../assets/projects/5/4.webp';
import IMG_5_5 from '../assets/projects/5/5.webp';
import IMG_6_1 from '../assets/projects/6/1.webp';
import IMG_6_2 from '../assets/projects/6/2.webp';
import IMG_6_3 from '../assets/projects/6/3.webp';
import IMG_6_4 from '../assets/projects/6/4.webp';
import IMG_6_5 from '../assets/projects/6/5.webp';
import IMG_6_6 from '../assets/projects/6/6.webp';

interface Projects {
  title: string;
  description: string;
  image: string;
  images?: string[];
};

export const projectsData: Projects[] = [
  {
    title: 'Праздничные мероприятия в Ленинградской области',
    description: 'Цель проекта — сделать мероприятия в Ленинградской области яркими и запоминающимися благодаря креативному оформлению шарами и созданию современных фотозон.',
    image: IMG_1_1,
    images: [ IMG_1_1, IMG_1_2, IMG_1_3, IMG_1_4, IMG_1_5, IMG_1_6, IMG_1_7, IMG_1_8, IMG_1_9 ]
  },
  {
    title: 'Открытие объектов социальной инфраструктуры',
    description: 'Проект направлен на оформление объектов социальной инфраструктуры, включая открытие детских спортивных площадок, школ, детских садов и других спортивных объектов. Яркие украшения воздушными шарами акцентируют внимание на открытии новых или реконструированных объектов.',
    image: IMG_2_4,
    images: [ IMG_2_4, IMG_2_2, IMG_2_3, IMG_2_1, IMG_2_5, IMG_2_6, IMG_2_7 ]
  },
  {
    title: 'Государственные праздники России',
    description: 'Проект направлен на украшение мероприятий в цветах триколора, что способствует не только эстетическому оформлению, но и укреплению патриотических и исторических ценностей, а также созданию атмосферы единства и гордости за свою страну.',
    image: IMG_3_7,
    images: [ IMG_3_7, IMG_3_2, IMG_3_3, IMG_3_4, IMG_3_5, IMG_3_6, IMG_3_1 ]
  },
  {
    title: 'День Победы',
    description: 'Проект предполагает оформление мероприятий воздушными шарами в цветах Георгиевской ленты (чёрный с оранжевым), что символизирует сохранение исторической памяти и уважение к подвигам предков.',
    image: IMG_4_1,
    images: [ IMG_4_1, IMG_4_2, IMG_4_3, IMG_4_4, IMG_4_5, IMG_4_6 ]
  },
  {
    title: 'Год семьи',
    description: 'Проект направлен на сохранение семейных ценностей и традиций через оформление мероприятий воздушными шарами. Символичные композиции из шаров с лебедями напоминают о любви, верности и создании крепкой семьи. Розовые и голубые шары отсылают к биркам в роддомах, символизируя начало новой жизни и преемственность поколений.',
    image: IMG_5_1,
    images: [ IMG_5_1, IMG_5_2, IMG_5_3, IMG_5_4, IMG_5_5 ]
  },
  {
    title: 'Сохранение традиционных семейных ценностей',
    description: 'Проект направлен на сохранение традиционных семейных ценностей. Мы оформляем мероприятия воздушными шарами и создаём фотозоны для детских и семейных праздников, проходящих в нашем регионе, чтобы дети и родители могут надолго сохранить в памяти приятные моменты, проведённые вместе.',
    image: IMG_6_1,
    images: [ IMG_6_1, IMG_6_2, IMG_6_3, IMG_6_4, IMG_6_5, IMG_6_6 ]
  },
];
