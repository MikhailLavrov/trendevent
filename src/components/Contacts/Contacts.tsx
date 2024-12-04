import c from './Contacts.module.css';
import { ClockCircleOutlined, EnvironmentOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { contactsData } from '../../data/contactsData';
import { CallBackModal } from '../CallBackModal/CallBackModal';
import { MapComponent } from '../YandexMap/YandexMap';
// import MAP from '../../assets/map.webp';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const ContactsComponent = () => {
  
  const mapLink: string = isMobile
  ? `yandexnavi://build_route_on_map?lat_to=${contactsData.lat}&lon_to=${contactsData.lon}`
  : `https://yandex.ru/maps/?rtext=~${contactsData.lat},${contactsData.lon}`;
  
  return (
    <section className={c.contacts} id='contacts'>
      <div className={`${c.contacts__container} container`}>
        <h2 className={c.contacts__header}>Возникли вопросы?</h2>
        <div className={c.contacts__innerContainer}>
          <div className={c.contacts__infoWrapper}>
            <div className={c.contacts__itemWrapper}>
              <p className={c.contacts__subtitle}>Звоните нам по телефону:</p>
              <div className={c.contacts__item}>
                <MobileOutlined />
                <a href={`tel:${contactsData.phone}`} aria-label="Позвонить">{contactsData.phoneMasked}</a>
              </div>
            </div>
            <div className={c.contacts__item}>
              <ClockCircleOutlined />
              <p>{contactsData.openingHours}</p>
            </div>
            <div className={c.contacts__item}>
              <EnvironmentOutlined />
              <a href={mapLink} target="_blank" rel="noopener noreferrer" aria-label="Построить маршрут">
                {contactsData.address}
              </a>
            </div>
            <div className={c.contacts__item}>
              <MailOutlined />
              <a href={`mailto:${contactsData.email}`} aria-label="Написать email">{contactsData.email}</a>
            </div>
            <div className={c.contacts__itemWrapper}>
              <p className={c.contacts__subtitle}>Пишите в мессенджеры:</p>
              <div className={c.socialsWrapper}>
                <SocialLinks />
              </div>
            </div>
            <CallBackModal className={c.feedbackButton} />
          </div>
          <div className={c.contacts__map}>
            <MapComponent className={c.map} />
          </div>
        </div>
      </div>
    </section>
  );
};
