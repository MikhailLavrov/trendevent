export interface HeaderMenuItem {
  title: string;
  key: string;
}

export const headerMenu: HeaderMenuItem[] = [
  {
    title: 'Главная',
    key: '',
  },
  {
    title: 'Проекты',
    key: 'projects',
  },
  {
    title: 'Услуги',
    key: 'services',
  },
  {
    title: 'Портфолио',
    key: 'portfolio',
  },
  {
    title: 'Контакты',
    key: 'contacts',
  },
];
