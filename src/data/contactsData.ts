interface ContactsData {
  companyName: string;
  openingHours: string;
  phone: string;
  phoneMasked: string;
  address: string;
  lat: number;
  lon: number;
  email: string;
  telegram: string;
  whatsapp: string;
  vk: string;
}

export const contactsData: ContactsData = {
  companyName: 'Тренд на праздник',
  openingHours: 'с 9:00 до 21:00 без выходных',
  phone: '+79315401970',
  phoneMasked: '+7 (931) 540-19-70',
  address: 'Бизнес-инкубатор. ЛО, Гатчинский район, п. Тайцы, ул. Юного Ленинца, д. 2',
  lat: 59.666948,
  lon: 30.105671,
  email: 'trendnaprazdnik@mail.ru',
  telegram: 'https://t.me/trend_na_prazdnik',
  whatsapp: 'https://api.whatsapp.com/send?phone=79315401970',
  vk: 'https://vk.com/trendnaprazdnik',
};
